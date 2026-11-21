"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site, IMG } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon, MapPinIcon } from "@/components/Icons";

const nav = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/courses", label: "কোর্সসমূহ" },
  { href: "/gallery", label: "গ্যালারি" },
  { href: "/blogs", label: "ব্লগ" },
  { href: "/branches", label: "শাখা" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-navy-900 text-slate-300 md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 text-brand-500" />
            <span className="truncate">{site.addressBn}</span>
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5 text-brand-500" /> {site.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" /> হোয়াটসঅ্যাপ
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-x flex h-[68px] items-center justify-between gap-4">
          <Link href="/" aria-label={site.name} className="flex items-center gap-3">
            <Image src={IMG.logoMark} alt={site.name} width={48} height={48} priority />
            <span className="leading-tight">
              <span className="block text-xl font-extrabold text-navy-900">{site.name}</span>
              <span className="block text-[10px] font-bold tracking-widest text-brand-600">
                ড্রাইভিং প্রশিক্ষণ কেন্দ্র · নোয়াখালী
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-slate-700 lg:flex">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-brand-600">
                {l.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700"
            >
              এনরোল করুন
            </Link>
          </nav>

          <button
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="মেনু"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 lg:hidden">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-50 py-3 font-semibold text-slate-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-xl bg-brand-600 px-5 py-3 text-center font-semibold text-white"
            >
              এনরোল করুন
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
