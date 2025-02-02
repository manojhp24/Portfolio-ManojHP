import { faBuilding, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./exp-sec.css";

export default function ExperienceSection() {
  return (
    <section id="Experience" className="exp-sec">
      <h2>Experience</h2>
      <div className="exp-card-cont">
        <ExperienceContainer />
      </div>
    </section>
  );
}
function ExperienceContainer() {
  const experience = [
    {
      logo: "images/exp-logo.png",
      expName: "Internship - Java FullStack Development",
      companyName: "Ideonix Solutions",
      startDate: "Feb 2024",
      endDate: "March 2024",
      description: [
        "Built an E-commerce web app using HTML, CSS, and JavaScript.",
        "Developed backend with Java (JDBC, JSP, Servlets).",
        "Used MySQL for data storage and management.",
        "Gained practical experience in full-stack development.",
      ],
    },
    {
      logo: "images/exp-logo.png",
      expName: "Internship - Java FullStack Development",
      companyName: "Ideonix Solutions",
      startDate: "Feb 2024",
      endDate: "March 2024",
      description: [
        "Built an E-commerce web app using HTML, CSS, and JavaScript.",
        "Developed backend with Java (JDBC, JSP, Servlets).",
        "Used MySQL for data storage and management.",
        "Gained practical experience in full-stack development.",
      ],
    },
  ];

  return (
    <>
      {experience.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
    </>
  );
}
function ExperienceCard({ experience }) {
  return (
    <div className="exp-card">
      <div className="card-head">
        <img src={experience.logo} alt="exp-logo" />
        <div className="exp-heading">
          <h3>{experience.expName}</h3>
          <div className="cmpny-name">
            <span>
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <span>{experience.companyName}</span>
            <span>
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            <span>
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
        </div>
      </div>
      <div className="exp-details">
        <ul>
          {experience.description.map((des, index) => (
            <li key={index}>{des}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
