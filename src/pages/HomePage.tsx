import Hero from "@/components/hero";

import Features from "@/components/features";
import ScreenshareFeature from "@/components/screenshare-feature";
import OpenSource from "@/components/open-source";
import Faq from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />

      <Features />
      <ScreenshareFeature />
      <OpenSource />
      <Faq />
      <Footer />
    </main>
  );
}
