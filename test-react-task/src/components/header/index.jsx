import logo from "..//..//assets/logo.svg";
import "./style.css";
export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <h1 className="company-name">Art of Style</h1>
      <a href="#contacts" className="header__contacts">
        Contacts
      </a>
    </header>
  );
}
