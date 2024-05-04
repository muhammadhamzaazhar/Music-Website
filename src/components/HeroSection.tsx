import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
      items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 "
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative p-4 z-10 w-full text-center">
        <h1
          className="text-4xl mt-20 md:mt-40 md:text-7xl font-bold bg-clip-text 
          text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "
        >
          Master the art of Music
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          sapiente excepturi. Corporis optio laborum labore alias recusandae
          quos, mollitia consequatur! Ducimus porro asperiores eveniet molestiae
          fugit distinctio hic magnam voluptatem.
        </p>

        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white
               border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default HeroSection;
