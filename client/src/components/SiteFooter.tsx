import { Facebook, Instagram, MapPinned, Phone, Send, Twitter } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { copy, pick } from "@/lib/content";

const mapSource = "https://www.google.com/maps?q=2-10-16%20Kotobukicho%2C%20Odawara%2C%20Kanagawa%20250-0002%2C%20Japan&output=embed";

export function SiteFooter() {
  const { language } = useLanguage();
  const footerCopy = {
    map: { en: "Find Manekiya", ja: "アクセス" },
    contact: { en: "Contact", ja: "お問い合わせ" },
    follow: { en: "Follow", ja: "フォロー" },
    reserve: { en: "Reserve your evening", ja: "ご予約はこちら" },
  };

  return (
    <footer className="site-footer">
      <div className="footer-map" aria-label="Map to Manekiya">
        <iframe title="Map to Manekiya" src={mapSource} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="brand__kanji">まねき屋</p>
          <p className="footer-brand__name">MANEKIYA</p>
          <p>{language === "en" ? "A neighbourhood table for seasonal food, sake, and lingering conversation." : "季節の恵みとお酒、心ほどける会話のための小さな食卓。"}</p>
          <Link href="/reservation" className="footer-reserve">{pick(footerCopy.reserve, language)} <span>↗</span></Link>
        </div>
        <div className="footer-contact">
          <p className="footer-label">{pick(footerCopy.contact, language)}</p>
          <a href="tel:+81465320707"><Phone size={15} aria-hidden="true" /> +81 465-32-0707</a>
          <a href="https://www.google.com/maps/search/?api=1&query=2-10-16%20Kotobukicho%2C%20Odawara%2C%20Kanagawa%20250-0002%2C%20Japan" target="_blank" rel="noreferrer"><MapPinned size={15} aria-hidden="true" /> {pick(copy.address, language)}</a>
        </div>
        <div className="footer-social">
          <p className="footer-label">{pick(footerCopy.follow, language)}</p>
          <div className="social-row" aria-label="Social profile placements">
            <span title="Add Manekiya's Instagram URL" aria-label="Instagram profile placement"><Instagram size={18} /></span>
            <span title="Add Manekiya's LINE URL" aria-label="LINE profile placement"><Send size={18} /></span>
            <span title="Add Manekiya's X profile URL" aria-label="X profile placement"><Twitter size={18} /></span>
            <span title="Add Manekiya's Facebook URL" aria-label="Facebook profile placement"><Facebook size={18} /></span>
          </div>
          <p className="footer-map-label">{pick(footerCopy.map, language)}</p>
          <p>{pick(copy.station, language)}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Manekiya. {language === "en" ? "All Rights Reserved." : "All Rights Reserved."}</span>
        <span>{copy.japaneseName}</span>
      </div>
    </footer>
  );
}
