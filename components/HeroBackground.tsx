import hero from "@/media/img/hero.jpg";
import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={hero}
        alt=""
        fill
        sizes="100vw"
        preload
        placeholder="blur"
        className="object-cover"
        quality={75}
      />
    </div>
  );
}
