import github from "./github.svg";
import instagram from "./instagram.svg";

import linkedin from "./linkedin.svg";

import telegram from "./telegram.svg";

import whatsapp from "./whatsapp.svg";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="Footer">
        <div className="icons">
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
          <img src={telegram} alt="" />
          <img src={whatsapp} alt="" />
        </div>
        <span className="copy">© 2022 Mohammadreza SharifKhani</span>
      </footer>
    </>
  );
};

export default Footer;
