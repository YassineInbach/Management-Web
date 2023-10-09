import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../../public/Images/logo.png";
function Footer() {
  return (
    <footer>
      <div className="footer-Groups">
        <div className="Group">
          <div className="logo">
            <img src={logo} alt="" />
            <p>
              Tasker
            </p>
          </div>
          <p style={{ paddingTop: "5px" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod dfa tempor invidunt ut labore et
          </p>
          <div className="icons">
            <a href="">
              <FaFacebookF id="icon" />
            </a>
            <a href="">
              <FaGooglePlusG id="icon" />
            </a>
            <a href="">
              <FaLinkedinIn id="icon" />
            </a>
            <a href="">
              <FaInstagram id="icon" />
            </a>
          </div>
        </div>
        <div className="Group-List">
          <div className="group1">
            <div className="links">
              <h3
                style={{
                  fontWeight: "900",
                  letterSpacing: "1px",
                  paddingbottom: "17px",
                }}
              >
                Tasker
              </h3>
              <nav>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Product</a>
                  </li>
                  <li>
                    <a href="">What’s New</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Premium</a>
                  </li>
                  <li>
                    <a href="">Business</a>
                  </li>
                  <li>
                    <a href="">Enterprise</a>
                  </li>
                  <li>
                    <a href="">Customer Success</a>
                  </li>
                  <li>
                    <a href="">Asana Templates</a>
                  </li>
                  <li>
                    <a href="">Trust & Security</a>
                  </li>
                  <li>
                    <a href="">Status</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="links">
              <h3
                style={{
                  fontWeight: "900",
                  letterSpacing: "1px",
                  paddingbottom: "17px",
                }}
              >
                Solutions
              </h3>
              <nav>
                <ul>
                  <li>
                    <a href="">Enterprise</a>
                  </li>
                  <li>
                    <a href="">Small business</a>
                  </li>
                  <li>
                    <a href="">Personal use</a>
                  </li>
                  <li>
                    <a href="">Remote work</a>
                  </li>
                  <li>
                    <a href="">Startups</a>
                  </li>
                  <li>
                    <a href="">Education</a>
                  </li>
                  <li>
                    <a href="">Nonprofits</a>
                  </li>
                  <li>
                    <a href="">Engineering</a>
                  </li>
                  <li>
                    <a href="">Product</a>
                  </li>
                  <li>
                    <a href="">Design</a>
                  </li>
                  <li>
                    <a href="">Managers</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="group1">
            <div>
              <div className="links">
                <h3
                  style={{
                    fontWeight: "900",
                    letterSpacing: "1px",
                    paddingbottom: "17px",
                  }}
                >
                  Download
                </h3>
                <nav>
                  <ul>
                    <li>
                      <a href="">iOS & Android</a>
                    </li>
                    <li>
                      <a href="">Mac & Windows</a>
                    </li>
                    <li>
                      <a href="">Web Clipper</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="links">
                <h3
                  style={{
                    fontWeight: "900",
                    letterSpacing: "1px",
                    paddingbottom: "17px",
                  }}
                >
                  Build
                </h3>
                <nav>
                  <ul>
                    <li>
                      <a href="">Integrations</a>
                    </li>
                    <li>
                      <a href="">Templates</a>
                    </li>
                    <li>
                      <a href="">API docs</a>
                    </li>
                    <li>
                      <a href="">Guides & tutorials</a>
                    </li>
                    <li>
                      <a href="">Find a consultant</a>
                    </li>
                    <li>
                      <a href="">Become an affiliate</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="made-with">
            <p>© 2023 - Made with ❤️ by <span><a  href= "https://github.com/YassineInbach" target="_blank">Yassine Inbach</a></span></p>
        </div>
    </footer>
  );
}

export default Footer;
