import { TrendingUp, CheckCircle, BarChart3, Clock, ArrowUpRight } from "lucide-react";

export function CaseStudiesGraphic() {
  const cases = [
    {
      client: "Harbor Systems",
      sector: "Maritime & Supply Chain",
      headline: "Port Logistics & Telemetry AI",
      metrics: [
        { label: "Dwell Time", value: "-42%", positive: true },
        { label: "Terminal Throughput", value: "+180%", positive: true },
      ],
      status: "Production Live",
    },
    {
      client: "Meridian Logistics",
      sector: "Fleet Intelligence",
      headline: "Autonomous Routing Dispatch",
      metrics: [
        { label: "Routing Efficiency", value: "+31%", positive: true },
        { label: "Fuel Overhead", value: "-$1.4M", positive: true },
      ],
      status: "Production Live",
    },
    {
      client: "Nordic Health",
      sector: "Clinical Care AI",
      headline: "Hospital Triage Decision Engine",
      metrics: [
        { label: "Diagnostic Accuracy", value: "99.4%", positive: true },
        { label: "ER Wait Times", value: "-65%", positive: true },
      ],
      status: "Production Live",
    },
  ];

  return (
    <div className="p-5 sm:p-6 text-paper select-none">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-paper/60 ml-2">production-impact.audit</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <CheckCircle className="h-3 w-3" />
          <span>VERIFIED ROI</span>
        </div>
      </div>

      {/* Case Studies Summary Cards */}
      <div className="space-y-2.5">
        {cases.map((c) => (
          <div
            key={c.client}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-brand-orange/30 transition-all"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-paper">{c.client}</span>
                <span className="text-[10px] font-mono text-paper/40">· {c.sector}</span>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {c.status}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              {c.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-black/30 border border-white/5 px-2.5 py-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-paper/60">{m.label}</span>
                  <span className="text-xs font-mono font-extrabold text-brand-orange flex items-center gap-0.5">
                    {m.value}
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Overall Performance Summary */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-paper/60">
        <div className="flex items-center gap-1.5 text-brand-sky">
          <BarChart3 className="h-3.5 w-3.5" />
          <span>30+ Systems Shipped</span>
        </div>
        <div className="flex items-center gap-1 text-paper/70">
          <Clock className="h-3 w-3 text-amber-400" />
          <span>Avg Time-to-Production: 8 Weeks</span>
        </div>
      </div>
    </div>
  );
}
