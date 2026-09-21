import { Users, GitBranch, Terminal, Shield, Check, Sparkles } from "lucide-react";

export function CareersGraphic() {
  const roles = [
    { title: "Staff Systems Architect", focus: "Distributed Systems, Scale, High Availability", tag: "Principal" },
    { title: "Lead AI / ML Systems Engineer", focus: "Agentic Loops, RAG Pipelines, Local Models", tag: "AI / ML" },
    { title: "Principal Product Engineer", focus: "Modern React/TypeScript, Low-latency APIs", tag: "Full-Stack" },
  ];

  const stack = ["TypeScript", "Rust", "Python", "PyTorch", "PostgreSQL", "Kubernetes", "Docker", "FastAPI"];

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
          <span className="text-[11px] font-mono text-paper/60 ml-2">senior-pod-spec.yaml</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <Sparkles className="h-3 w-3" />
          <span>HIRING SENIOR ICS</span>
        </div>
      </div>

      {/* Pod Structure Card */}
      <div className="space-y-2 mb-3.5">
        <div className="text-[10px] font-mono uppercase tracking-wider text-paper/50 flex items-center justify-between mb-1.5">
          <span>Pod Composition</span>
          <span className="text-brand-orange">Senior Benchmark</span>
        </div>
        {roles.map((r) => (
          <div
            key={r.title}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-bold text-paper">{r.title}</div>
              <div className="text-[10px] font-mono text-paper/50 mt-0.5">{r.focus}</div>
            </div>
            <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-brand-sky/10 border border-brand-sky/30 text-brand-sky">
              {r.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Culture Matrix Values */}
      <div className="grid grid-cols-2 gap-2 mb-3.5">
        <div className="rounded-lg bg-black/30 border border-white/5 p-2 flex items-center gap-2 text-[11px]">
          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span className="text-paper/80">No Middle Managers</span>
        </div>
        <div className="rounded-lg bg-black/30 border border-white/5 p-2 flex items-center gap-2 text-[11px]">
          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span className="text-paper/80">Async-First Culture</span>
        </div>
        <div className="rounded-lg bg-black/30 border border-white/5 p-2 flex items-center gap-2 text-[11px]">
          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span className="text-paper/80">100% Remote Bench</span>
        </div>
        <div className="rounded-lg bg-black/30 border border-white/5 p-2 flex items-center gap-2 text-[11px]">
          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span className="text-paper/80">Direct Architecture Say</span>
        </div>
      </div>

      {/* Primary Tech Stack Chips */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-paper/40 mb-1.5">Production Tooling</div>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-paper/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
