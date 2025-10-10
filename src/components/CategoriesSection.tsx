import Image from "next/image";

import PlumbingInstallation from "@/images/categories/chooz_plumbers_plumbing_installation.png";
import PlumbingRepair from "@/images/categories/chooz_plumbers_plumbing_repair.png";
import WaterHeaterInstallation from "@/images/categories/chooz_plumbers_water_heater_Installation.png";
import WaterHeaterRepair from "@/images/categories/chooz_plumbers_water_heater_repair.png";
import SewerLineRepairReplacement from "@/images/categories/chooz_plumbers_sewer_line-repair_and_replacements.png";
import EmergencyPlumbingServices from "@/images/categories/chooz_plumbers_emergency_plumbing_services.png";

const categories = [
  {
    title: "Plumbing Installation",
    image: PlumbingInstallation,
    alt: "Icon of a paint roller inside a house shape, representing exterior house painting services",
    link: "plumbing-installation",
  },
  {
    title: "Plumbing Repair",
    image: PlumbingRepair,
    alt: "Icon of a paintbrush resting in a paint can, representing interior painting services",
    link: "plumbing-repair",
  },
  {
    title: "Water Heater Installation",
    image: WaterHeaterInstallation,
    alt: "Icon of a spray paint gun applying paint to a striped commercial surface, representing commercial painting services",
    link: "water-heater-installation",
  },
  {
    title: "Water Heater Repair",
    image: WaterHeaterRepair,
    alt: "Icon of a cabinet with a paintbrush symbol, representing cabinet painting services",
    link: "water-heater-repair",
  },
  {
    title: "Sewer Line Repair & Replacement",
    image: SewerLineRepairReplacement,
    alt: "Icon of a pressure washer machine with spray wand, representing exterior cleaning and pressure washing services",
    link: "sewer-line-repair-and-replacements",
  },
  {
    title: "Emergency Plumbing Services",
    image: EmergencyPlumbingServices,
    alt: "Icon of a paintbrush applying stain or paint to angled wooden planks, representing deck and fence painting services",
    link: "emergency-plumbing-services",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-between w-full sm:max-w-[500px] lg:max-w-[1340px] mx-auto">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white text-center p-[15px] md:shadow-sm w-[130px] md:border border-gray-100 rounded-xl">
          <Image
            src={category.image}
            alt={category.title}
            width={45}
            height={45}
            className="w-full h-[45px] object-contain mb-3"
          />
          <p className="text-sm font-semibold text-center">{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSection;
