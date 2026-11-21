import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { EnrollForm } from "@/components/forms";

export const metadata: Metadata = { title: "ভর্তি ফরম" };

export default function EnrollPage() {
  return (
    <>
      <PageHero title="অনলাইন ভর্তি" crumb="এনরোল" />
      <section className="container-x max-w-3xl py-14">
        <Suspense fallback={<p className="text-center text-slate-500">লোড হচ্ছে…</p>}>
          <EnrollForm />
        </Suspense>
      </section>
    </>
  );
}
