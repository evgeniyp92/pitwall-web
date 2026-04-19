import { Fragment } from "react";
import HeroBackground from "@/components/HeroBackground";
import TelemetryTrace from "@/components/TelemetryTrace";
import Explainer from "@/components/Explainer";

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-dvh relative flex flex-col">
        <HeroBackground />
        <div className="absolute inset-y-0 left-0 w-full lg:w-5xl mask-[linear-gradient(to_right,black_50%,transparent)]">
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
        <div className="relative flex flex-col flex-1 items-start justify-center p-8 sm:p-12 lg:p-24 w-full bg-linear-90 from-eigengrau to-transparent">
          <div className="flex flex-col gap-6 lg:gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-sans tracking-tight text-balance max-w-[24ch] animate-fade-up">
              The fastest setup is the one that lets you drive like{" "}
              <em className="text-primary uppercase">you</em>
            </h1>
            <p className="text-2xl text-pretty max-w-[40ch] animate-fade-up [animation-delay:200ms]">
              A setup can be fast in the hands of an alien, sure. But how fast
              is it if you second guess it every other corner?
            </p>
            <div className="flex items-center gap-6 animate-fade-up [animation-delay:400ms]">
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-primary text-eigengrau font-semibold shadow-[0_0_12px_oklch(0.785_0.133_181.912/0.6),0_0_48px_oklch(0.785_0.133_181.912/0.25)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get early access
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                Learn more →
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-full pointer-events-none z-10 bg-linear-180 from-eigengrau via-transparent to-eigengrau"
          // style={{
          //   background:
          //     "linear-gradient(to bottom, transparent 0%, oklch(0.155 0.012 278) 85%)",
          // }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, color-mix(in oklab, var(--color-primary) 50%, transparent) 50%, transparent 100%)",
          }}
        />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-3 animate-attention-bounce">
            <p className="text-[0.625rem] font-mono uppercase tracking-[0.3em] text-white/30">
              See how it works
            </p>
            <div className="relative w-px h-10 bg-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-white/50 animate-scan-line origin-top" />
            </div>
          </div>
        </div>
      </div>
      <Explainer />
    </Fragment>
  );
}
