import { describe, expect, it } from "vitest";
import { reservationInputSchema } from "./reservations";

const validReservation = {
  fullName: "Aiko Tanaka",
  email: "aiko@example.com",
  phone: "+81 90 1234 5678",
  reservationDate: "2026-08-18",
  reservationTime: "18:30",
  partySize: 2,
  seatingPreference: "counter" as const,
};

describe("reservationInputSchema", () => {
  it("accepts a complete reservation request", () => {
    expect(reservationInputSchema.parse(validReservation)).toMatchObject(validReservation);
  });

  it("requires a valid guest email, service date, and time", () => {
    const result = reservationInputSchema.safeParse({
      ...validReservation,
      email: "not-an-email",
      reservationDate: "18-08-2026",
      reservationTime: "evening",
    });
    expect(result.success).toBe(false);
  });

  it("keeps booking capacity in the supported range", () => {
    expect(reservationInputSchema.safeParse({ ...validReservation, partySize: 0 }).success).toBe(false);
    expect(reservationInputSchema.safeParse({ ...validReservation, partySize: 13 }).success).toBe(false);
  });
});
