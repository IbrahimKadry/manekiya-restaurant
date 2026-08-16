import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./db", () => ({
  createReservation: vi.fn(),
  cancelReservation: vi.fn(),
  getActiveReservationsForDate: vi.fn(),
}));

import { cancelReservation, createReservation, getActiveReservationsForDate } from "./db";
import { appRouter } from "./routers";

const baseInput = {
  fullName: "Aiko Tanaka", email: "aiko@example.com", phone: "+81 90 1234 5678", reservationDate: "2026-08-18", reservationTime: "18:30", partySize: 2, seatingPreference: "counter" as const,
};

const caller = appRouter.createCaller({ user: null, req: {} as never, res: {} as never });

describe("reservation router", () => {
  beforeEach(() => { vi.clearAllMocks(); vi.mocked(getActiveReservationsForDate).mockResolvedValue([]); });

  it("creates a public booking with a cancellation reference", async () => {
    const result = await caller.reservation.create(baseInput);
    expect(result.reservationCode).toMatch(/^MNK-/);
    expect(result.cancellationPath).toContain(result.reservationCode);
    expect(createReservation).toHaveBeenCalledWith(expect.objectContaining({ fullName: "Aiko Tanaka", reservationTime: "18:30" }));
  });

  it("reports a time as unavailable when capacity would be exceeded", async () => {
    vi.mocked(getActiveReservationsForDate).mockResolvedValue([{ reservationTime: "18:30", partySize: 19 }]);
    const availability = await caller.reservation.availability({ date: "2026-08-18", partySize: 2 });
    expect(availability["18:30"]).toBe(false);
  });

  it("cancels a booking through its public cancellation reference", async () => {
    vi.mocked(cancelReservation).mockResolvedValue(true);
    await expect(caller.reservation.cancel({ code: "MNK-ABC123" })).resolves.toEqual({ cancelled: true });
    expect(cancelReservation).toHaveBeenCalledWith("MNK-ABC123");
  });
});
