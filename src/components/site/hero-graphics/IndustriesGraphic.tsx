import { ShieldCheck, HeartPulse, Truck, Building2, Lock, Activity, CheckCircle2 } from "lucide-react";

export function IndustriesGraphic() {
  const sectors = [
    {
      name: "Financial Services & Fintech",
      icon: ShieldCheck,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
      compliance: "PCI-DSS · SOC 2 Type II",
      stat: "< 5ms",
      statLabel: "Execution SLA",
    },
    {
      name: "Healthcare & Life Sciences",
      icon: HeartPulse,
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
      compliance: "HIPAA · FHIR Interoperability",
      stat: "99.999%",
      statLabel: "Fault Tolerance",
    },
    {
      name: "Logistics & Global Fleet",
      icon: Truck,
      color: "text-brand-orange",
      bg: "bg-brand-orange/10 border-brand-orange/20",
      compliance: "IoT Telemetry · Geospatial Engine",
      stat: "-42%",
      statLabel: "Dwell Time",
    },
    {
      name: "Enterprise SaaS & GovTech",
      icon: Building2,
      color: "text-brand-sky",
      bg: "bg-brand-sky/10 border-brand-sky/20",
      compliance: "Zero-Trust · FedRAMP Ready",
      stat: "AES-256",
      statLabel: "End-to-End Encryption",
    },
  ];

  return (
    <div className="p-5 sm:p-6 text-paper select-none">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-paper/60 ml-2">enterprise-domains.matrix</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-sky bg-brand-sky/10 border border-brand-sky/30 px-2 py-0.5 rounded-full">
          <Lock className="h-3 w-3" />
          <span>REGULATED STANDARDS</span>
        </div>
      </div>

      {/* Grid of Regulated Sectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sectors.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.name}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`h-8 w-8 rounded-lg ${s.bg} border flex items-center justify-center ${s.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold font-mono ${s.color}`}>{s.stat}</div>
                  <div className="text-[9px] font-mono text-paper/50">{s.statLabel}</div>
                </div>
              </div>

              <div className="text-xs font-bold text-paper mt-1">{s.name}</div>
              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-paper/60">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                <span className="truncate">{s.compliance}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross-Sector System Telemetry Radar */}
      <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          <span className="text-[11px] font-medium text-paper/80">Cross-Domain Telemetry Throughput</span>
        </div>
        <span className="text-[11px] font-mono font-bold text-emerald-400">2.4M ops/sec</span>
      </div>

      {/* Footer Security Badges */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-paper/50">
        <span>Continuous Compliance</span>
        <span className="text-brand-sky font-semibold">Zero Vaporware Guarantee</span>
        <span>Audit Passed</span>
      </div>
    </div>
  );
}
