import { useState } from "react";
import bedIcon from "../assets/twin-bed.png";
import persons from "../assets/person.png";
import meter from "../assets/meters.png";
import room1 from "../assets/hotel-room.png";
import room2 from "../assets/hotel-room.png";
import room3 from "../assets/hotel-room.png";
import SectionTitle from "./SectionTitle";

// Rooms
const rooms = [
  {
    image: room1,
    title: "Twin room",
    description:
      "It's conveniently located just a 10-minute drive from London Heathrow Airport. This makes it ideal for travelers who need easy access to the airport.",
    price: "70$",
    features: [
      { icon: bedIcon, label: "Twin Bed" },
      { icon: persons, label: "2 person" },
      { icon: meter, label: "28 meters" },
    ],
  },
  {
    image: room2,
    title: "Twin room",
    description:
      "It's conveniently located just a 10-minute drive from London Heathrow Airport. This makes it ideal for travelers who need easy access to the airport.",
    price: "70$",
    features: [
      { icon: bedIcon, label: "Twin Bed" },
      { icon: persons, label: "2 person" },
      { icon: meter, label: "28 meters" },
    ],
  },
  {
    image: room3,
    title: "Twin room",
    description:
      "It's conveniently located just a 10-minute drive from London Heathrow Airport. This makes it ideal for travelers who need easy access to the airport.",
    price: "70$",
    features: [
      { icon: bedIcon, label: "Twin Bed" },
      { icon: persons, label: "2 person" },
      { icon: meter, label: "28 meters" },
    ],
  },
];

export default function RoomsSection() {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const handleNext = () => {
    if (currentRoomIndex < rooms.length - 1) {
      setCurrentRoomIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentRoomIndex > 0) {
      setCurrentRoomIndex((prev) => prev - 1);
    }
  };

  return (
    <section id="rooms" className="container text-center py-5">
      <SectionTitle title="Rooms" />

      {/* for desktop */}
      <div className="row justify-content-center gy-5 g-5 d-none d-md-flex">
        {rooms.map((room, index) => (
          <div className="col-12 col-md-4" key={index}>
            <RoomCard {...room} />
          </div>
        ))}
      </div>

      {/* for mobile */}
      <div className="d-md-none">
        <RoomCard {...rooms[currentRoomIndex]} />
        <div className="room-slider-arrows">
          <button
            className="slider-arrow-custom"
            onClick={handlePrev}
            disabled={currentRoomIndex === 0}
          >
            &lt;
          </button>
          <button
            className="slider-arrow-custom"
            onClick={handleNext}
            disabled={currentRoomIndex === rooms.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

// room card
function RoomCard({ image, title, description, price, features }) {
  return (
    <div className="card h-100 d-flex flex-column room-card">
      <img src={image} className="card-img-top room-img" alt={title} />

      <div className="card-body d-flex flex-column card-body">
        {/* title and price */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0 room-title">{title}</h5>

          <div className="d-flex align-items-center gap-1">
            <span className="room-price">{price}</span>
            <small className="per-night">per night</small>
          </div>
        </div>

        {/* room features */}
        <div className="d-flex justify-content-between text-start mb-3 align-items-center room-features">
          {features.map((feature, i) => (
            <div key={i} className="d-flex align-items-center gap-2">
              <img
                src={feature.icon}
                alt={feature.label}
                width="10%"
                height="10%"
              />
              <span className="features-style">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* room description */}
        <p className="text-start features-style">{description}</p>

        {/* buttons */}
        <div className="d-flex gap-3 mt-auto">
          <button className="btn w-50 more-details-btn">More Details</button>
          <button className="btn w-50 book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}
