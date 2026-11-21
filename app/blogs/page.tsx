import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogs } from "@/lib/data";
import { PageHero, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "ব্লগ" };

export default function BlogsPage() {
  return (
    <>
      <PageHero title="ব্লগ ও টিপস" crumb="ব্লগ" />
      <section className="container-x py-14">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blogs/${b.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-50">
                <Image
                  src={b.image}
                  alt={b.title}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold text-slate-400">{b.date}</p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-navy-900 group-hover:text-brand-600">
                  {b.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{b.excerpt}</p>
                <span className="mt-4 text-sm font-bold text-brand-600">পড়ুন →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand waText="আমি ড্রাইভিং শিখতে আগ্রহী।" />
    </>
  );
}
