import build from "../assets/building.png";
import logo from "../assets/logo.png";
import bookingIcon from "../assets/booking.png";
import bookingBg from "../assets/booking2.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import phone from "../assets/phone.png";

export default function AboutUsSection() {
  return (
    <section id="about" className=" mt-5 pt-5 position-relative">
      {/* background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-style"
        style={{
          backgroundColor: "#232221",
          backgroundImage: `linear-gradient(to top, rgba(35, 34, 33, 0),rgb(71, 67, 67)), url(${build})`,
          backgroundBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
      <div>
        <div className="mb-5 pb-4 text-center">
          {/* logo */}
          <img
            src={logo}
            width="10%"
            height="10%"
            alt="logo"
            className="about-logo"
          />

          {/* title */}
          <h3
            style={{
              fontSize: "2.2rem",
              margin: "0",
            }}
          >
            HEATHROW INN
          </h3>
        </div>

        {/* columns */}
        <div className=" d-flex justify-content-center flex-wrap px-md-5 about-columns">
          {/* first column */}
          <div className="col-md-3 mb-4 each-col">
            <h5 className="columnTitle">Home</h5>
            {homeLinks.map(({ label, href }, index) => (
              <a key={index} href={href} className="columnItem">
                {label}
              </a>
            ))}
          </div>

          {/* second column */}
          <div className="col-md-3 mb-4 each-col">
            <h5 className="columnTitle">About us</h5>
            {aboutLinks.map(({ label, href }, index) => (
              <a key={index} href={href} className="columnItem">
                {label}
              </a>
            ))}
          </div>

          {/* third column */}
          <div className="col-md-3 mb-4 each-col">
            <h5 className="columnTitle">Quick links</h5>
            {quickLinks.map(({ label, href }, index) => (
              <a key={index} href={href} className="columnItem">
                {label}
              </a>
            ))}
          </div>

          {/* fourth column */}
          <div className="col-md-3 mb-4 each-col">
            <h5 className="columnTitle">Contact Us</h5>
            <div className="d-flex gap-3 mt-4">
              <a href="https://www.booking.com">
                <img
                  src={bookingIcon}
                  alt="booking"
                  width="100%"
                  height="90%"
                  style={{
                    backgroundImage: `url(${bookingBg})`,
                    backgroundSize: "cover",
                    padding: "0.4rem",
                  }}
                />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img
                  src={instagram}
                  alt="instagram"
                  width="100%"
                  height="100%"
                />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img src={facebook} alt="facebook" width="100%" height="100%" />
              </a>
              <a href="tel:+123456789">
                <img src={phone} alt="phone" width="100%" height="100%" />
              </a>
            </div>
          </div>
        </div>

        {/* line */}
        <hr />

        {/* footer */}
        <p className="footer-p">
          Developed by
          <span style={{ fontWeight: "500" }}>
            <a
              href="https://innovationscope.com"
              target="_blank"
              className="innov-scope"
            >
              &nbsp; Innovation Scope
            </a>
          </span>
          . All rights reserved 2025
        </p>
      </div>
    </section>
  );
}

const homeLinks = [
  { label: "Why choose us", href: "#amenities" },
  { label: "Rooms & facilities", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact us", href: "#contact" },
];

const aboutLinks = [
  { label: "Why choose us", href: "#amenities" },
  { label: "History", href: "#hero" },
  { label: "Location", href: "#location" },
];

const quickLinks = [
  { label: "Gallery", href: "#gallery" },
  { label: "Morjana lounge", href: "#morjana" },
  { label: "Rooms", href: "#rooms" },
];
