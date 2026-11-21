export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <div className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-14">
        <div className="container-x">
          <h1 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-slate-500">সর্বশেষ হালনাগাদ: {updated}</p>
        </div>
      </div>
      <article className="container-x max-w-3xl py-14">
        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-navy-900">{s.h}</h2>
              {s.p.map((p, j) => (
                <p key={j} className="mt-3 leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
