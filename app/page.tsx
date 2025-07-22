// app/page.tsx
import Header from "@/app/components/Header";
import Home from "@/app/components/Home";
import Features from "@/app/components/Features";
import Services from "@/app/components/Services";
import Leadership from "@/app/components/Leadership";
import AdvisoryBoard from "@/app/components/AdvisoryBoard";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import PostContact from "@/app/components/postContact";
import Footer from "@/app/components/Footer";
import Capabilities from "./components/Capabilities";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-white font-sans overflow-x-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 z-0 bg-[#09090B]" />
      <div
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[180px] z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4b00d0, #1a0a4f, transparent)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Home />
        <About />
        {/* <Features /> */}
        <Services />
        {/* <Capabilities /> */}
        <Leadership />
        <AdvisoryBoard />
        <Contact />
        <PostContact />
        <Footer />
      </div>
    </main>
  );
}
