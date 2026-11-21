"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { site, courses, whatsappLink } from "@/lib/data";
import { WhatsAppIcon, PhoneIcon } from "@/components/Icons";

const slots = ["সকাল (৭টা–১১টা)", "বিকেল (২টা–৫টা)", "সন্ধ্যা (৫টা–৮টা)"];

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/15";
const labelCls = "mb-1.5 block text-sm font-bold text-navy-900";

export function EnrollForm() {
  const params = useSearchParams();
  const pre = params.get("course") ?? "";
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    course: courses.find((c) => c.slug === pre)?.slug ?? "",
    slot: slots[0],
    note: "",
  });
  const [sent, setSent] = useState(false);

  const course = courses.find((c) => c.slug === form.course);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg =
      `আসসালামু আলাইকুম। আমি ${form.name} (${form.phone})।\n` +
      `আমি "${course?.title ?? "কোর্স নির্ধারণ করিনি"}" কোর্সে ভর্তি হতে চাই।\n` +
      `পছন্দের সময়: ${form.slot}\n` +
      (form.address ? `ঠিকানা: ${form.address}\n` : "") +
      (form.note ? `মন্তব্য: ${form.note}` : "");
    window.open(whatsappLink(msg), "_blank");
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 sm:p-9">
      <h2 className="text-2xl font-extrabold text-navy-900">ভর্তি ফরম</h2>
      <p className="mt-1.5 text-sm text-slate-500">
        ফরম পূরণ করে সাবমিট করলে আপনার তথ্যসহ হোয়াটসঅ্যাপে মেসেজ ওপেন হবে — সেন্ড করলেই আমরা যোগাযোগ করব।
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls}>পূর্ণ নাম *</label>
          <input required value={form.name} onChange={set("name")} placeholder="আপনার নাম" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>মোবাইল নম্বর *</label>
          <input
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="01XXXXXXXXX"
            inputMode="tel"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>ঠিকানা</label>
          <input value={form.address} onChange={set("address")} placeholder="গ্রাম/ইউনিয়ন, উপজেলা" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>কোর্স নির্বাচন</label>
          <select value={form.course} onChange={set("course")} className={inputCls}>
            <option value="">— কোর্স বাছাই করুন —</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title} (৳{c.price.toLocaleString("en-US")})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>পছন্দের সময়</label>
          <select value={form.slot} onChange={set("slot")} className={inputCls}>
            {slots.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>মন্তব্য (ঐচ্ছিক)</label>
          <textarea rows={3} value={form.note} onChange={set("note")} placeholder="কিছু জানাতে চাইলে লিখুন" className={inputCls} />
        </div>
      </div>

      {course && (
        <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm text-slate-700">
          নির্বাচিত কোর্স: <b>{course.title}</b> · ফি <b>৳ {course.price.toLocaleString("en-US")}</b> · সময়কাল{" "}
          <b>{course.days} দিন</b>
        </div>
      )}

      <button
        type="submit"
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
      >
        <WhatsAppIcon className="h-6 w-6" /> হোয়াটসঅ্যাপে ভর্তি নিশ্চিত করুন
      </button>

      {sent && (
        <p className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
          ✔ হোয়াটসঅ্যাপ খুলেছে — মেসেজটি সেন্ড করুন। আমরা শীঘ্রই যোগাযোগ করব। না খুললে{" "}
          <a href={site.phoneHref} className="font-bold underline">
            কল করুন {site.phoneDisplay}
          </a>
        </p>
      )}

      <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
        সরাসরি কথা বলতে চান?{" "}
        <a href={site.phoneHref} className="flex items-center gap-1 font-bold text-brand-600 hover:underline">
          <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg = `আসসালামু আলাইকুম। আমি ${form.name} (${form.phone})।\n\n${form.message || "এমএইচ ড্রাইভিং স্কুল সম্পর্কে জানতে চাই।"}`;
    window.open(whatsappLink(msg), "_blank");
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 sm:p-9">
      <h2 className="text-2xl font-extrabold text-navy-900">মেসেজ পাঠান</h2>
      <div className="mt-6 space-y-5">
        <div>
          <label className={labelCls}>নাম *</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="আপনার নাম"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>মোবাইল নম্বর *</label>
          <input
            required
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="01XXXXXXXXX"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>মেসেজ</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="আপনার প্রশ্ন বা মেসেজ লিখুন"
            className={inputCls}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
      >
        <WhatsAppIcon className="h-5 w-5" /> হোয়াটসঅ্যাপে পাঠান
      </button>
      {sent && (
        <p className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
          ✔ হোয়াটসঅ্যাপ খুলেছে — মেসেজটি সেন্ড করুন।
        </p>
      )}
    </form>
  );
}
