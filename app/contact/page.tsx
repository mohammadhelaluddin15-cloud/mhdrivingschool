import type { Metadata } from "next";
import { site } from "@/lib/data";
import { PageHero, CtaBand } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "যোগাযোগ" };

const cards = [
  { icon: <MapPinIcon className="h-6 w-6" />, title: "ঠিকানা", body: site.addressBn },
  { icon: <PhoneIcon className="h-6 w-6" />, title: "ফোন / হোয়াটসঅ্যাপ", body: site.phoneDisplay, href: site.phoneHref },
  { icon: <MailIcon className="h-6 w-6" />, title: "ইমেইল", body: site.email, href: `mailto:${site.email}` },
  { icon: <ClockIcon className="h-6 w-6" />, title: "অফিস সময়", body: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="যোগাযোগ করুন" crumb="যোগাযোগ" />
      <section className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                {c.icon}
              </span>
              <h3 className="mt-4 font-bold text-navy-900">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="mt-1.5 block break-words text-sm text-slate-600 hover:text-brand-600">
                  {c.body}
                </a>
              ) : (
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.body}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <iframe
              title="এমএইচ ড্রাইভিং স্কুল ম্যাপ"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <CtaBand waText="আসসালামু আলাইকুম! আমি এমএইচ ড্রাইভিং স্কুল সম্পর্কে জানতে চাই।" />
    </>
  );
}
