import morjanaBg from "../assets/morjana.png";

export default function MorjanaSection() {
  return (
    <section id="morjana" style={{ position: "relative", overflow: "hidden" }}>
      {/* background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-style"
        style={{
          backgroundColor: "rgba(35, 34, 33, 0.5)",
          backgroundImage: `linear-gradient(to bottom, #232221, rgba(0, 0, 0, 0), #232221), url(${morjanaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* content */}
      <div className="morjana-style">
        <p className="morjana-first-p">Unwind and indulge at</p>
        <h2 className="morjana-h2">Morjana Lounge</h2>
        <p className="morjana-second-p">where relaxation meets luxury</p>
        <button className="btn morjana-btn">See more</button>
      </div>
    </section>
  );
}
