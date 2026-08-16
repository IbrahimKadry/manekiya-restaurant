import { ArrowDownRight, ArrowRight, Clock3, MapPin, Phone, TrainFront } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { PhotoSlot } from "@/components/PhotoSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { copy, pageCopy, pick, seating, signatureDishes } from "@/lib/content";

const mapSource = "https://www.google.com/maps?q=2-10-16%20Kotobukicho%2C%20Odawara%2C%20Kanagawa%20250-0002%2C%20Japan&output=embed";

export default function Home() {
  const { language } = useLanguage();
  const text = pageCopy.home;

  return (
    <>
      <section className="hero">
        <PhotoSlot priority label={{ en: "Atmospheric hero image — add an exterior, signature dish, or late-evening interior photograph", ja: "メインビジュアル用の写真 — 外観、看板料理、夜の店内写真を配置" }} className="hero__image" />
        <div className="hero__veil" />
        <div className="container hero__content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>{pick(text.heroEyebrow, language)}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}>{pick(text.heroTitle, language)}</motion.h1>
          <motion.p className="hero__body" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .16 }}>{pick(text.heroBody, language)}</motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .23 }}>
            <Link href="/reservation" className="button button--crimson">{pick(copy.reserve, language)} <ArrowRight size={15} /></Link>
            <a href="#featured" className="button button--outline">{pick(copy.viewMenu, language)} <ArrowDownRight size={15} /></a>
          </motion.div>
        </div>
        <div className="hero__side-note">{copy.japaneseName}</div>
      </section>

      <section id="featured" className="section section--dishes">
        <div className="container">
          <SectionHeading eyebrow={text.dishesEyebrow} title={text.dishesTitle} body={text.dishesBody} />
          <div className="signature-grid">
            {signatureDishes.map((dish, index) => (
              <motion.article className="dish-card" key={dish.name.en} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .42, delay: index * .07 }}>
                <PhotoSlot label={dish.slot} className="dish-card__image" />
                <div className="dish-card__body">
                  {index === 0 && <span className="dish-card__badge">{pick(text.chefPick, language)}</span>}
                  <p className="dish-card__jp">{pick(dish.name, "ja")}</p>
                  <h3>{pick(dish.name, language)}</h3>
                  <p>{pick(dish.description, language)}</p>
                  <div className="dish-card__line"><span>{pick(dish.price, language)}</span><span className="dish-card__rule" /></div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="center-cta"><Link href="/menu" className="text-link">{pick(text.viewAll, language)} <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="section section--seating">
        <div className="container seating-layout">
          <SectionHeading eyebrow={text.seatingEyebrow} title={text.seatingTitle} />
          <div className="seating-list">
            {seating.map((item) => (
              <article className="seating-item" key={item.mark}>
                <span>{item.mark}</span>
                <div><h3>{pick(item.title, language)}</h3><p>{pick(item.body, language)}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-band">
        <div className="container story-band__grid">
          <PhotoSlot label={{ en: "Chef and craft photograph", ja: "料理人と手仕事の写真" }} className="story-band__image" />
          <div className="story-band__copy">
            <p className="eyebrow">{pick(text.storyEyebrow, language)}</p>
            <h2>{pick(text.storyTitle, language)}</h2>
            <p>{pick(text.storyBody, language)}</p>
            <Link href="/story" className="text-link">{pick(text.storyCta, language)} <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--access">
        <div className="container access-layout">
          <div>
            <SectionHeading eyebrow={text.accessEyebrow} title={text.accessTitle} />
            <div className="access-list">
              <div><MapPin size={18} /><p><b>{language === "en" ? "Address" : "住所"}</b>{pick(copy.address, language)}</p></div>
              <div><TrainFront size={18} /><p><b>{language === "en" ? "Nearest station" : "最寄り駅"}</b>{pick(copy.station, language)}</p></div>
              <div><Clock3 size={18} /><p><b>{language === "en" ? "Hours" : "営業時間"}</b>{pick(copy.hours, language)}</p></div>
            </div>
            <a className="text-link" href="tel:+81465320707"><Phone size={15} /> {pick(text.call, language)}</a>
          </div>
          <div className="access-map"><iframe title="Manekiya location map" src={mapSource} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className="guest-notes">
        <div className="container guest-notes__inner">
          <p className="eyebrow">{pick(copy.guestNotes, language)}</p>
          <p>{pick(copy.guestNotesBody, language)}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=%E9%A3%9F%E9%85%92%E5%B1%8B%20%E3%81%BE%E3%81%AD%E3%81%8D%E5%B1%8B%20%E5%B0%8F%E7%94%B0%E5%8E%9F" target="_blank" rel="noreferrer" className="text-link">{pick(text.reviewCta, language)} <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="section section--contact">
        <div className="container contact-cta">
          <div><p className="eyebrow">{pick(text.contactEyebrow, language)}</p><h2>{pick(text.contactTitle, language)}</h2><p>{pick(text.contactBody, language)}</p></div>
          <Link href="/reservation" className="button button--crimson">{pick(copy.reserve, language)} <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  );
}
