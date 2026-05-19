import { FormEvent, useEffect, useRef, useState } from "react";
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
  MdSend,
  MdCheckCircle,
  MdError,
} from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import "./styles/LetsConnect.css";

// ⚠️ CONFIGURE THESE WITH YOUR EMAILJS CREDENTIALS
// Get these from your EmailJS dashboard: https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = "service_hhtzwe6"; // From: Email Services tab
const EMAILJS_TEMPLATE_ID = "template_wx8qmuo"; // From: Email Templates tab
const EMAILJS_PUBLIC_KEY = "cRymtxBE5PbTbSB-E"; // From: Account > General > Public Key

// Initialize EmailJS SDK on module load
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sendStatus, setSendStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const characterRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const character = characterRef.current;
    if (!section || !character) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = x * 12;
      const rotateX = -y * 8;
      const translateX = x * 15;
      const translateY = y * 10;

      character.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateX(${translateX}px) translateY(${translateY}px)`;
    };

    const handleMouseLeave = () => {
      character.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateX(0px) translateY(0px)";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSendStatus("sending");
    setErrorMessage("");

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          reply_to: formData.email,
          title: formData.subject,
          message: formData.message,
          to_name: "Harshil",
        }
      );

      console.log("EmailJS Success:", response.status, response.text);
      setSendStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSendStatus("idle"), 4000);
    } catch (error: unknown) {
      const err = error as { text?: string; status?: number; message?: string };
      console.error("EmailJS Error:", error);
      console.error("Error details - Status:", err?.status, "Text:", err?.text);

      // Provide a user-friendly error message based on the error
      if (err?.status === 422) {
        setErrorMessage("Invalid EmailJS credentials. Please check your Service ID, Template ID, and Public Key.");
      } else if (err?.status === 400) {
        setErrorMessage("Bad request. Please check your EmailJS template variables match the form fields.");
      } else {
        setErrorMessage(err?.text || err?.message || "Something went wrong. Please try again or email me directly.");
      }

      setSendStatus("error");
      setTimeout(() => {
        setSendStatus("idle");
        setErrorMessage("");
      }, 6000);
    }
  };

  return (
    <div className="connect-section" id="connect" ref={sectionRef}>
      {/* Floating particles */}
      <div className="connect-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      <div className="connect-container">
        <div className="connect-header">
          <h2>
            Let's <span>Connect</span>
          </h2>
          <div className="connect-underline"></div>
          <p>
            Have a project idea or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="connect-layout">
          {/* Left: 3D Character */}
          <div className="connect-3d-side">
            <div className="connect-character-wrapper" ref={characterRef}>
              <div className="connect-glow"></div>
              <img
                src="/images/Telephone.jpg"
                alt="3D Character with telephone"
                className="connect-character-img"
              />
              <div className="connect-float-badge connect-badge-1">
                <MdPhone />
                <span>Call Me!</span>
              </div>
              <div className="connect-float-badge connect-badge-2">
                <MdEmail />
                <span>Email</span>
              </div>
              <div className="connect-float-badge connect-badge-3">
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </div>
            </div>

            {/* Info cards below character */}
            <div className="connect-info-strip">
              <div className="connect-info-item" data-cursor="disable">
                <MdLocationOn />
                <div>
                  <strong>Location</strong>
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
              <div className="connect-info-item" data-cursor="disable">
                <MdPhone />
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919099968358">+91 90999 68358</a>
                </div>
              </div>
              <div className="connect-info-item" data-cursor="disable">
                <MdEmail />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:harshilchauhan3617u@gmail.com">
                    harshilchauhan3617u@gmail.com
                  </a>
                </div>
              </div>
              <div className="connect-info-item" data-cursor="disable">
                <FaLinkedinIn />
                <div>
                  <strong>LinkedIn</strong>
                  <a
                    href="https://www.linkedin.com/in/harshil-chauhan-7a2314299/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/harshil-chauhan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="connect-form-side">
            <div className="connect-form-header">
              <h3>Send me a message</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
            <form className="connect-form" onSubmit={handleSubmit}>
              <div className="connect-form-row">
                <div className="connect-input-group">
                  <label htmlFor="connect-name">Your Name</label>
                  <input
                    id="connect-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <div className="connect-input-group">
                  <label htmlFor="connect-email">Your Email</label>
                  <input
                    id="connect-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
              </div>
              <div className="connect-input-group">
                <label htmlFor="connect-subject">Subject</label>
                <input
                  id="connect-subject"
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <div className="connect-input-group">
                <label htmlFor="connect-message">Your Message</label>
                <textarea
                  id="connect-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <button
                type="submit"
                className={`connect-submit-btn ${sendStatus !== "idle" ? "connect-btn-" + sendStatus : ""}`}
                data-cursor="disable"
                disabled={sendStatus === "sending"}
              >
                {sendStatus === "idle" && (
                  <>
                    <span>Send Message</span>
                    <MdSend />
                  </>
                )}
                {sendStatus === "sending" && (
                  <>
                    <span>Sending...</span>
                    <div className="connect-spinner"></div>
                  </>
                )}
                {sendStatus === "success" && (
                  <>
                    <span>Message Sent!</span>
                    <MdCheckCircle />
                  </>
                )}
                {sendStatus === "error" && (
                  <>
                    <span>Failed to Send</span>
                    <MdError />
                  </>
                )}
              </button>
            </form>

            {/* Toast notification */}
            {sendStatus === "success" && (
              <div className="connect-toast connect-toast-success">
                <MdCheckCircle /> Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {sendStatus === "error" && (
              <div className="connect-toast connect-toast-error">
                <MdError /> {errorMessage || "Something went wrong. Please try again or email me directly."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
