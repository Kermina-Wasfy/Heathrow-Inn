import receptionBg from "../assets/reception.png";
import bookingIcon from "../assets/booking.png";
import bookingBg from "../assets/booking2.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import phone from "../assets/phone.png";
import SectionTitle from "./SectionTitle";

export default function ContactUsSection() {
  return (
    <section id="contact" className="text-center py-5 px-3">
      <SectionTitle title="Contact us" />
      <div
        className="position-relative px-md-5"
        style={{ borderRadius: "20px", overflow: "hidden" }}
      >
        {/* background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `radial-gradient(circle, #00000000 0%, #232221 40%), url(${receptionBg})`,
            backgroundPosition: "right center",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* content */}
        <div
          className="d-flex justify-content-start align-items-start flex-wrap w-100"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* form */}
          <form className="text-start form">
            {/* first name */}
            <div style={{ width: "100%" }}>
              <label className="labelStyle">First Name</label>
              <input
                type="text"
                className="form-control custom-placeholder inputStyle"
                placeholder="Enter your name"
              />
            </div>

            {/* last name */}
            <div style={{ width: "100%" }}>
              <label className="labelStyle">Last Name</label>
              <input
                type="text"
                className="form-control custom-placeholder inputStyle"
                placeholder="Enter your name"
              />
            </div>

            {/* email */}
            <div style={{ width: "100%" }}>
              <label className="labelStyle">Email</label>
              <input
                type="email"
                className="form-control custom-placeholder inputStyle"
                placeholder="Someone@example.com"
              />
            </div>

            {/* subject */}
            <div style={{ width: "100%" }}>
              <label className="labelStyle">Subject</label>
              <input
                type="text"
                className="form-control custom-placeholder inputStyle"
                placeholder="Enter message subject"
              />
            </div>

            {/* message */}
            <div style={{ width: "100%" }}>
              <label className="labelStyle">Message</label>
              <textarea
                className="form-control custom-placeholder inputStyle"
                rows="4"
                placeholder="Enter message"
                style={{ resize: "none" }}
              />
            </div>

            {/* send button */}
            <button type="submit" className="btn w-100 send-btn">
              Send Message
            </button>
          </form>

          {/* social icons */}
          <div className="d-flex gap-3 mt-1 social-icons">
            <a href="https://www.booking.com" target="_blank" rel="noreferrer">
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
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" width="100%" height="100%" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" width="100%" height="100%" />
            </a>
            <a href="tel:+123456789">
              <img src={phone} alt="phone" width="100%" height="100%" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
