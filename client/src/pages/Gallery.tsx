import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { PhotoSlot } from "@/components/PhotoSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { gallerySlots, pageCopy, pick } from "@/lib/content";

export default function Gallery() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const text = pageCopy.gallery;
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return (
    <div className="page page--gallery">
      <section className="page-intro container"><SectionHeading align="center" eyebrow={text.eyebrow} title={text.title} body={text.body} /></section>
      <section className="container gallery-grid">
        {gallerySlots.map((slot, index) => <button type="button" className={`gallery-tile gallery-tile--${slot.size}`} key={slot.title.en} onClick={() => setSelected(index)} aria-label={pick(slot.title, language)}><PhotoSlot label={slot.title} /></button>)}
      </section>
      {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={pick(gallerySlots[selected].title, language)} onMouseDown={() => setSelected(null)}><div className="lightbox__panel" onMouseDown={(event) => event.stopPropagation()}><button className="lightbox__close" type="button" onClick={() => setSelected(null)} aria-label={pick(text.close, language)}><X /></button><PhotoSlot label={gallerySlots[selected].title} className="lightbox__image" /></div></div>}
    </div>
  );
}
