import dynamic from "next/dynamic";
import React, { Suspense } from "react";

import HeroSection from "@/components/LandingHero/HeroSection";
import LandingJoinUs from "@/components/LandingHero/LandingJoinUs";
import Maximise from "@/components/LandingHero/Maximise";
import { sections } from "@/commonJson/HomePage/MaximizeConstant";
import { whatWeDoOurAreaOfExcellenceJson } from "@/commonJson/WhatWeDo";

import Spinner from "@/components/Icons/Spinner";
import HawkSimsAboutSection from "@/components/LandingHero/AboutUs";
const SolutionAndServices = dynamic(
  () => import("@/components/LandingHero/SolutionAndService"),
  {
    suspense: true,
  }
);

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HawkSimsAboutSection />
      {/* <Maximise
        sections={sections}
        heading={"How We Maximise Your Business Value?"}
      /> */}
      <Suspense
        fallback={
          <div>
            {" "}
            <Spinner />
          </div>
        }
      >
        <SolutionAndServices
          whatWeDoOurAreaOfExcellenceJson={whatWeDoOurAreaOfExcellenceJson}
          heading={"Our Areas of Excellence"}
        />
      </Suspense>

      {/* <Product
        ProductCarouselJson={ProductCarouselJson}
        heading={"Our Products"}
      />
      <SolutionecSection /> */}
      <LandingJoinUs />
    </div>
  );
}
