import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs, getBlog } from "@/lib/data";
import { PageHero, CtaBand } from "@/components/ui";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  return { title: blog?.title ?? "ব্লগ" };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();
  const others = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <PageHero title={blog.title} crumb="ব্লগ" />
      <article className="container-x max-w-3xl py-12">
        <p className="text-sm font-semibold text-slate-400">{blog.date}</p>
        <div className="mt-5 overflow-hidden rounded-3xl shadow-sm">
          <Image src={blog.image} alt={blog.title} width={900} height={520} className="w-full object-cover" priority />
        </div>
        <h1 className="mt-8 text-3xl font-extrabold leading-snug text-navy-900">{blog.title}</h1>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
          {blog.body.map((p, i) => (
            <p key={i} className={i === 0 ? "font-medium text-navy-800" : ""}>
              {p}
            </p>
          ))}
        </div>
      </article>

      <section className="container-x pb-16">
        <h2 className="mb-8 text-2xl font-extrabold text-navy-900">আরও পড়ুন</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((b) => (
            <Link
              key={b.slug}
              href={`/blogs/${b.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold text-slate-400">{b.date}</p>
              <h3 className="mt-2 font-bold leading-snug text-navy-900 group-hover:text-brand-600">{b.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand waText="আমি ড্রাইভিং শিখতে আগ্রহী।" />
    </>
  );
}
