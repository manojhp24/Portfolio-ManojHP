import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./project-sec.css";

export default function ProjectSection() {
  return (
    <section id="Projects" className="project-sec">
      <h2>Featured Projects</h2>
      <div className="proj-card-cont">
        <ProjectContainer />
      </div>
    </section>
  );
}
function ProjectContainer() {
  const projects = [
    {
      projectName: "Plant Desiease Identification",
      thumbnail: "images/projectImages/plant-desiease.jpeg",
      description: "Advanced machine learning system with real-time processing",
      tools: [
        "Python",
        "TensorFlow",
        "Android Studio",
        "Java",
        "Deep Learning",
      ],
    },
    {
      projectName: "House Price Prediction",
      thumbnail: "images/projectImages/houseprice.jpeg",
      description: "Advanced machine learning system with real-time processing",
      tools: ["Python", "Scikit-learn", "Jupyter", "Django"],
    },
    {
      projectName: "Birthday Event Booking Track System",
      thumbnail: "images/projectImages/birthday-booking.jpeg",
      description: "Advanced machine learning system with real-time processing",
      tools: ["Flutter", "Dart", "FireBase", "VS Code", "Android Studio"],
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCards key={index} project={project} />
      ))}
    </>
  );
}
function ProjectCards({ project }) {
  return (
    <div className="p-card">
      <img
        src={project.thumbnail}
        alt={project.projectName}
        className="card-img"
      />
      <h3 className="card-titlle">{project.projectName}</h3>
      <p className="description">{project.description}</p>
      <div className="card-tags">
        {project.tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>

      <div className="card-links">
        <span className="view">View</span>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="arrow-link"
        />
      </div>
    </div>
  );
}
