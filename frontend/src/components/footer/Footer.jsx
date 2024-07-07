import "./footer.scss";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="main_footerContainer">
      <footer>
        <section className="top">
          <h1>Nature save</h1>
          <p>Register with your to receive exclusive offers and updates!</p>
          <section className="custom_input">
            <input placeholder="Enter your email" type="email" />
            <BsSend style={{ cursor: "pointer" }} />
          </section>
        </section>
        <section className="bottom">
          <section className="bottom_top">
            <section className="bottom_top_container">
              <section>
                <h3>Company</h3>
                <Link className="links">About us</Link>
                <Link className="links">Our Service</Link>
                <Link className="links">Contact us</Link>
              </section>
              <section>
                <h3>How to buy</h3>
                <Link className="links">Making Payments</Link>
                <Link className="links">Delivery Options</Link>
              </section>
              <section>
                <h3>Help</h3>
                <Link className="links">FAQ</Link>
                <Link className="links">Privacy Policy</Link>
              </section>
            </section>
          </section>
          <section className="bottom_bottom">
            <section className="bottom_images">
              <img src="/master.png" alt="" />
              <img src="/paypal.png" alt="" />
              <img src="/visa.png" alt="" />
            </section>
            <section>
              <small>&copy;Copyright in reserved for nature save</small>
            </section>
            <section className="bottom_icons">
              <FaFacebookF style={{ fontSize: "1.5rem" }} />
              <FaInstagram style={{ fontSize: "1.5rem" }} />
              <FaXTwitter style={{ fontSize: "1.5rem" }} />
            </section>
          </section>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
