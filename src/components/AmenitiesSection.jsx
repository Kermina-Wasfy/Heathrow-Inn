import { useState } from "react";
import coffee from "../assets/system-uicons_coffee.svg";
import kettle from "../assets/material-symbols-light_kettle-outline-rounded.svg";
import wifi from "../assets/material-symbols-light_wifi.svg";
import crib from "../assets/material-symbols-light_crib-outline-rounded.svg";
import family from "../assets/fluent-mdl2_family.svg";
import smoking from "../assets/guidance_no-smoking.svg";
import heating from "../assets/iconoir_heating-square.svg";
import parking from "../assets/streamline_parking-sign.svg";
import SectionTitle from "./SectionTitle";

// services
const allServices = [
  {
    icon: coffee,
    label: "Coffee Maker",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: kettle,
    label: "Electric Kettle",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: wifi,
    label: "Free Wi-Fi",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: crib,
    label: "Free Crib",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: heating,
    label: "Heating System",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: parking,
    label: "Free Parking",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: family,
    label: "Family Rooms",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
  {
    icon: smoking,
    label: "Non-Smoking",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec.",
  },
];

export default function AmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allServices.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allServices.length) % allServices.length
    );
  };

  return (
    <section id="amenities" className=" text-center py-5">
      <SectionTitle title="Amenities" />

      {/* for desktop */}
      <div className="row justify-content-center gy-4 px-md-5 d-none d-md-flex">
        {allServices.map((service, index) => (
          <div className="col-6 col-md-3" key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      {/* for mobile */}
      <div className="mobile-service-slider d-md-none position-relative">
        <button className="slider-arrow left" onClick={handlePrev}>
          &lt;
        </button>

        <div className="amenities-mob">
          <ServiceCard {...allServices[currentIndex]} />
        </div>
        <button className="slider-arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
}

// each service card
function ServiceCard({ icon, label, description }) {
  return (
    <div style={{ padding: "1rem" }}>
      <img src={icon} alt={label} />
      <p className="label-card mb-2 mt-2">{label}</p>
      <p className="desc-card">{description}</p>
    </div>
  );
}
