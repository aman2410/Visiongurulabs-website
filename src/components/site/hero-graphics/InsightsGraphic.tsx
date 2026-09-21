import { BookOpen, Compass, FileCode, Sparkles, Tag, GitPullRequest } from "lucide-react";

export function InsightsGraphic() {
  const radarItems = [
    { ring: "ADOPT", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10", tech: "Rust / pgvector / Event-Driven" },
    { ring: "TRIAL", color: "text-brand-sky border-brand-sky/30 bg-brand-sky/10", tech: "Local LLMs / Autonomous Loops" },
    { ring: "ASSESS", color: "text-purple-400 border-purple-500/30 bg-purple-500/10", tech: "WebGPU / Hybrid Search" },
    { ring: "AVOID", color: "text-rose-400 border-rose-500/30 bg-rose-500/10", tech: "Premature Microservices" },
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
          <span className="text-[11px] font-mono text-paper/60 ml-2">tech-radar.whitepaper.rfc</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-purple-400 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded-full">
          <Sparkles className="h-3 w-3" />
          <span>OPERATOR RESEARCH</span>
        </div>
      </div>

      {/* Featured RFC Card */}
      <div className="rounded-xl border border-brand-orange/30 bg-gradient-to-br from-white/[0.05] to-transparent p-3.5 mb-3.5 shadow-md">
        <div className="flex items-center justify-between text-[10px] font-mono text-brand-orange mb-1.5">
          <span className="flex items-center gap-1">
            <FileCode className="h-3 w-3" />
            RFC-042 · FEATURED ESSAY
          </span>
          <span className="text-paper/40">12 min read</span>
        </div>
        <div className="text-sm font-bold text-paper leading-snug">
          "Why RAG Is Not A Strategy (And What To Build Instead)"
        </div>
        <div className="mt-2.5 flex items-center gap-2 text-[10px] font-mono text-paper/60">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Architecture</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">LLMs</span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Production</span>
        </div>
      </div>

      {/* Tech Radar Snapshot */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-paper/50 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Compass className="h-3 w-3 text-brand-sky" />
            Engineering Radar Q3
          </span>
          <span className="text-emerald-400">Quarterly Rebalance</span>
        </div>
        <div className="space-y-1.5">
          {radarItems.map((r) => (
            <div
              key={r.ring}
              className="flex items-center justify-between rounded-lg bg-black/25 border border-white/5 px-2.5 py-1.5 text-[11px] font-mono"
            >
              <span className={`px-2 py-0.5 rounded border text-[9px] font-bold ${r.color}`}>
                {r.ring}
              </span>
              <span className="text-paper/80">{r.tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-paper/50">
        <div className="flex items-center gap-1.5 text-paper/70">
          <BookOpen className="h-3 w-3 text-brand-sky" />
          <span>Written by Principal Engineers</span>
        </div>
        <span className="text-emerald-400">Zero Sponsored Content</span>
      </div>
    </div>
  );
}
