import "../styles/Projects.css";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.jpg";
import Project5 from "../assets/project5.jpg";

const projects = [
  {
    id: 1,
    title: "SuperStore Sales Dashboard",
    description:
      "A Power BI dashboard providing sales insights using SQL and data visualization.",
    image: Project1,
    demoLink: "https://github.com/YOGESHg0106/Supersales-Dashboard",
    codeLink: "https://github.com/YOGESHg0106/Supersales-Dashboard",
  },
  {
    id: 2,
    title: "Weather Prediction Using ML",
    description:
      "A machine learning model predicting weather conditions using historical data.",
    image: Project2,
    demoLink: "https://github.com/YOGESHg0106/Weather-Forecasting-using-ML-",
    codeLink: "https://github.com/YOGESHg0106/Weather-Forecasting-using-ML-",
  },
  {
    id: 3,
    title: "King Sukh Guest House Website",
    description:
      "A full-stack guest house booking website using React and MongoDB.",
    image: Project3,
    demoLink: "https://yogeshg0106.github.io/King-Sukh-Guest-House/",
    codeLink: "https://github.com/YOGESHg0106/King-Sukh-Guest-House",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern React portfolio with smooth scrolling and animations.",
    image: Project4,
    demoLink: "https://yogesh-portfolio-0106.netlify.app/",
    codeLink: "https://github.com/YOGESHg0106/Yogesh-portfolio",
  },
  {
    id: 5,
    title: "Firebase Phone Authentication App",
    description:
      "This is a Phone Authentication app that enables users to sign in using their phone numbers and OTP for verification. Once authenticated, users are redirected to a Welcome Page.",
    image: Project5,
    demoLink: "https://task2-kfso5zr1n-yogesh-s-projects-f4fa46e2.vercel.app/",
    codeLink: "https://github.com/YOGESHg0106/firebase-phone-auth",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
