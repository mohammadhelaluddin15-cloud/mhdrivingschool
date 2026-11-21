import Image from "next/image";
import type { Metadata } from "next";
import { site, IMG } from "@/lib/data";
import { PageHero, CtaBand } from "@/components/ui";
import { MapPinIcon, ClockIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "আমাদের শাখা" };

export default function BranchesPage() {
  return (
    <>
      <PageHero title="আমাদের শাখা" crumb="শাখা" />
      <section className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <MapPinIcon className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-xl font-extrabold text-navy-900">জাহাজমারা প্রধান শাখা</h2>
                <p className="text-sm text-slate-500">{site.name}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="leading-relaxed text-slate-600">{site.addressBn}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <a href={site.phoneHref} className="text-slate-600 hover:text-brand-600">
                  {site.phoneDisplay} (কল ও হোয়াটসঅ্যাপ)
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span className="leading-relaxed text-slate-600">{site.hours}</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600">
              সকাল ও বিকেলের আলাদা ব্যাচ চলে — আপনার সুবিধামতো সময় বেছে নিন। নতুন শাখা আসছে শীঘ্রই।
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              title="শাখার ম্যাপ"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[IMG.hero1, IMG.hero2, IMG.classroom].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-slate-50 shadow-sm">
              <Image src={src} alt="শাখার ছবি" width={480} height={360} className="w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
      <CtaBand waText="আমি জাহাজমারা শাখা সম্পর্কে জানতে চাই।" />
    </>
  );
}
