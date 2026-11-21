import Link from "next/link";
import { ChevronRightIcon } from "@/components/Icons";

export function SectionHeading({
  kicker,
  title,
  sub,
  align = "center",
}: {
  kicker: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600">{kicker}</p>
      <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">{title}</h2>
      {sub && <p className={`mt-3 max-w-2xl text-slate-500 ${align === "center" ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, crumb }: { title: string; crumb?: string }) {
  return (
    <div className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-14">
      <div className="container-x">
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-600">
            হোম
          </Link>
          <ChevronRightIcon className="h-3.5 w-3.5" />
          <span className="font-semibold text-slate-700">{crumb ?? title}</span>
        </nav>
        <h1 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">{title}</h1>
      </div>
    </div>
  );
}

export function CtaBand({ waText }: { waText?: string }) {
  return (
    <section className="bg-navy-900 py-16">
      <div className="container-x flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          আজই শুরু করুন আপনার ড্রাইভিং জার্নি
        </h2>
        <p className="max-w-xl text-slate-300">
          সিট সীমিত — ভর্তি নিশ্চিত করতে আজই যোগাযোগ করুন। কল করুন বা হোয়াটসঅ্যাপে মেসেজ দিন, অথবা
          সরাসরি অফিসে আসুন।
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+8801879968491"
            className="rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            📞 01879-968491
          </a>
          <a
            href={`https://wa.me/8801879968491${waText ? `?text=${encodeURIComponent(waText)}` : ""}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-emerald-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            💬 হোয়াটসঅ্যাপ
          </a>
          <Link
            href="/enroll"
            className="rounded-xl border-2 border-white/20 px-7 py-3.5 font-bold text-white transition hover:border-brand-500 hover:text-brand-500"
          >
            অনলাইনে ভর্তি ফরম
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FaqBlock({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-brand-300 open:shadow-md open:shadow-brand-600/5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-navy-900">
            {f.q}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
