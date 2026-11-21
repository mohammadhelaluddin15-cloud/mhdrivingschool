import { site } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5">
      <a
        href={site.phoneHref}
        aria-label="কল করুন"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition hover:scale-105 hover:bg-brand-700"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`আসসালামু আলাইকুম! আমি ${site.name} সম্পর্কে জানতে চাই।`)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="হোয়াটসঅ্যাপে কথা বলুন"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-600"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
