import logo from "../assets/logo.png";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Rooms", href: "#rooms" },
  { label: "Morjana Lounge", href: "#morjana" },
  { label: "Gallery", href: "#gallery" },
  { label: "About us", href: "#about" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="position-relative d-none d-md-flex d-flex flex-column align-items-center py-5 nav-style">
      {/*navbar logo*/}
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* navbar links */}
      <ul className="nav mt-3 pb-5">
        {links.map((link) => (
          <li className="nav-item" key={link.label}>
            <a href={link.href} className="nav-link px-4 py-1 link-custom">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
