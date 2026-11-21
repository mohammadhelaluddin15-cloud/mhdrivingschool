import Image from "next/image";
import type { Metadata } from "next";
import { gallery } from "@/lib/data";
import { PageHero, CtaBand } from "@/components/ui";

export const metadata: Metadata = { title: "গ্যালারি" };

export default function GalleryPage() {
  return (
    <>
      <PageHero title="ইমেজ গ্যালারি" crumb="গ্যালারি" />
      <section className="container-x py-14">
        <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"}`}
            >
              <Image
                src={g.src}
                alt={g.caption}
                width={600}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/85 to-transparent p-4 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBand waText="আমি প্রশিক্ষণ সম্পর্কে জানতে চাই।" />
    </>
  );
}
