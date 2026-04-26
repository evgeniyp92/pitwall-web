import { Fragment } from "react";
import HeroBackground from "@/components/HeroBackground";
import TelemetryTrace from "@/components/TelemetryTrace";
import Explainer from "@/components/Explainer";

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-dvh relative flex flex-col">
        <HeroBackground />
        <div className="relative flex flex-col flex-1 items-start justify-center p-8 sm:p-12 lg:p-24 w-full bg-linear-90 from-eigengrau to-transparent">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="bg-primary w-fit px-4 py-3 lg:px-8 lg:py-6 md:-rotate-2 drop-shadow-black drop-shadow-[4px_4px_0px_oklch(0_0_0/0.25)] lg:drop-shadow-[12px_12px_0px_oklch(0_0_0/0.25)] z-50">
              <h1 className="text-3xl lg:text-9xl uppercase font-bold tracking">
                Pitwall
              </h1>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold font-sans tracking-tight text-balance max-w-[24ch] animate-fade-up">
              The fastest setup is the one that lets you drive like{" "}
              <em className="text-primary uppercase">you</em>
            </h2>
            <p className="text-pretty max-w-[60ch] animate-fade-up [animation-delay:200ms]">
              A setup can be fast in the hands of an alien, sure. But how fast
              is it if you second guess it every other corner?
            </p>
            <div className="flex items-center gap-6 animate-fade-up [animation-delay:400ms]"></div>
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
              Learn More
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
