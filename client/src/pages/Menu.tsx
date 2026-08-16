import { useMemo, useState } from "react";
import { PhotoSlot } from "@/components/PhotoSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { menuCategories, menuItems, pageCopy, pick } from "@/lib/content";

export default function Menu() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredItems = useMemo(() => menuItems.filter((item) => activeCategory === "all" || item.category === activeCategory), [activeCategory]);
  const text = pageCopy.menu;
  return (
    <div className="page page--menu">
      <section className="page-intro container"><SectionHeading align="center" eyebrow={text.eyebrow} title={text.title} body={text.body} /></section>
      <section className="container menu-content">
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((category) => <button key={category.id} type="button" role="tab" aria-selected={activeCategory === category.id} className={activeCategory === category.id ? "is-active" : ""} onClick={() => setActiveCategory(category.id)}>{pick(category.label, language)}</button>)}
        </div>
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.name.en}>
              <PhotoSlot label={item.slot} className="menu-card__image" />
              <div className="menu-card__content">
                <p className="menu-card__jp">{pick(item.name, "ja")}</p>
                <div className="menu-card__title"><h2>{pick(item.name, language)}</h2><span>{pick(item.price, language)}</span></div>
                <p>{pick(item.description, language)}</p>
                <span className="menu-card__tag">{pick(text.tag, language)} · {pick(item.tags, language)}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
