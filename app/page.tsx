import Link from "next/link";
import Image from "next/image";
import {
  site,
  categories,
  courses,
  whyChooseUs,
  trustItems,
  achievements,
  gallery,
  testimonials,
  blogs,
  certifications,
  IMG,
  whatsappLink,
} from "@/lib/data";
import { HeroSlider, StatsBand } from "@/components/home-client";
import CourseCard from "@/components/CourseCard";
import { SectionHeading, CtaBand } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBand />

      {/* Trust strip */}
      <section className="container-x mt-16 grid gap-6 sm:grid-cols-3">
        {trustItems.map((t) => (
          <div
            key={t.title}
            className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-2xl">
              {t.icon}
            </span>
            <div>
              <h3 className="font-bold text-navy-900">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{t.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="container-x mt-24">
        <SectionHeading
          kicker="ক্যাটাগরি"
          title="যে যানের দক্ষতা শিখতে চান"
          sub="গাড়ি, মোটরসাইকেল, স্কুটার, সাইকেল ও প্রফেশনাল — আপনার পছন্দের ক্যাটাগরি বেছে নিন।"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/courses?category=${c.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-navy-900 group-hover:text-brand-600">{c.nameBn}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  কোর্স দেখুন →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mt-24 bg-slate-50 py-20">
        <div className="container-x">
          <SectionHeading
            kicker="কেন আমরা"
            title={`কেন ${site.name}?`}
            sub="সঠিক প্রশিক্ষণই নিরাপদ রাস্তার ভিত্তি — আমরা সেই মান নিয়ে কাজ করি।"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-13 w-13 place-items-center rounded-xl bg-brand-50 text-3xl" style={{ height: 52, width: 52 }}>
                  {w.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.text}</p>
              </div>
            ))}
            <div className="flex flex-col justify-between rounded-2xl bg-navy-900 p-7 text-white">
              <div>
                <h3 className="text-lg font-bold">নারী শিক্ষার্থীদের জন্য</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  আলাদা ব্যাচ, নমনীয় সময়সূচি ও নারী-বান্ধব পরিবেশ — স্কুটার থেকে গাড়ি পর্যন্ত সব
                  কোর্সে বিশেষ যত্ন।
                </p>
              </div>
              <Link
                href="/enroll?course=scooter-basic"
                className="mt-6 rounded-xl bg-brand-600 py-3 text-center text-sm font-bold transition hover:bg-brand-700"
              >
                স্কুটার কোর্সে ভর্তি হোন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="container-x mt-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">কোর্সসমূহ</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">জনপ্রিয় প্রশিক্ষণ কোর্স</h2>
          </div>
          <Link
            href="/courses"
            className="rounded-xl border-2 border-brand-600 px-6 py-2.5 font-bold text-brand-600 transition hover:bg-brand-600 hover:text-white"
          >
            সব দেখুন
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {courses.map((c) => (
            <div key={c.slug} className="min-w-[300px] max-w-[300px] sm:min-w-[340px] sm:max-w-[340px]">
              <CourseCard course={c} />
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-24 bg-navy-900 py-16">
        <div className="container-x grid gap-8 text-center sm:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.label}>
              <p className="text-4xl font-extrabold text-white sm:text-5xl">{a.value}</p>
              <p className="mt-2 text-sm text-slate-300">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="container-x mt-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">গ্যালারি</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">আমাদের প্রশিক্ষণের ঝলক</h2>
          </div>
          <Link
            href="/gallery"
            className="rounded-xl border-2 border-brand-600 px-6 py-2.5 font-bold text-brand-600 transition hover:bg-brand-600 hover:text-white"
          >
            সব দেখুন
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {gallery.slice(0, 6).map((g, i) => (
            <Link
              key={i}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100"
            >
              <Image
                src={g.src}
                alt={g.caption}
                width={400}
                height={400}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-navy-900/60 opacity-0 transition group-hover:opacity-100">
                <span className="text-3xl font-light text-white">+</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24 bg-slate-50 py-20">
        <div className="container-x">
          <SectionHeading
            kicker="শিক্ষার্থীদের মত"
            title="যাঁরা আমাদের ওপর ভরসা রাখেন"
            sub="আমরা খুশি কারণ আমাদের শিক্ষার্থীরা খুশি 😊"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="text-lg text-amber-400">★★★★★</div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-600">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-100 font-extrabold text-brand-700">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-navy-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.area}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="container-x mt-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">ব্লগ</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">সর্বশেষ লেখা</h2>
          </div>
          <Link
            href="/blogs"
            className="rounded-xl border-2 border-brand-600 px-6 py-2.5 font-bold text-brand-600 transition hover:bg-brand-600 hover:text-white"
          >
            সব দেখুন
          </Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.slice(0, 4).map((b) => (
            <Link
              key={b.slug}
              href={`/blogs/${b.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-50">
                <Image
                  src={b.image}
                  alt={b.title}
                  width={480}
                  height={300}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-slate-400">{b.date}</p>
                <h3 className="mt-2 font-bold leading-snug text-navy-900 group-hover:text-brand-600">
                  {b.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container-x mt-24">
        <SectionHeading kicker="সার্টিফায়েড" title="আমরা অনুসরণ করি" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {certifications.map((c) => (
            <div
              key={c}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-2xl">🛡️</span>
              <p className="text-sm font-bold text-navy-900">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Videos placeholder band */}
      <section className="container-x mt-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-navy-900">
            <Image src={IMG.hero1} alt="প্রশিক্ষণ ভিডিও" width={640} height={360} className="h-64 w-full object-cover opacity-80" />
          </div>
          <div className="flex flex-col justify-center rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600">মিডিয়া</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900">আমাদের প্রশিক্ষণ দেখুন নিজের চোখে</h2>
            <p className="mt-3 text-slate-500">
              থিওরি ক্লাস, হাতে-কলমে প্র্যাকটিস ও সার্টিফিকেট বিতরণ — গ্যালারিতে আমাদের প্রতিদিনের ঝলক।
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/gallery" className="rounded-xl bg-navy-900 px-6 py-3 font-bold text-white transition hover:bg-navy-800">
                গ্যালারি দেখুন
              </Link>
              <a
                href={whatsappLink("আমি প্রশিক্ষণ সম্পর্কে ভিডিও/ছবি দেখতে চাই।")}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-700 transition hover:border-brand-600 hover:text-brand-600"
              >
                হোয়াটসঅ্যাপে জানুন
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-24">
        <CtaBand waText="আসসালামু আলাইকুম! আমি এমএইচ ড্রাইভিং স্কুলে ভর্তি হতে চাই। বিস্তারিত জানাবেন প্লিজ।" />
      </div>
    </>
  );
}
