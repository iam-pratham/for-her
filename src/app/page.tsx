import Hero from "@/components/sections/Hero";
import StoryTimeline from "@/components/sections/StoryTimeline";
import ReasonsGrid from "@/components/sections/ReasonsGrid";
import BucketList from "@/components/sections/BucketList";
import LoveLetter from "@/components/sections/LoveLetter";
import Surprise from "@/components/sections/Surprise";
import FloatingHearts from "@/components/effects/FloatingHearts";
import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-rose-50/30">
      <FloatingHearts />

      <Hero />

      <StoryTimeline />

      <ReasonsGrid />

      <BucketList />

      <LoveLetter />

      <Surprise />

      <MusicPlayer />

      <footer className="text-center py-12 text-rose-400 text-sm font-light relative z-10 bg-white/50">
        <p>Made with all my love ❤️ for Manasi</p>
        <p className="mt-2 text-xs text-rose-300">© {new Date().getFullYear()} Pratham & Manasi</p>
      </footer>
    </main>
  );
}
