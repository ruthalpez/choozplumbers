"use client";

import Image from "next/image";
// import PlumbersCompanyBuilding from "@/images/buildings/chooz_hvac_pros_painting_company.png";
// import PlumbersCompanyBuildingMobile from "@/images/buildings/chooz_hvac_pros_painting_company.png";
import { useDevice } from "@/hooks/useDevice";

export default function ResponsiveImage() {
  const { isMobile, isDesktop } = useDevice();

  // if (isDesktop) {
  //   return (
  //     <Image
  //       src={PlumbersCompanyBuilding.src}
  //       alt="Illustration of an Plumbers company building in the center of a cityscape with residential buildings and skyscrapers in the background"
  //       width={1000}
  //       height={1000}
  //       className="mx-auto w-full"
  //     />
  //   );
  // }

  // if (isMobile) {
  //   return (
  //     <Image
  //       src={PlumbersCompanyBuildingMobile.src}
  //       alt="Illustration of an Plumbers company building in the center of a cityscape with residential buildings and skyscrapers in the background"
  //       width={1000}
  //       height={1000}
  //       className="mx-auto w-full"
  //     />
  //   );
  // }

  return null; // Optional fallback
}
