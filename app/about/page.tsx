import Image from "next/image";
import type { Metadata } from "next";
import { site, about, stats, whyChooseUs, IMG } from "@/lib/data";
import { PageHero, FaqBlock, CtaBand } from "@/components/ui";
import { faqs } from "@/lib/data";

export const metadata: Metadata = { title: "আমাদের সম্পর্কে" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="আমাদের সম্পর্কে" />
      <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">কে আমরা</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900">{site.name}</h2>
          <p className="mt-5 leading-relaxed text-slate-600">{about.intro}</p>
          <p className="mt-4 leading-relaxed text-slate-600">
            স্বত্বাধিকারী <b className="text-navy-900">{site.proprietor}</b>-এর তত্ত্বাবধানে আমরা গাড়ি,
            মোটরসাইকেল, স্কুটার ও সাইকেল প্রশিক্ষণ দিই। নারী-বান্ধব পরিবেশ ও নমনীয় সময়সূচি — যেন
            পেশাজীবী থেকে গৃহিণী, সবাই প্রশিক্ষণ নিতে পারেন।
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10">
          <Image src={IMG.classroom} alt="থিওরি ক্লাস" width={800} height={600} className="w-full object-cover" />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <span className="text-3xl">🎯</span>
            <h3 className="mt-3 text-xl font-bold text-navy-900">মিশন</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{about.mission}</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <span className="text-3xl">🛣️</span>
            <h3 className="mt-3 text-xl font-bold text-navy-900">ভিশন</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{about.vision}</p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <span className="text-3xl">💎</span>
            <h3 className="mt-3 text-xl font-bold text-navy-900">মূল্যবোধ</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {about.values.map((v) => (
                <li key={v} className="flex gap-2">
                  <span className="text-brand-600">✓</span> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 lg:order-1">
          <Image src={IMG.steering} alt="হাতে-কলমে প্রশিক্ষণ" width={800} height={600} className="w-full object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">আমাদের প্রশিক্ষণ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900">কীভাবে আমরা প্রশিক্ষণ দিই</h2>
          <ol className="mt-6 space-y-4">
            {[
              "ভর্তি ও লেভেল যাচাই — আপনার অভিজ্ঞতা বুঝে কোর্স প্ল্যান",
              "থিওরি ক্লাস — ট্রাফিক আইন, সিগন্যাল ও রোড মার্কিং",
              "হাতে-কলমে প্র্যাকটিস — ডুয়েল-কন্ট্রোল যানে প্রতিদিন ১ ঘণ্টা",
              "রাস্তায় আস্থা — ব্যস্ত রাস্তা, পার্কিং ও রিভার্স প্র্যাকটিস",
              "মূল্যায়ন ও সার্টিফিকেট — পরীক্ষার পর ভেরিফায়েবল সার্টিফিকেট",
            ].map((s, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-slate-700">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-brand-600">
                  {s.value.toLocaleString("en-US")}
                  {s.suffix}
                </p>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-wider text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="text-3xl">{w.icon}</span>
                <h3 className="mt-3 font-bold text-navy-900">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{w.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border-l-4 border-brand-600 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-navy-900">আমাদের সমাজ-প্রতিশ্রুতি</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{about.commitment}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-navy-900">সাধারণ জিজ্ঞাসা</h2>
        <div className="mx-auto max-w-3xl">
          <FaqBlock items={faqs} />
        </div>
      </section>

      <CtaBand waText="আসসালামু আলাইকুম! আমি এমএইচ ড্রাইভিং স্কুল সম্পর্কে জানতে চাই।" />
    </>
  );
}
