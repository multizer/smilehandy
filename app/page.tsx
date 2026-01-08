import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <FAQ />
      <About />
    </main>
  );
}
