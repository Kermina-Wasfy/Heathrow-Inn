import leftDeco from "../assets/left-deco.png";
import rightDeco from "../assets/right-deco.png";

export default function SectionTitle({ title }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
      <img src={leftDeco} width="6%" height="7%" alt="left-deco" />
      <h2 className="section-heading">{title}</h2>
      <img src={rightDeco} width="6%" height="7%" alt="right-deco" />
    </div>
  );
}
