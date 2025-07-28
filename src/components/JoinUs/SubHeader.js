"use client";
import React from "react";
import SubNavigation from "@/components/SubNavigation";

const SubHeader = ()=>{
  const subHeaderItems = [
    { id: 1, label: "What it is like to be at solutionec", href: "#solutionnec" },
    { id: 2, label: "#Wearesolutionec", href: "#wearesolutionnec" },
    { id: 3, label: "Corporate Social Responsibility", href: "#csr" },
    { id: 4, label: "Current Openings", href: "#openings" },
  ];
  return(
    <>
 <SubNavigation items={subHeaderItems} bgColor="bg-join-us-subheader" />
    </>
  )
}
export default SubHeader;