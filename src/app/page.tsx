import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HandoffLine from "@/components/HandoffLine";
import WhoItsFor from "@/components/WhoItsFor";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HandoffLine />
        <WhoItsFor />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
