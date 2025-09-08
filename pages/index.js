import { Pixelify_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Goinomics from "@/components/Goinomics";
import Buy from "@/components/Buy";
import Join from "@/components/Join";
import Gehemarq from "@/components/Gehemarq";
const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main
      className={`${pixelifySans.variable} font-pixelifySans overflow-hidden`}
    >
      <Hero />
      <Gehemarq />
      <About />
      <Goinomics />
      <Buy />
      <Join />
    </main>
  );
}
