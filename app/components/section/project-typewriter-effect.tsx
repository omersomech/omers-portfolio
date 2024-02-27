"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function ProjectTypeWriterEffect() {
  const words = [
    {
      text: "My",
    },
    {
      text: "private",
    },

    {
      text: "Projects",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  pt-20">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        My Projects are built with the latest technologies.
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
