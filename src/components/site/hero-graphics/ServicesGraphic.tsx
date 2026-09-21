import { Server, Cpu, Database, Network, ShieldCheck, Zap, Globe, Smartphone, Layers } from "lucide-react";

export function ServicesGraphic() {
  return (
    <div className="p-5 sm:p-6 text-paper select-none">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-paper/60 ml-2">architecture.system.spec</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>PRODUCTION LIVE</span>
        </div>
      </div>

      {/* Architecture Topology Diagram */}
      <div className="space-y-4">
        {/* Tier 1: Client Ingress */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-paper/50 mb-1.5 flex items-center justify-between">
            <span>Client & Edge Layer</span>
            <span className="text-brand-sky">Multi-Platform</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center flex flex-col items-center justify-center gap-1">
              <Globe className="h-4 w-4 text-brand-sky" />
              <span className="text-[11px] font-semibold text-paper/90">Web Apps</span>
              <span className="text-[9px] font-mono text-paper/40">React / Next</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center flex flex-col items-center justify-center gap-1">
              <Smartphone className="h-4 w-4 text-brand-orange" />
              <span className="text-[11px] font-semibold text-paper/90">Mobile Apps</span>
              <span className="text-[9px] font-mono text-paper/40">iOS / Android</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center flex flex-col items-center justify-center gap-1">
              <Network className="h-4 w-4 text-emerald-400" />
              <span className="text-[11px] font-semibold text-paper/90">API Gateways</span>
              <span className="text-[9px] font-mono text-paper/40">GraphQL / REST</span>
            </div>
          </div>
        </div>

        {/* Connector Lines */}
        <div className="flex justify-center items-center gap-4 py-0.5">
          <div className="h-3 w-px bg-gradient-to-b from-brand-sky/40 to-brand-orange/40" />
          <span className="text-[9px] font-mono text-brand-sky/60 px-2 py-0.5 rounded bg-brand-sky/10 border border-brand-sky/20">
            TLS 1.3 · mTLS Secure Mesh
          </span>
          <div className="h-3 w-px bg-gradient-to-b from-brand-sky/40 to-brand-orange/40" />
        </div>

        {/* Tier 2: AI & Distributed Compute Engine (Focal Center) */}
        <div className="relative rounded-2xl border border-brand-orange/30 bg-gradient-to-r from-brand-navy/90 via-white/[0.04] to-brand-navy/90 p-3.5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-paper">AI & Systems Core Engine</div>
                <div className="text-[10px] text-paper/60">Autonomous Agents · Neural RAG · Microservices</div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/30 px-2 py-0.5 rounded">
              10 Disciplines
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="rounded-lg bg-black/30 border border-white/5 p-2 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <div>
                <div className="text-[10px] font-medium text-paper/90">p95 Latency</div>
                <div className="text-[12px] font-bold font-mono text-emerald-400">14.2 ms</div>
              </div>
            </div>
            <div className="rounded-lg bg-black/30 border border-white/5 p-2 flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-brand-sky shrink-0" />
              <div>
                <div className="text-[10px] font-medium text-paper/90">Throughput</div>
                <div className="text-[12px] font-bold font-mono text-paper">18.5k req/s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Enterprise Data & Cloud Infrastructure */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-paper/50 mb-1.5 flex items-center justify-between">
            <span>Persistence & Cloud Infra</span>
            <span className="text-emerald-400">High Availability</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center flex flex-col items-center justify-center gap-1">
              <Database className="h-4 w-4 text-brand-sky" />
              <span className="text-[11px] font-semibold text-paper/90">PostgreSQL</span>
              <span className="text-[9px] font-mono text-paper/40">Multi-Region</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center flex flex-col items-center justify-center gap-1">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span className="text-[11px] font-semibold text-paper/90">Vector DB</span>
              <span className="text-[9px] font-mono text-paper/40">Pgvector / RAG</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center flex flex-col items-center justify-center gap-1">
              <Server className="h-4 w-4 text-emerald-400" />
              <span className="text-[11px] font-semibold text-paper/90">Kubernetes</span>
              <span className="text-[9px] font-mono text-paper/40">Auto-Scaling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status Telemetry */}
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-paper/60">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>SOC 2 · Zero-Trust</span>
        </div>
        <div className="text-brand-orange font-bold">Full Lifecycle Delivery</div>
        <div>Uptime: 99.99%</div>
      </div>
    </div>
  );
}
