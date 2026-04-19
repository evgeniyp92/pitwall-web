import TelemetryTrace from "@/components/TelemetryTrace";

export default function Explainer() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(rgb(45 212 191 / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgb(45 212 191 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

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
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, oklch(0.155 0.012 278) 70%),
            linear-gradient(to bottom, transparent 0%, oklch(0.155 0.012 278 / 0.8) 80%, oklch(0.155 0.012 278) 100%)
          `,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-275 flex-1 flex-col items-center justify-center px-8 pb-15">
        {/* Top data strip */}
        <div
          className={`mb-12 flex flex-wrap justify-center gap-8 transition-opacity duration-600 ease-out`}
          style={{ transitionDelay: "0.4s" }}
        >
          {[
            { label: "Session", value: "Race", color: "text-primary" },
            {
              label: "Track",
              value: "Spa-Francorchamps",
              color: "text-pw-primary",
            },
            { label: "Status", value: "Analyzing", color: "text-tertiary" },
            { label: "Laps", value: "12 / 24", color: "text-secondary" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="mb-1 font-mono text-[0.5625rem] uppercase tracking-[2px] text-neutral-600">
                {item.label}
              </div>
              <div
                className={`font-mono text-[0.8125rem] font-medium ${item.color}`}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Central headline block */}
        <div className="mb-10 text-center">
          <div
            className={`mb-5 font-mono text-[0.625rem] uppercase tracking-[3px] text-primary transition-opacity duration-600 ease-out`}
            style={{ transitionDelay: "0.5s" }}
          >
            ◈ Pitwall Race Engineer ◈
          </div>
          <h1
            className={`mb-5 text-[clamp(30px,5vw,58px)] font-bold tracking-tight text-pw-primary transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
            style={{ transitionDelay: "0.6s", lineHeight: 1.1 }}
          >
            Your telemetry.{" "}
            <span className="text-neutral-600">Your handling.</span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #2dd4bf, rgb(45 212 191 / 0.8))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your race engineer.
            </span>
          </h1>
          <p
            className={`mx-auto max-w-135 text-[clamp(15px,1.5vw,18px)]/[1.6] text-pw-secondary transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
            style={{ transitionDelay: "0.8s" }}
          >
            AI that reads your laps, diagnoses your handling, and explains what
            to change — the way a real engineer on the radio would.
          </p>
        </div>

        {/* Bottom data strip */}
        <div
          className={`flex gap-px overflow-hidden rounded-[10px] transition-opacity duration-600 ease-out`}
          style={{ transitionDelay: "1.2s" }}
        >
          {[
            {
              icon: "◈",
              label: "Your Data",
              desc: "Not generic baselines",
              color: "text-primary",
            },
            {
              icon: "△",
              label: "First Principles",
              desc: "Symptom → mechanism → fix",
              color: "text-secondary",
            },
            {
              icon: "◎",
              label: "Race Pace",
              desc: "Stint-long consistency",
              color: "text-tertiary",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="min-w-45 bg-slate-500/25 px-6 py-4 text-center"
            >
              <div className={`mb-1.5 font-mono text-sm ${item.color}`}>
                {item.icon}
              </div>
              <div
                className={`mb-1 font-mono text-[0.625rem] uppercase tracking-[1.5px] ${item.color}`}
              >
                {item.label}
              </div>
              <div className="text-xs text-pw-muted">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Platform tags */}
        {/*<div*/}
        {/*  className={`mt-6 flex justify-center gap-5 transition-opacity duration-600 ease-out`}*/}
        {/*  style={{ transitionDelay: "1.4s" }}*/}
        {/*>*/}
        {/*  {["iRacing", "Le Mans Ultimate", "ACC"].map((sim) => (*/}
        {/*    <span*/}
        {/*      key={sim}*/}
        {/*      className="font-mono text-[0.6875rem] tracking-wide text-pw-muted"*/}
        {/*    >*/}
        {/*      {sim}*/}
        {/*    </span>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
