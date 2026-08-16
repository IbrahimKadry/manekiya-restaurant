import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PhotoSlot } from "@/components/PhotoSlot";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { copy, pageCopy, pick } from "@/lib/content";

export default function Story() {
  const { language } = useLanguage();
  const text = pageCopy.story;
  return <div className="page page--story">
    <section className="story-hero"><div className="container story-hero__grid"><div><p className="eyebrow">{pick(text.eyebrow, language)}</p><h1>{pick(text.title, language)}</h1><p>{pick(text.body, language)}</p></div><PhotoSlot label={{ en: "Restaurant story or chef portrait", ja: "店の物語または料理人の肖像写真" }} className="story-hero__image" /></div></section>
    <section className="section container editorial-grid"><div><SectionHeading eyebrow={text.historyEyebrow} title={text.historyTitle} /><p>{pick(text.historyBody, language)}</p></div><PhotoSlot label={{ en: "History and hospitality photograph", ja: "店の歴史ともてなしの写真" }} /></section>
    <section className="chef-band"><div className="container chef-band__grid"><PhotoSlot label={{ en: "Chef profile photograph", ja: "料理人のプロフィール写真" }} className="chef-band__image" /><div><p className="eyebrow">{pick(text.chefEyebrow, language)}</p><h2>{pick(text.chefTitle, language)}</h2><p>{pick(text.chefBody, language)}</p></div></div></section>
    <section className="section container philosophy"><SectionHeading align="center" eyebrow={text.philosophyEyebrow} title={text.philosophyTitle} body={text.philosophyBody} /><Link href="/reservation" className="text-link">{pick(copy.reserve, language)} <ArrowRight size={15} /></Link></section>
  </div>;
}
