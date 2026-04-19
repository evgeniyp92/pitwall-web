import { Fragment } from "react";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  return (
    <Fragment>
      <HeroBackground />
      <div className="flex flex-col flex-1 items-center justify-center font-sans">
        Pitwall
      </div>
    </Fragment>
  );
}
