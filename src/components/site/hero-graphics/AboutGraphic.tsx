import { Eye, Compass, Terminal, Shield, Zap, Sparkles } from "lucide-react";

export function AboutGraphic() {
  const triad = [
    {
      title: "VISION",
      role: "Strategic Foresight",
      desc: "Architectural viability, market moats & executive roadmaps before writing code.",
      icon: Eye,
      color: "text-brand-sky",
      bg: "bg-brand-sky/10 border-brand-sky/30",
    },
    {
      title: "GURU",
      role: "Senior Engineering ICs",
      desc: "Staff & Principal engineers directly in the codebase. Zero junior hand-offs.",
      icon: Compass,
      color: "text-brand-orange",
      bg: "bg-brand-orange/10 border-brand-orange/30",
    },
    {
      title: "LABS",
      role: "Production Execution",
      desc: "High-velocity delivery cycles shipping production software in weeks, not quarters.",
      icon: Terminal,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/30",
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
          <span className="text-[11px] font-mono text-paper/60 ml-2">operating-triad.engine</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-2 py-0.5 rounded-full">
          <Sparkles className="h-3 w-3" />
          <span>FIRM ARCHITECTURE</span>
        </div>
      </div>

      {/* Triad Pillars */}
      <div className="space-y-3">
        {triad.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 flex items-start gap-3.5 hover:border-white/20 transition-all"
            >
              <div className={`h-9 w-9 rounded-xl ${t.bg} border flex items-center justify-center ${t.color} shrink-0 mt-0.5`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black tracking-wider ${t.color}`}>{t.title}</span>
                  <span className="text-[10px] font-mono text-paper/50">{t.role}</span>
                </div>
                <p className="mt-1 text-[11px] text-paper/70 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operating Stats Banner */}
      <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-xs font-bold font-mono text-brand-orange">100%</div>
          <div className="text-[9px] font-mono text-paper/50 mt-0.5">Senior IC Bench</div>
        </div>
        <div className="border-x border-white/10">
          <div className="text-xs font-bold font-mono text-brand-sky">Weeks</div>
          <div className="text-[9px] font-mono text-paper/50 mt-0.5">Not Quarters</div>
        </div>
        <div>
          <div className="text-xs font-bold font-mono text-emerald-400">0%</div>
          <div className="text-[9px] font-mono text-paper/50 mt-0.5">Junior Handoff</div>
        </div>
      </div>

      {/* Footer Assurance */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-paper/50">
        <span>VisionGuru Labs LLP</span>
        <span className="text-paper/70">Engineered for Outcomes</span>
        <span>Est. 2024</span>
      </div>
    </div>
  );
}
