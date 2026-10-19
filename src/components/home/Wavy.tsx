"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedTooltipPreview } from "./AnimatedTooltip";

export function WavyBackgroundDemo() {
  return (
    <div className="relative h-[40 rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7x1 mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl Itext-white font-bold text-white text-center mb-4">
          Learn from working musicians
        </h2>
        <p className="text-white mb-4">
          Meet the artists and teachers ready to help you grow, create, and
          find your own sound.
        </p>
        <AnimatedTooltipPreview />
      </WavyBackground>
    </div>
  );
}
