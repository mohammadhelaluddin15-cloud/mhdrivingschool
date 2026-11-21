import Link from "next/link";
import Image from "next/image";
import { site, IMG, categories } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, MailIcon, ClockIcon } from "@/components/Icons";
import CertVerifier from "@/components/CertVerifier";

const links1 = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/courses", label: "কোর্সসমূহ" },
  { href: "/enroll", label: "এনরোল করুন" },
  { href: "/blogs", label: "ব্লগ" },
];

const links2 = [
  { href: "/gallery", label: "গ্যালারি" },
  { href: "/branches", label: "শাখা" },
  { href: "/contact", label: "যোগাযোগ" },
  { href: "/privacy-policy", label: "প্রাইভেসি পলিসি" },
  { href: "/terms-and-conditions", label: "শর্তাবলী" },
  { href: "/refund-policy", label: "রিটার্ন ও রিফান্ড পলিসি" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-5 flex items-center gap-3" aria-label={site.name}>
            <Image src={IMG.logoMark} alt={site.name} width={48} height={48} />
            <span className="leading-tight">
              <span className="block text-xl font-extrabold text-white">{site.name}</span>
              <span className="block text-[10px] font-bold tracking-widest text-brand-500">
                ড্রাইভিং প্রশিক্ষণ কেন্দ্র · নোয়াখালী
              </span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            সুবর্ণচর, নোয়াখালীর আধুনিক ড্রাইভিং প্রশিক্ষণ কেন্দ্র। অভিজ্ঞ প্রশিক্ষক, ডুয়েল-কন্ট্রোল
            যান ও আন্তর্জাতিক মানের সিলেবাসে দক্ষ ও দায়িত্বশীল চালক তৈরিই আমাদের প্রতিশ্রুতি।
          </p>
          <p className="mt-4 text-xs text-slate-400">
            স্বত্বাধিকার: <span className="font-semibold text-slate-200">{site.proprietor}</span>
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.phoneHref}
              aria-label="কল করুন"
              className="rounded-lg bg-white/10 p-2.5 transition hover:bg-brand-600"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="হোয়াটসঅ্যাপ"
              className="rounded-lg bg-white/10 p-2.5 transition hover:bg-emerald-500"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">গুরুত্বপূর্ণ লিংক</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links1.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-brand-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2.5 text-sm">
            {links2.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-brand-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">যোগাযোগ</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span className="leading-relaxed">{site.addressBn}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <span className="leading-relaxed">{site.hours}</span>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">কোর্স ক্যাটাগরি</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses?category=${c.slug}`}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-brand-500 hover:text-brand-500"
                >
                  {c.nameBn}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <CertVerifier />
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">সার্টিফায়েড মান</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] leading-tight">
              {["সরকার অনুমোদিত সিলেবাস", "BRTA মানদণ্ড", "সড়ক নিরাপত্তা সচেতনতা", "প্রাথমিক চিকিৎসা"].map(
                (t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-2 text-slate-300"
                  >
                    🛡️ {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>
            স্থাপিত: {site.addressEn}
          </p>
        </div>
      </div>
    </footer>
  );
}
