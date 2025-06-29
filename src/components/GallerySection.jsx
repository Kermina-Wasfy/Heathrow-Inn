import landscape from "../assets/landscape.png";
import cocktail from "../assets/cocktail.jpg";
import handsFood from "../assets/hands-taking-food.jpg";
import SectionTitle from "./SectionTitle";

export default function GallerySection() {
  return (
    <section id="gallery" className=" text-center py-5 px-3">
      <SectionTitle title="Gallery" />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-style" />

      <div className="gallery-container d-flex flex-wrap justify-content-center gap-4 mb-5 gallery">
        {/* landscape image */}
        <img
          src={landscape}
          alt="landscape"
          className="gallery-item landscape landscape-img"
        />

        {/* cocktail image and orange rectangle */}
        <div className="gallery-item cocktail-section d-flex flex-column justify-content-between cocktail">
          {/* cocktail grid */}
          <div className="cocktail-grid cocktail-division">
            <div
              className="cocktail-part part-1"
              style={{ backgroundImage: `url(${cocktail})` }}
            ></div>
            <div
              className="cocktail-part part-2"
              style={{ backgroundImage: `url(${cocktail})` }}
            ></div>
            <div
              className="cocktail-part part-3"
              style={{ backgroundImage: `url(${cocktail})` }}
            ></div>
            <div
              className="cocktail-part part-4"
              style={{ backgroundImage: `url(${cocktail})` }}
            ></div>
          </div>

          {/* orange rectangle */}
          <div className="orange-rectangle orange-rect"></div>
        </div>

        {/* hands taking food image and white rectangle */}
        <div className="gallery-item hands-section d-flex flex-column justify-content-between hands-part">
          {/* white rectangle */}
          <div className="white-rectangle white-rect"></div>

          {/* hands taking food image */}
          <img src={handsFood} alt="hands-food" className="hands-img" />
        </div>
      </div>

      {/* see more button */}
      <button className="btn mt-3 see-btn">See more</button>
    </section>
  );
}
