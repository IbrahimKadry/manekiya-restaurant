import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { nanoid } from "nanoid";
import { cancelReservation, createReservation, getActiveReservationsForDate } from "./db";
import { reservationInputSchema } from "./reservations";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  reservation: router({
    create: publicProcedure.input(reservationInputSchema).mutation(async ({ input }) => {
      const activeReservations = await getActiveReservationsForDate(input.reservationDate);
      const reservedSeats = activeReservations
        .filter((reservation) => reservation.reservationTime === input.reservationTime)
        .reduce((total, reservation) => total + reservation.partySize, 0);
      if (reservedSeats + input.partySize > 20) {
        throw new Error("That time is no longer available.");
      }
      const reservationCode = `MNK-${nanoid(10).toUpperCase()}`;
      await createReservation({
        reservationCode,
        ...input,
        occasion: input.occasion || null,
      });
      return {
        reservationCode,
        cancellationPath: `/cancel?code=${reservationCode}`,
      };
    }),
    availability: publicProcedure.input(z.object({ date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), partySize: z.number().int().min(1).max(12) })).query(async ({ input }) => {
      const activeReservations = await getActiveReservationsForDate(input.date);
      const seatsByTime = activeReservations.reduce<Record<string, number>>((summary, reservation) => {
        summary[reservation.reservationTime] = (summary[reservation.reservationTime] || 0) + reservation.partySize;
        return summary;
      }, {});
      return Object.fromEntries(Object.entries(seatsByTime).map(([time, seats]) => [time, seats + input.partySize <= 20]));
    }),
    cancel: publicProcedure.input(z.object({ code: z.string().min(1).max(32) })).mutation(async ({ input }) => ({
      cancelled: await cancelReservation(input.code),
    })),
  }),
});

export type AppRouter = typeof appRouter;
