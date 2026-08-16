import { describe, expect, it } from "vitest";
import { pageCopy, pick } from "./content";

describe("bilingual content", () => {
  it("returns the correct localized version for English and Japanese", () => {
    const value = { en: "Seasonal dining", ja: "季節の料理" };
    expect(pick(value, "en")).toBe("Seasonal dining");
    expect(pick(value, "ja")).toBe("季節の料理");
  });

  it("keeps the core public pages fully bilingual", () => {
    const pageTitles = [pageCopy.home.heroTitle, pageCopy.menu.title, pageCopy.gallery.title, pageCopy.story.title, pageCopy.reservation.title];
    pageTitles.forEach((title) => {
      expect(title.en.length).toBeGreaterThan(0);
      expect(title.ja.length).toBeGreaterThan(0);
    });
  });
});
