import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/data";
import { getCategory } from "@/lib/data";
import { ClockIcon } from "@/components/Icons";

export default function CourseCard({ course }: { course: Course }) {
  const cat = getCategory(course.categorySlug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
      <Link href={`/courses/${course.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {course.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold text-white">
            জনপ্রিয়
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
          {cat?.nameBn ?? "কোর্স"} · অফলাইন
        </span>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy-900">
          <Link href={`/courses/${course.slug}`} className="transition hover:text-brand-600">
            {course.title}
          </Link>
        </h3>
        <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
          <span className="text-xl font-extrabold text-navy-900">৳ {course.price.toLocaleString("en-US")}</span>
          <span className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4 text-brand-600" />
            {course.days} দিন
          </span>
        </div>
        <div className="mt-4 flex gap-2 pt-1">
          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 rounded-lg border border-slate-200 py-2.5 text-center text-sm font-bold text-slate-700 transition hover:border-brand-600 hover:text-brand-600"
          >
            বিস্তারিত
          </Link>
          <Link
            href={`/enroll?course=${course.slug}`}
            className="flex-1 rounded-lg bg-brand-600 py-2.5 text-center text-sm font-bold text-white transition hover:bg-brand-700"
          >
            এনরোল
          </Link>
        </div>
      </div>
    </article>
  );
}
