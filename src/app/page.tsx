import { Card } from "@/components/home/Card";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { MovingCard } from "@/components/home/MovingCard";
import { StickyCard } from "@/components/home/StickyCard";
import { WavyBackgroundDemo } from "@/components/home/Wavy";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full m-0 bg-zinc-900 flex justify-around items-center flex-wrap px-4">
        <StickyCard />
        <Card
          image="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Musician playing an acoustic guitar"
        />
        <Card
          image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Singer performing into a microphone"
        />
        <Card
          image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Music production studio"
        />
        <MovingCard />
      </div>
      <WavyBackgroundDemo />
      <Footer />
    </>
  );
}
