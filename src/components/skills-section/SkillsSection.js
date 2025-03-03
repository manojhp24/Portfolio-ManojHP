import "./skills.css";

export default function SkillsSection() {
  return (
    <section id="Skills" className="skill-sec">
      <h2>Technical Skills</h2>
      <div className="skill-cont">
        <SkillsContainer />
      </div>
    </section>
  );
}

function SkillsContainer() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", logo: "images/svg/python.svg" },
        { name: "Java", logo: "images/svg/java (1).svg" },
        { name: "JavaScript", logo: "images/svg/javascript.svg" },
        { name: "Dart", logo: "images/svg/dart.svg" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", logo: "images/svg/html.svg" },
        { name: "CSS", logo: "images/svg/css.svg" },
        { name: "JavaScript", logo: "images/svg/javascript.svg" },
        { name: "React.js", logo: "images/svg/react.svg" },
        { name: "Flutter", logo: "images/svg/flutter.svg" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: "images/svg/node-js.svg" },
        { name: "Spring Boot", logo: "images/svg/spring-boot.svg" },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "TensorFlow", logo: "images/svg/Tensorflow_logo.svg" },
        { name: "Scikit-Learn", logo: "images/svg/scikit-learn.svg" },
      ],
    },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <SkillsCategory
          key={index}
          category={skill.category}
          items={skill.items}
        />
      ))}
    </>
  );
}

function SkillsCategory({ category, items }) {
  return (
    <div className="prg-lang">
      <div className="heading">{category}</div>
      <hr />
      <div className="prog-lang-name">
        <div className="pl-grid">
          {items.map((lang, index) => (
            <div key={index} className="pl-item">
              <img src={lang.logo} alt={lang.name} />
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
