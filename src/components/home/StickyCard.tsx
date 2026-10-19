"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Build a strong musical foundation",
    description:
      "Learn rhythm, melody, harmony, and the language behind the music you love. Clear lessons and practical exercises help you turn the basics into confident playing.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Music fundamentals
      </div>
    ),
  },
  {
    title: "Play the instrument you love",
    description:
      "Take it from your first chords to full songs. Follow guided practice for guitar, piano, and voice, with room to learn at your own pace.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Pianist practicing in a music room"
        />
      </div>
    ),
  },
  {
    title: "Write songs that sound like you",
    description:
      "Shape a lyric, find a melody, and bring the two together. Explore songwriting techniques that help turn a spark of inspiration into a finished song.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Songwriting
      </div>
    ),
  },
  {
    title: "Create and produce your music",
    description:
      "Discover recording, arranging, and production essentials. Learn how to capture ideas, shape a sound, and finish tracks you’re excited to share.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Music production
      </div>
    ),
  },
];
export function StickyCard() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
