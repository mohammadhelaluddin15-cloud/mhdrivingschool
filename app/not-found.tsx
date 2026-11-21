import Link from "next/link";
import { PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHero title="পৃষ্ঠাটি পাওয়া যায়নি" crumb="৪০৪" />
      <section className="container-x flex flex-col items-center py-20 text-center">
        <p className="text-7xl font-extrabold text-brand-600">৪০৪</p>
        <p className="mt-4 max-w-md text-slate-500">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে।
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/" className="rounded-xl bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700">
            হোমে ফিরুন
          </Link>
          <Link
            href="/courses"
            className="rounded-xl border border-slate-200 px-6 py-3 font-bold text-slate-700 transition hover:border-brand-600 hover:text-brand-600"
          >
            কোর্স দেখুন
          </Link>
        </div>
      </section>
    </>
  );
}
