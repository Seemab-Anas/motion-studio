"use client";

import Image from "next/image";
import {
  Clock,
  Server,
  Cpu,
  ShieldCheck,
  MapPin,
  Globe2,
  ChevronRight,
} from "lucide-react";

export default function Page() {
  return (
    <main className="w-full bg-white text-slate-800">
      {/* Banner */}
      <header className="relative w-full h-[60vh] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/banner/it-support.jpg"
          alt="IT Support banner"
          fill
          className="object-cover"
          priority
        />

        {/* subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>

        {/* Left-aligned content — bottom on mobile, center on md+ */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-6 md:pb-0">
            {/* Use a full-width inner row so text sits on the left edge of the container */}
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm uppercase tracking-wider text-white/90 font-semibold">
                <span className="text-white/80">CLARYGEN</span>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-white break-words whitespace-normal leading-snug max-w-full">IT-SERVICE AND CONSULTANCY</span>
              </div>

              {/* Big left-aligned heading + desc */}
              <h1 className="mt-4 text-left text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                IT Support & Consultancy
              </h1>

              <p className="mt-4 text-left text-lg md:text-xl text-white/90">
                We deliver 24/7 managed IT support and on-demand technical services to businesses worldwide. Microsoft-certified engineers, fast on-site response (avg <strong>2-hour dispatch</strong>), unlimited user support and enterprise-grade solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Intro + Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid lg:grid-cols-3 gap-10 items-start">
        {/* Left: Long description */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#045494]">
            We keep your business running — reliably and securely
          </h2>
          <p className="text-slate-700 leading-relaxed">
            We deliver 24/7 managed IT support and on-demand technical services to businesses worldwide. Our Microsoft-certified engineers provide rapid on-site response (average <strong>2-hour dispatch</strong>) to resolve critical issues, backed by unlimited user support and expert technology consulting. Specializing in enterprise infrastructure, we offer industry-compliant IT solutions tailored to your operational needs, with certified expertise across HP, Dell, Cisco, Fujitsu, NetApp, EMC, Oracle, and Hitachi systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <Feature
              Icon={Clock}
              title="Rapid On-Site Response"
              text="Average 2-hour dispatch for critical incidents, minimizing downtime."
            />
            <Feature
              Icon={Server}
              title="Smart Hands & Data Center Support"
              text="Server, storage, and tape library assistance with expert technicians."
            />
            <Feature
              Icon={Cpu}
              title="IMAC & Proactive Maintenance"
              text="Installs, moves, adds, changes and proactive health checks."
            />
            <Feature
              Icon={ShieldCheck}
              title="Compliance & Security"
              text="GDPR-compliant managed services and infrastructure security best practices."
            />
          </div>

          <p className="text-slate-700 leading-relaxed mt-3">
            Headquartered in Mildenhall with 2+ years of experience serving global clients, we combine enterprise-grade technical capabilities with SMB-friendly responsiveness to keep your business running smoothly.
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

        {/* Right: Service portfolio / quick list */}
        <aside className="space-y-6">
          <div className="rounded-[18px] p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-[#045494] mb-3">Our comprehensive service portfolio</h3>
            <ul className="space-y-4">
              <ListItem Icon={Cpu} label="Proactive maintenance & IMAC support" />
              <ListItem Icon={Server} label="Smart Hands assistance for data center equipment" />
              <ListItem Icon={MapPin} label="Network infrastructure audits & site surveys" />
              <ListItem Icon={ShieldCheck} label="GDPR-compliant managed IT services" />
              <ListItem Icon={Globe2} label="Multi-vendor certified expertise & consulting" />
            </ul>
          </div>

          <div className="rounded-[18px] p-5 bg-[#F7FBFF] border border-[#E6F0FA]">
            <h4 className="text-sm font-semibold text-[#045494]">Fast facts</h4>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Stat value="24/7" label="Support" />
              <Stat value="2 hrs" label="Avg dispatch" />
              <Stat value="99.9%" label="Service reliability" />
              <Stat value="Multi-vendor" label="Certified engineers" />
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

/* ---------- Small components ---------- */

function Feature({ Icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
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

function ListItem({ Icon, label }) {
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
