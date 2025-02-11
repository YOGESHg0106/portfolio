import { useState } from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // State for form data and messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(""); // Reset message

    try {
      // ✅ Step 1: Send email
      const emailRes = await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const emailData = await emailRes.json();
      console.log("📧 Email API Response:", emailData);

      if (!emailRes.ok) {
        throw new Error(emailData.error || "Failed to send email");
      }

      // ✅ Step 2: Store message in MongoDB
      const dbRes = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const dbData = await dbRes.json();
      console.log("💾 Database API Response:", dbData);

      if (!dbRes.ok) {
        throw new Error(dbData.error || "Failed to save message in database");
      }

      // Success message
      setResponseMessage("✅ Message sent & stored successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("❌ Error:", error.message);
      setResponseMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Let's Connect!</h2>
        <p>Got a project or an idea? Feel free to reach out!</p>

        <div className="contact-content">
          {/* Left Side - Contact Form */}
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
            {responseMessage && (
              <p className="response-message">{responseMessage}</p>
            )}
          </div>

          {/* Right Side - Contact Info & Socials */}
          <div className="contact-info">
            <h3>Connect with Me</h3>
            <p>
              Email:{" "}
              <a href="mailto:yogesh798714@gmail.com">yogesh798714@gmail.com</a>
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/YOGESHg0106"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/yogeshgupta0106"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:yogesh798714@gmail.com" aria-label="Email">
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
