import { Check, CircleAlert } from "lucide-react";
import { useSearch } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { copy, pageCopy, pick } from "@/lib/content";
import { trpc } from "@/lib/trpc";

export default function CancelReservation() {
  const { language } = useLanguage();
  const search = useSearch();
  const code = new URLSearchParams(search).get("code") || "";
  const cancellation = trpc.reservation.cancel.useMutation();
  const text = pageCopy.cancellation;
  return <section className="container cancellation-page"><p className="eyebrow">{pick(text.eyebrow, language)}</p>{!code ? <><CircleAlert size={28} /><h1>{pick(text.invalid, language)}</h1></> : cancellation.isSuccess ? <><div className="reservation-success__icon"><Check size={28} /></div><h1>{pick(text.completed, language)}</h1></> : <><h1>{pick(text.title, language)}</h1><p>{pick(text.body, language)}</p>{cancellation.isError && <p className="form-error"><CircleAlert size={17} />{pick(text.error, language)}</p>}<button className="button button--crimson" type="button" onClick={() => cancellation.mutate({ code })} disabled={cancellation.isPending}>{pick(text.confirm, language)}</button></>}<a href="/" className="text-link">{pick(copy.returnHome, language)}</a></section>;
}
