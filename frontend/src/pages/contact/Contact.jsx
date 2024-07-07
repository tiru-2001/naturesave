import "./Contact.scss";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleFields = (e) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8700/api/v1/contact/contact-us",
      { ...fields }
    );
    console.log(data);
    if (data.success) {
      toast.success("form submitted successfully we will get back to you");
      setFields({ name: "", email: "", phone: "", message: "" });
    }
    try {
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };
  return (
    <section className="main-section font">
      <section className="first-section">
        <section className="left-section">
          <section className="left-top">
            <div className="round">
              <IoCallOutline style={{ fontSize: "2.5rem", color: "white" }} />
            </div>
            <div className="heading">
              <h2>Call Us</h2>
            </div>
            <div className="contact-details">
              <p>+91 9743888996</p>
              <p>+91 9900267279</p>
              <hr style={{ border: "1px solid black" }} />
            </div>
          </section>
          <section className="left-middle">
            <div className="round">
              <MdOutlineMailOutline
                style={{ fontSize: "2.5rem", color: "white" }}
              />
            </div>
            <div className="heading">
              <h2>Write To Us</h2>
            </div>
            <div className="contact-details">
              <p>natureraisetech@gmail.com</p>
              <hr style={{ border: "1px solid black" }} />
            </div>
          </section>
          <section className="left-bottom">
            <h2>FOLLOW US</h2>
            <div className="icons">
              <SiInstagram style={{ fontSize: "2rem" }} />
              <FiFacebook style={{ fontSize: "2rem" }} />
              <FaXTwitter style={{ fontSize: "2rem" }} />
            </div>
          </section>
        </section>
        <form onSubmit={handleSubmit} className="right-section">
          <section className="right_top">
            <div className="input-container">
              <input
                type="text"
                onChange={handleFields}
                value={fields.name}
                name="name"
                placeholder="Name "
              />
              <span className="asterisk">*</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                onChange={handleFields}
                value={fields.email}
                name="email"
                placeholder="Email"
              />
              <span className="asterisk">*</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                onChange={handleFields}
                value={fields.phone}
                name="phone"
                placeholder="Phone Number"
              />
              <span className="asterisk">*</span>
            </div>
          </section>
          <section className="right_middle">
            <textarea
              onChange={handleFields}
              rows="10"
              className="font"
              name="message"
              value={fields.message}
              placeholder="Enter your message"
            ></textarea>
          </section>
          <section className="right_bottom">
            <button>Send Message</button>
          </section>
        </form>
      </section>
    </section>
  );
};
export default Contact;
