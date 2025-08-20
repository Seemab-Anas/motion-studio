"use client";

import Image from "next/image";
import {
  FileText,
  BarChart2,
  Calculator,
  CreditCard,
  MapPin,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

export default function Page() {
  return (
    <main className="w-full bg-white text-slate-800">
      {/* Banner */}
      <header className="relative w-full h-[60vh] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/banner/fb-solutions.jpg"
          alt="Financial & Business Solutions banner"
          fill
          className="object-cover"
          priority
        />

        {/* DARK BLACK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Left-aligned banner content — bottom on mobile, center on md+ */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-6 md:pb-0">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm uppercase tracking-wider text-white/90 font-semibold">
                <span className="text-white/80">CLARYGEN</span>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-white break-words whitespace-normal leading-snug max-w-full">FINANCIAL & BUSINESS SOLUTIONS</span>
              </div>

              {/* Heading + description */}
              <h1 className="mt-4 text-left text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                Financial & Business Solutions
              </h1>

              <p className="mt-4 text-left text-lg md:text-xl text-white/90">
                End-to-end financial management and business optimisation delivered by ACCA-certified accountants and Big 4-trained advisors. HMRC-compliant tax solutions, precision bookkeeping and payroll processing using QuickBooks, Xero and SAP.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid lg:grid-cols-3 gap-10 items-start">
        {/* Left: Main content */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#045494]">
            Enterprise expertise, personalised service
          </h2>

          <p className="text-slate-700 leading-relaxed">
            We provide end-to-end financial management and business optimisation services through our team of ACCA-certified accountants and Big 4-trained advisors. Our specialists deliver HMRC-compliant tax solutions (VAT, CIS, corporate tax), precision bookkeeping, and strategic payroll processing with guaranteed accuracy, leveraging industry-leading platforms like QuickBooks, Xero, and SAP.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-800">Core Financial Services Include</h3>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <ServiceCard
              Icon={FileText}
              title="Tax Compliance"
              text="Penalty-free VAT / CIS filing and annual returns — expert HMRC handling."
            />
            <ServiceCard
              Icon={Calculator}
              title="Accounting Services"
              text="Daily transaction reconciliation and audit-ready financial statements."
            />
            <ServiceCard
              Icon={BarChart2}
              title="Business Advisory"
              text="Cash flow forecasting, KPI analysis, and growth strategy development."
            />
            <ServiceCard
              Icon={CreditCard}
              title="Payroll Management"
              text="Automated contractor payments and RTI submissions with guaranteed accuracy."
            />
          </div>

          <p className="text-slate-700 leading-relaxed mt-3">
            Headquartered in London with 5+ years of cross-sector experience, we combine enterprise-grade financial expertise with personalised support to help UK businesses minimise liabilities and maximise operational efficiency.
          </p>

          <div className="mt-6">
            <a
              href="/contactUs"
              className="inline-flex items-center gap-3 bg-[#045494] text-white font-semibold px-6 py-3 rounded-[10px] shadow hover:shadow-lg transition"
            >
              Contact our team
            </a>
          </div>
        </div>

        {/* Right: Quick facts / highlights */}
        <aside className="space-y-6">
          <div className="rounded-[18px] p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-[#045494] mb-3">Core highlights</h3>
            <ul className="space-y-4">
              <AsideItem Icon={CheckCircle} label="HMRC-compliant tax solutions" />
              <AsideItem Icon={FileText} label="Audit-ready bookkeeping" />
              <AsideItem Icon={BarChart2} label="Strategic business advisory" />
              <AsideItem Icon={CreditCard} label="Accurate payroll & RTI" />
            </ul>
          </div>

          <div className="rounded-[18px] p-5 bg-[#F7FBFF] border border-[#E6F0FA]">
            <h4 className="text-sm font-semibold text-[#045494]">Fast facts</h4>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Stat value="5+ yrs" label="Experience" />
              <Stat value="HMRC" label="Compliant" />
              <Stat value="QuickBooks" label="Platform" />
              <Stat value="Xero • SAP" label="Supported" />
            </div>
          </div>

          <div className="rounded-[18px] p-5 border border-gray-50">
            <div className="text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#045494]" />
                <span>Headquartered in London</span>
              </div>
              <p className="mt-3 text-xs text-slate-500">Personalised financial teams for UK businesses — focus on accuracy, compliance and growth.</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ---------- Small components ---------- */

function ServiceCard({ Icon, title, text }) {
  return (
    <div className="rounded-[14px] bg-gray-50 p-4 shadow-sm hover:shadow-md transition flex gap-4">
      <div className="flex-none bg-[#045494]/10 p-3 rounded-full">
        <Icon className="w-6 h-6 text-[#045494]" />
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{text}</p>
      </div>
    </div>
  );
}

function AsideItem({ Icon, label }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-none bg-white rounded-full p-2 shadow-sm">
        <Icon className="w-5 h-5 text-[#045494]" />
      </div>
      <span className="text-sm text-slate-700">{label}</span>
    </li>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white rounded-lg p-3 text-center shadow">
      <div className="text-xl font-bold text-[#045494]">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}
