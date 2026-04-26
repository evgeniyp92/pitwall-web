import TelemetryTrace from "@/components/TelemetryTrace";

// TODO: Rewrite this component so that it presents Editorial Cards on desktop
// viewports and shows an Accordion on mobile viewports

const topStats = [
  { label: "Session", value: "Race", color: "text-primary" },
  { label: "Track", value: "Spa-Francorchamps", color: "text-white" },
  { label: "Status", value: "Analyzing", color: "text-tertiary" },
  { label: "Laps", value: "12 / 24", color: "text-secondary" },
];

const pillars = [
  {
    icon: "◈",
    label: "Your Data",
    desc: "Not generic baselines",
    detail:
      "Generic setups optimize for someone else's driving. Your brake release, your throttle progression, your corner-entry aggression are yours alone — Pitwall reads your traces and prescribes changes that work with your inputs, not against them.",
    color: "text-primary",
    border: "border-primary/30",
    background: "bg-primary/50",
  },
  {
    icon: "△",
    label: "First Principles",
    desc: "Symptom → mechanism → fix",
    detail:
      'Most setup advice treats symptoms: "understeer? stiffen the front bar." That\'s a gamble. Pitwall traces each symptom back to its mechanism — front dampers not recovering on trail-brake release, say — and prescribes the exact fix. Fewer iterations, deeper understanding.',
    color: "text-secondary",
    border: "border-secondary/30",
    background: "bg-secondary/50",
  },
  {
    icon: "◎",
    label: "Race Pace",
    desc: "Stint-long consistency",
    detail:
      "Qualifying pace is a single flawless lap. Race pace is thirty consistent ones. Setups tuned for a hot lap chew tires, punish your wrists, and drop you mid-grid by lap fifteen. Pitwall optimizes for stint-long stability — the pace that wins races.",
    color: "text-tertiary",
    border: "border-tertiary/30",
    background: "bg-tertiary/50",
  },
];

export default function Explainer() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.785 0.133 181.912 / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.785 0.133 181.912 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* TODO: feed these canvases real throttle / brake / speed telemetry
          from an .ibt hotlap at Spa-Francorchamps (the track named in the
          session strip above). Adapt TelemetryTrace rather than swapping
          to TelemetryLines — canvas's per-frame redraw is the right tool
          for this motion language.

          Data pipeline:
          - Parse .ibt offline (pyirsdk or equivalent); keep one clean
            flying lap.
          - Decimate to ~1,500-2,000 samples per channel (Spa is ~7km, so
            ~3.5m per sample at 2k — plenty of corner detail; JSON stays
            well under 100KB gzipped).
          - Pre-normalize each channel to 0-1 so the component doesn't
            need to know units (throttle %, brake %, speed km/h).
          - Commit as a JSON fixture imported at the top of the component.

          Component adaptation (TelemetryTrace.jsx):
          - Replace `phase` with `playheadIdx` (float index into samples).
          - Swap the sine-sum `y` for `samples[wrap(i)]` scaled by
            `amplitude`.
          - Drop `speed` as phase-per-frame; reinterpret as
            samples-per-frame. Add `pxPerSample` prop.
          - Fixed head at center: for each visible i in
            [floor(playheadIdx - halfWindow), ceil(playheadIdx +
            halfWindow)], compute x = centerX + (i - playheadIdx) *
            pxPerSample. Lap scrolls right-to-left as playheadIdx advances.
          - Wrap index modulo samples.length for seamless looping. Start
            and end of a lap at Spa are flat-out down the pit straight, so
            the seam should be invisible.
          - Replace hardcoded ctx.scale(2, 2) with window.devicePixelRatio.

          Visual anchor at center:
          - Thin vertical rule behind the traces plus a small per-channel
            dot marking the current value at x = centerX. Without it the
            scroll loses meaning — the viewer needs a "now" reference.

          Starting tuning values:
          - pxPerSample = 6 (visible window ~200 samples at 1200px wide,
            about 10% of the lap on-screen).
          - speed ≈ 1.1 samples/frame → a full lap loops in ~30s at 60fps. */}
      <div className="absolute inset-0 opacity-35">
        <TelemetryTrace
          color="#2dd4bf"
          speed={0.012}
          amplitude={30}
          offsetY={-15}
          opacity={0.7}
        />
        <TelemetryTrace
          color="#f97066"
          speed={0.009}
          amplitude={22}
          offsetY={25}
          opacity={0.5}
        />
        <TelemetryTrace
          color="#fbbf24"
          speed={0.015}
          amplitude={16}
          offsetY={5}
          opacity={0.3}
        />
      </div>

      {/* Gradient overlay */}

      <div className="relative z-10 mx-auto flex w-full max-w-275 flex-1 flex-col items-center justify-center gap-10 px-6 py-16 sm:gap-12 sm:px-8 sm:pb-15 sm:pt-0">
        {/* Top data strip */}
        <div className="grid grid-cols-2 justify-items-center gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
          {topStats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="mb-1 font-mono text-[0.6875rem] uppercase tracking-[2px] text-neutral-400 sm:text-[0.5625rem] sm:text-neutral-500">
                {item.label}
              </div>
              <div
                className={`font-mono text-sm font-medium tabular-nums sm:text-[0.8125rem] ${item.color}`}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Central headline block */}
        <div className="text-center">
          {/*<p className="mb-5 font-mono text-[0.6875rem] uppercase tracking-[3px] text-primary sm:text-[0.625rem]">*/}
          {/*  ◈ Pitwall Race Engineer ◈*/}
          {/*</p>*/}
          <h2 className="mb-5 text-[clamp(32px,5vw,58px)]/[1.1] font-semibold tracking-tight text-balance text-white">
            <span className="italic">Your </span> telemetry.{" "}
            <span className="text-neutral-500">
              <span className="italic">Your</span> handling.
            </span>
            <br className="max-sm:hidden" />{" "}
            <span className="bg-[linear-gradient(135deg,var(--color-primary),color-mix(in_oklab,var(--color-primary)_80%,transparent))] bg-clip-text text-transparent">
              <span className="italic">Your</span> race engineer.
            </span>
          </h2>
          <p className="mx-auto max-w-[44ch] text-base text-pretty text-white/70 sm:text-lg">
            AI that reads your laps, diagnoses your handling, and explains what
            to change — the way a real engineer on the radio would.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="flex md:w-full flex-col md:flex-row gap-px md:p-4 w-auto overflow-visible items-center justify-center md:gap-x-8 gap-y-8">
          {pillars.map((item) => (
            <div
              key={item.label}
              className={`
              group
              flex
              flex-col
              gap-y-5
              text-left
              p-5
              outline-none
              focus-visible:bg-slate-500/40
              w-full
              max-w-96
              md:w-72
              md:h-80
              md:gap-y-0
              md:justify-between
              md:p-6
              bg-slate-800
              `}
            >
              <div>
                <div
                  className={`flex items-center gap-x-2 font-mono font-bold uppercase ${item.color}`}
                >
                  <span className="text-sm leading-none">{item.icon}</span>
                  <span className="text-base leading-none tracking-[0.15em]">
                    {item.label}
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-400">{item.desc}</p>
              </div>

              <hr className={`border-t ${item.border}`} />

              <p className="text-pretty text-sm leading-relaxed text-neutral-100">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
