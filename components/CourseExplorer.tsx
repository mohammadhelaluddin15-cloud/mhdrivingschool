"use client";

import { useState } from "react";
import { categories } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/lib/data";

export default function CourseExplorer({
  courses,
  initialCategory,
}: {
  courses: Course[];
  initialCategory?: string;
}) {
  const [cat, setCat] = useState<string>(initialCategory ?? "all");

  const filtered = cat === "all" ? courses : courses.filter((c) => c.categorySlug === cat);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setCat("all")}
          className={`rounded-full px-5 py-2 text-sm font-bold transition ${
            cat === "all" ? "bg-brand-600 text-white shadow-md shadow-brand-600/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          সব কোর্স ({courses.length})
        </button>
        {categories.map((c) => {
          const n = courses.filter((x) => x.categorySlug === c.slug).length;
          return (
            <button
              key={c.slug}
              onClick={() => setCat(c.slug)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                cat === c.slug
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c.nameBn} ({n})
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-slate-500">
        মোট <span className="font-bold text-navy-900">{filtered.length}</span> টি কোর্স দেখানো হচ্ছে
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
          এই ক্যাটাগরিতে কোনো কোর্স নেই।
        </p>
      ) : (
        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      )}
    </div>
  );
}
