import { Clock, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight, UserCheck, Calendar } from "lucide-react";

export function ContactGraphic() {
  const steps = [
    {
      num: "01",
      title: "Direct Partner Review",
      time: "< 24 Hours",
      desc: "Your inquiry is reviewed directly by a Senior Partner — never routed to sales reps or SDR gatekeepers.",
      icon: UserCheck,
      color: "text-brand-orange",
      bg: "bg-brand-orange/10 border-brand-orange/30",
    },
    {
      num: "02",
      title: "Architecture Deep-Dive",
      time: "45-Min Session",
      desc: "Technical jam on system viability, architecture trade-offs, and high-level tech stack fit.",
      icon: Calendar,
      color: "text-brand-sky",
      bg: "bg-brand-sky/10 border-brand-sky/30",
    },
    {
      num: "03",
      title: "Production Roadmap",
      time: "5 Business Days",
      desc: "A scoped engagement proposal with senior pod composition, milestones, and fixed weekly cadence.",
      icon: CheckCircle2,
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
          <span className="text-[11px] font-mono text-paper/60 ml-2">partner-dispatch.sla</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <Clock className="h-3 w-3" />
          <span>SLA &lt; 24H</span>
        </div>
      </div>

      {/* 3-Step Engagement Protocol */}
      <div className="space-y-3">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 flex items-start gap-3 hover:border-white/20 transition-all"
            >
              <div className={`h-8 w-8 rounded-lg ${s.bg} border flex items-center justify-center ${s.color} shrink-0 text-xs font-mono font-bold mt-0.5`}>
                {s.num}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-paper">{s.title}</span>
                  <span className={`text-[10px] font-mono font-bold ${s.color}`}>{s.time}</span>
                </div>
                <p className="mt-1 text-[11px] text-paper/70 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Assurance Badges */}
      <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[10px] font-mono text-paper/60">
        <div className="flex items-center gap-1.5 text-paper/80">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>Mutual NDA Protected</span>
        </div>
        <div className="flex items-center gap-1.5 text-paper/80">
          <CheckCircle2 className="h-3.5 w-3.5 text-brand-sky" />
          <span>Zero Sales Pitch Guarantee</span>
        </div>
      </div>
    </div>
  );
}
