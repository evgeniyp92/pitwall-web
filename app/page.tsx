import { Fragment } from "react";
import HeroBackground from "@/components/HeroBackground";
import TelemetryLines from "@/components/TelemetryLines";

export default function Home() {
  return (
    <Fragment>
      <HeroBackground />
      <TelemetryLines />
      <h1 className="hidden">Pitwall</h1>
      <div className="flex flex-col flex-1 items-start justify-center p-24 w-full bg-linear-90 from-slate-900 to-transparent">
        <div className="w-3xl">
          <p className="text-6xl font-bold font-sans tracking-tight">
            The fastest setup is the one that lets you drive like{" "}
            <span className="italic text-primary uppercase tracking-tight">
              you
            </span>
          </p>
          <p className="text-2xl">
            A setup can be fast in the hands of an alien, sure. But how fast is
            it if you second guess it every other corner?
          </p>
          <p className="text-4xl font-bold">Pitwall is here to help</p>
        </div>
      </div>
    </Fragment>
  );
}
