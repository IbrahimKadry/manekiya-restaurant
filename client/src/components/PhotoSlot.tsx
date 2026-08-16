import { ImagePlus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pick, type Localized } from "@/lib/content";

type PhotoSlotProps = {
  label: Localized;
  className?: string;
  priority?: boolean;
};

export function PhotoSlot({ label, className = "", priority = false }: PhotoSlotProps) {
  const { language } = useLanguage();
  return (
    <div className={`photo-slot ${priority ? "photo-slot--priority" : ""} ${className}`} role="img" aria-label={pick(label, language)}>
      <div className="photo-slot__grain" />
      <div className="photo-slot__content">
        <ImagePlus aria-hidden="true" size={18} strokeWidth={1.25} />
        <span>{pick(label, language)}</span>
      </div>
    </div>
  );
}
