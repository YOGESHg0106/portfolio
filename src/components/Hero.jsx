import "../styles/Hero.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Yogesh Gupta</span>
          </h1>
          <h2>Web Developer | React Enthusiast</h2>
          <p>
            I build beautiful and functional web applications. Passionate about
            creating seamless user experiences with modern web technologies.
          </p>

          {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://github.com/YOGESHg0106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yogeshgupta0106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/yogesh_gupta_0106/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
            <a href="/resume.pdf" download className="btn secondary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
