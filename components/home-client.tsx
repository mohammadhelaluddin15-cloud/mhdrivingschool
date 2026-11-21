"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMG, stats } from "@/lib/data";
import { ChevronRightIcon } from "@/components/Icons";

const slides = [
  {
    image: IMG.hero1,
    kicker: "এমএইচ ড্রাইভিং স্কুল · সুবর্ণচর, নোয়াখালী",
    title: "নিরাপদ চালক হোন, আত্মবিশ্বাসে চালান",
    sub: "অভিজ্ঞ প্রশিক্ষক ও ডুয়েল-কন্ট্রোল যানে সাজানো প্রশিক্ষণ মডিউল — গাড়ি, বাইক, স্কুটার ও সাইকেল।",
  },
  {
    image: IMG.hero2,
    kicker: "নতুন ব্যাচ ভর্তি চলছে",
    title: "বাইক ও স্কুটার প্রশিক্ষণে ভর্তি চলছে",
    sub: "নারী-পুরুষ সবার জন্য আলাদা ব্যাচ, নমনীয় সময় ও কোর্স শেষে সার্টিফিকেট।",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[520px] overflow-hidden bg-navy-900 sm:h-[560px] lg:h-[620px]">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <Image src={s.image} alt={s.title} fill priority={idx === 0} className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/55 to-transparent" />
        </div>
      ))}

      <div className="container-x relative flex h-full flex-col justify-center">
        <div className="max-w-xl">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            {slides[i].kicker}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {slides[i].title}
          </h1>
          <p className="mt-4 text-lg text-slate-200">{slides[i].sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/enroll"
              className="rounded-xl bg-brand-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
            >
              শুরু করুন
            </Link>
            <Link
              href="/courses"
              className="flex items-center gap-1 rounded-xl border-2 border-white/25 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:border-brand-500 hover:text-brand-400"
            >
              কোর্স দেখুন <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`স্লাইড ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand-500" : "w-2.5 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1600);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-extrabold text-navy-900 sm:text-5xl">
        {n.toLocaleString("en-US")}
        <span className="text-brand-600">{suffix}</span>
      </p>
      <p className="mt-1.5 text-sm font-semibold uppercase tracking-wider text-slate-500">{label}</p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="container-x -mt-16 relative z-10">
      <div className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-900/5 sm:grid-cols-4">
        {stats.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
