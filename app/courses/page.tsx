import type { Metadata } from "next";
import { courses } from "@/lib/data";
import { PageHero, FaqBlock, CtaBand } from "@/components/ui";
import CourseExplorer from "@/components/CourseExplorer";
import { faqs } from "@/lib/data";

export const metadata: Metadata = { title: "কোর্সসমূহ" };

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const sp = await searchParams;
  return (
    <>
      <PageHero title="আমাদের কোর্সসমূহ" crumb="কোর্সসমূহ" />
      <section className="container-x py-14">
        <CoursesClient category={sp.category} />
      </section>
      <section className="container-x pb-20">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-navy-900">সাধারণ জিজ্ঞাসা</h2>
        <div className="mx-auto max-w-3xl">
          <FaqBlock items={faqs} />
        </div>
      </section>
      <CtaBand waText="আমি কোর্সের বিস্তারিত জানতে চাই।" />
    </>
  );
}

function CoursesClient({ category }: { category?: string }) {
  // category is read server-side; pass down for initial filter
  return <CourseExplorer courses={courses} initialCategory={category} />;
}
