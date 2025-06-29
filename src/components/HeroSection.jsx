import leftImage from "../assets/hands-taking-food.jpg";
import rightImage from "../assets/table-image.png";
import leftDeco from "../assets/left-deco.png";
import rightDeco from "../assets/right-deco.png";

export default function HeroSection() {
  return (
    <section id="hero" className="position-relative mb-5 px-md-5 mt-5 pt-4">
      {/* left image */}
      <div className="left-img">
        <img
          src={leftImage}
          alt="Serving food"
          className="left-img-style img-fluid"
        />
      </div>

      {/* right image */}
      <div className="right-img">
        <img
          src={rightImage}
          alt="Table setup"
          className="right-img-style img-fluid"
        />
      </div>

      {/* title and description */}
      <div className="d-flex flex-column align-items-center justify-content-center position-relative title-desc text-center mx-auto">
        {/* logo */}
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          className="d-md-none mb-3 logo-mob img-fluid"
        />

        {/* title row */}
        <div className="d-flex align-items-center justify-content-center hero-title">
          <img src={leftDeco} alt="left-deco" width="17%" />
          <h1
            style={{
              fontSize: "3rem",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              margin: "0 1rem",
            }}
          >
            HEATHROW INN
          </h1>
          <img src={rightDeco} alt="right-deco" width="17%" />
        </div>

        {/* description */}
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur. Mauris habitasse neque donec
          nulla aliquam aenean est id. Lorem ipsum dolor sit amet consectetur.
          Mauris habitasse neque donec nulla aliquam aenean est id.
        </p>
      </div>
    </section>
  );
}
