import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourse, getCategory, site, whatsappLink } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import { PageHero, CtaBand } from "@/components/ui";
import { CheckIcon, PhoneIcon, WhatsAppIcon, ClockIcon } from "@/components/Icons";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course?.title ?? "কোর্স" };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const cat = getCategory(course.categorySlug);
  const related = courses.filter((c) => c.categorySlug === course.categorySlug && c.slug !== course.slug).slice(0, 3);

  return (
    <>
      <PageHero title={course.title} crumb={cat?.nameBn ?? "কোর্স"} />
      <section className="container-x grid gap-10 py-14 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm">
            <Image
              src={course.image}
              alt={course.title}
              width={840}
              height={520}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-brand-50 px-4 py-1.5 font-bold text-brand-700">
              {cat?.nameBn}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-600">
              <ClockIcon className="h-4 w-4" /> {course.days} দিন
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-600">
              {course.hours} ঘণ্টা প্র্যাকটিস
            </span>
          </div>

          <h2 className="mt-8 text-2xl font-extrabold text-navy-900">কোর্স সম্পর্কে</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{course.summary}</p>

          <h2 className="mt-10 text-2xl font-extrabold text-navy-900">যা যা শেখানো হয়</h2>
          <ol className="mt-4 space-y-3">
            {course.curriculum.map((s, i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-slate-700">{s}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-2xl font-extrabold text-navy-900">কোর্সে যা অন্তর্ভুক্ত</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {course.includes.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-4 text-slate-700">
                <CheckIcon className="mt-1 h-4.5 w-4.5 shrink-0 text-emerald-600" style={{ height: 18, width: 18 }} />
                <span className="text-sm leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-extrabold text-navy-900">ভর্তির শর্ত</h2>
          <ul className="mt-4 space-y-2.5">
            {course.requirements.map((r, i) => (
              <li key={i} className="flex gap-2.5 text-slate-700">
                <span className="mt-1 text-brand-600">•</span> {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5">
            <p className="text-sm font-semibold text-slate-500">কোর্স ফি</p>
            <p className="mt-1 text-4xl font-extrabold text-navy-900">
              ৳ {course.price.toLocaleString("en-US")}
            </p>
            <ul className="mt-5 space-y-2 border-y border-slate-100 py-5 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>সময়কাল</span>
                <b className="text-navy-900">{course.days} দিন</b>
              </li>
              <li className="flex justify-between">
                <span>প্র্যাকটিস</span>
                <b className="text-navy-900">{course.hours} ঘণ্টা</b>
              </li>
              <li className="flex justify-between">
                <span>সার্টিফিকেট</span>
                <b className="text-emerald-600">হ্যাঁ</b>
              </li>
              <li className="flex justify-between">
                <span>শাখা</span>
                <b className="text-navy-900">জাহাজমারা</b>
              </li>
            </ul>
            <Link
              href={`/enroll?course=${course.slug}`}
              className="mt-6 block rounded-xl bg-brand-600 py-4 text-center font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
            >
              এই কোর্সে ভর্তি হোন
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-600 hover:text-brand-600"
              >
                <PhoneIcon className="h-4 w-4" /> কল
              </a>
              <a
                href={whatsappLink(`আমি "${course.title}" কোর্স সম্পর্কে জানতে চাই।`)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-500" /> হোয়াটসঅ্যাপ
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              ভর্তির সময় নগদ / বিকাশ / অফিসে পরিশোধ করা যায়
            </p>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="container-x pb-20">
          <h2 className="mb-8 text-2xl font-extrabold text-navy-900">সম্পর্কিত কোর্স</h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </section>
      )}

      <CtaBand waText={`আমি "${course.title}" কোর্সে ভর্তি হতে চাই।`} />
    </>
  );
}
