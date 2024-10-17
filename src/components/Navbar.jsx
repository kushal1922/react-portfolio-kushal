import logo from "../assets/kushalgupta.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-14 mix-blend-screen" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/kushal22/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kushal1922"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          title="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/kg151050"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          title="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/k.u.s.h.a_l/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        {/* <a
          href="\src\assets\KUSHAL GUPTA.pdf"
          download="KUSHAL GUPTA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          title="Download Resume"
        >
          <FaDownload />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
