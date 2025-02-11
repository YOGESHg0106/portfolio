import "../styles/About.css";
import ProfilePic from "../assets/profile.jpg"; // Place your image in src/assets/

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate Web Developer skilled in React.js, JavaScript,
              and modern web technologies. I enjoy building interactive and
              user-friendly applications that provide a great user experience.
            </p>
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>MongoDB</li>
              <li>Power BI & SQL</li>
            </ul>
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
          </div>
          <div className="about-image">
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
