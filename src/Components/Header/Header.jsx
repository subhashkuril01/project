import "./Header.css";

import Navbar from "../Navbar/Navbar";
import TextBox from "../TextBox/TextBox";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <TextBox />
    </section>
  );
};

export default Header;
// This code defines a Header component that includes a Navbar and a TextBox.
// The Header component is styled with a CSS file named Header.css. 