import { motion } from "motion/react";
import { Eye, Compass, Cog, TrendingUp } from "lucide-react";

const steps = [
  { icon: Eye, label: "Vision" },
  { icon: Compass, label: "Strategy" },
  { icon: Cog, label: "Engineering" },
  { icon: TrendingUp, label: "Growth" },
];

export function HeroFlow() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {/* concentric rings */}
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div className="absolute inset-16 rounded-full border border-white/10" />
      <div className="absolute inset-0 rounded-full bg-brand-sky/10 blur-3xl" />

      {steps.map((s, i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const r = 42;
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        const Icon = s.icon;
        return (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-sky shadow-[0_0_40px_rgba(14,165,233,0.25)]">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-paper/80 tracking-wide">{s.label}</span>
            </div>
          </motion.div>
        );
      })}

      {/* center pulse */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-sky to-brand-red shadow-[0_0_60px_rgba(206,31,37,0.4)]"
        />
      </div>

      {/* rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-white/15"
      />
    </div>
  );
}
