"use client";

import { useState } from "react";
import { certificates } from "@/lib/data";

export default function CertVerifier() {
  const [serial, setSerial] = useState("");
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);

  const verify = () => {
    const q = serial.trim().toLowerCase();
    if (!q) return;
    const c = certificates.find((x) => x.serial.toLowerCase() === q);
    setResult(
      c
        ? { ok: true, msg: `${c.name} — ${c.course}` }
        : { ok: false, msg: "এই সিরিয়াল নম্বরে কোনো সার্টিফিকেট পাওয়া যায়নি। অফিসে যোগাযোগ করুন।" },
    );
  };

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">সার্টিফিকেট ভেরিফিকেশন</h3>
      <div className="mt-3 flex gap-2">
        <input
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && verify()}
          placeholder="যেমন: MHDS-2026-0001"
          className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
        />
        <button
          onClick={verify}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          যাচাই
        </button>
      </div>
      {result && (
        <p className={`mt-2 text-xs leading-relaxed ${result.ok ? "text-emerald-400" : "text-rose-400"}`}>
          {result.ok ? `✔ ${result.msg}` : `✖ ${result.msg}`}
        </p>
      )}
      <p className="mt-2 text-[11px] text-slate-400">
        সার্টিফিকেটে ছাপানো সিরিয়াল নম্বরটি লিখে যাচাই করুন।
      </p>
    </div>
  );
}
