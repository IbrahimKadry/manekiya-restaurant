import { z } from "zod";

export const seatingOptions = ["counter", "private", "table"] as const;

export const reservationInputSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(320),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(64),
  reservationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a date."),
  reservationTime: z.string().regex(/^\d{2}:\d{2}$/, "Please choose a time."),
  partySize: z.number().int().min(1).max(12),
  seatingPreference: z.enum(seatingOptions),
  occasion: z.string().trim().max(240).optional(),
});

export type ReservationInput = z.infer<typeof reservationInputSchema>;
