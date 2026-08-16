import { Check, ChevronDown, CircleAlert, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { copy, pageCopy, pick } from "@/lib/content";
import { trpc } from "@/lib/trpc";

const times = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];
type Seating = "counter" | "private" | "table";

export default function Reservation() {
  const { language } = useLanguage();
  const [fullName, setFullName] = useState(""); const [email, setEmail] = useState(""); const [phone, setPhone] = useState("");
  const [date, setDate] = useState(""); const [time, setTime] = useState("18:00"); const [partySize, setPartySize] = useState("2"); const [seating, setSeating] = useState<Seating>("counter"); const [occasion, setOccasion] = useState("");
  const reservation = trpc.reservation.create.useMutation();
  const availability = trpc.reservation.availability.useQuery({ date: date || "2000-01-01", partySize: Number(partySize) }, { enabled: Boolean(date) });
  const text = pageCopy.reservation;
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); reservation.mutate({ fullName, email, phone, reservationDate: date, reservationTime: time, partySize: Number(partySize), seatingPreference: seating, occasion: occasion || undefined }); };
  if (reservation.isSuccess && reservation.data) return <div className="reservation-page"><section className="container reservation-success"><div className="reservation-success__icon"><Check size={28} /></div><p className="eyebrow">{pick(text.confirmed, language)}</p><h1>{pick(text.confirmed, language)}</h1><p>{pick(text.successBody, language)}</p><div className="booking-reference">{pick(text.reference, language)} <strong>{reservation.data.reservationCode}</strong></div><Link href="/" className="button button--outline">{pick(copy.returnHome, language)}</Link></section></div>;
  return <div className="reservation-page"><section className="reservation-intro container"><SectionHeading align="center" eyebrow={text.eyebrow} title={text.title} body={text.body} /></section><section className="container reservation-layout"><form className="reservation-form" onSubmit={submit}>
    <div className="form-grid"><label><span>{pick(text.name, language)}</span><input required value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" /></label><label><span>{pick(text.email, language)}</span><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label><label><span>{pick(text.phone, language)}</span><input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" /></label><label><span>{pick(text.date, language)}</span><input required type="date" min={new Date().toISOString().slice(0, 10)} value={date} onChange={(e) => setDate(e.target.value)} /></label></div>
    <fieldset><legend>{pick(text.time, language)}</legend><div className="time-slots">{times.map((item) => { const isAvailable = !date || availability.data?.[item] !== false; return <button type="button" key={item} disabled={!isAvailable} className={time === item ? "is-selected" : ""} onClick={() => isAvailable && setTime(item)}>{item}</button>; })}</div><p className="availability-note">{date ? <><span className="availability-note__dot" />{availability.isFetching ? pick(text.checking, language) : pick(text.available, language)}</> : pick(text.chooseDate, language)}</p></fieldset>
    <div className="form-grid"><label><span>{pick(text.guests, language)}</span><span className="select-wrap"><select value={partySize} onChange={(e) => setPartySize(e.target.value)}>{Array.from({ length: 12 }, (_, index) => <option value={index + 1} key={index + 1}>{index + 1} {language === "en" ? (index === 0 ? "guest" : "guests") : "名"}</option>)}</select><ChevronDown size={16} /></span></label><label><span>{pick(text.seating, language)}</span><span className="select-wrap"><select value={seating} onChange={(e) => setSeating(e.target.value as Seating)}><option value="counter">{pick(text.counter, language)}</option><option value="private">{pick(text.private, language)}</option><option value="table">{pick(text.table, language)}</option></select><ChevronDown size={16} /></span></label></div>
    <label><span>{pick(text.occasion, language)}</span><textarea value={occasion} onChange={(e) => setOccasion(e.target.value)} rows={4} /></label>
    {reservation.isError && <p className="form-error"><CircleAlert size={17} />{pick(text.saveError, language)}</p>}
    <button className="button button--crimson reservation-submit" type="submit" disabled={reservation.isPending}>{reservation.isPending ? (language === "en" ? "Confirming…" : "確認中…") : pick(text.submit, language)}</button>
  </form><aside className="reservation-aside"><p>{pick(text.note, language)}</p><a href="tel:+81465320707"><Phone size={16} /> {pick(text.call, language)}</a><div className="reservation-aside__rule" /><p><b>{language === "en" ? "Location" : "所在地"}</b>{pick(copy.address, language)}</p></aside></section></div>;
}
