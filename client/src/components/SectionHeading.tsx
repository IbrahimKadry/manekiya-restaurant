import { useLanguage } from "@/contexts/LanguageContext";
import { pick, type Localized } from "@/lib/content";

type SectionHeadingProps = {
  eyebrow?: Localized;
  title: Localized;
  body?: Localized;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  const { language } = useLanguage();
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{pick(eyebrow, language)}</p>}
      <h2>{pick(title, language)}</h2>
      {body && <p className="section-heading__body">{pick(body, language)}</p>}
    </div>
  );
}
