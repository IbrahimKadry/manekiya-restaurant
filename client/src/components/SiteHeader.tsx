import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { copy, navigation, pick } from "@/lib/content";

export function SiteHeader() {
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" onClick={closeMenu} aria-label="Manekiya home">
          <span className="brand__kanji">まねき屋</span>
          <span className="brand__name">MANEKIYA</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={location === item.href ? "is-active" : ""}>
              {pick(item.label, language)}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <button className="language-toggle" onClick={toggleLanguage} type="button" aria-label="Switch language">
            {language === "en" ? "日本語" : "EN"}
          </button>
          <Link href="/reservation" className="button button--crimson header-cta">
            {pick(copy.reserve, language)}
          </Link>
          <button className="menu-toggle" onClick={() => setOpen((current) => !current)} type="button" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {pick(item.label, language)}
            </Link>
          ))}
          <Link href="/reservation" className="button button--crimson" onClick={closeMenu}>
            {pick(copy.reserve, language)}
          </Link>
        </nav>
      )}
    </header>
  );
}
