import SectionTitle from "../../../components/SectionTitle";

const Skills = () => {
  const skills = [
    {
      name: "HTML 5",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS 3",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "React JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },

    {
      name: "react-hook-form",
      icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png",
    },

    {
      name: "Material UI",
      icon: "https://v4.material-ui.com/static/logo.png",
    },

    {
      name: "Node JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Express JS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    },
    {
      name: "Git",
      icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "GitHub",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
  ];

  const tools = [
    {
      name: "VS Code",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
    {
      name: "Chrome",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png",
    },
    {
      name: "MongoDB Compass",
      icon: "https://static-00.iconduck.com/assets.00/mongodb-compass-icon-512x511-15uiytr9.png",
    },
    {
      name: "Postman",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWljheH88qcaUyOBSYs7uILchXcKdZosvLg&s",
    },
  ];

  return (
    <div>
      <SectionTitle
        subHeading="My Skills"
        mainHeading="My Skill Field Here"
      ></SectionTitle>
      <section className="bg-gray-900 rounded-lg my-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white"></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-10">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center my-14">
          <h2 className="text-2xl font-medium text-white">
            TOOLS AND SOFTWARE
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-10">
          {tools.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="bg-gray-900 rounded-lg my-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">TOOLS AND SOFTWARE</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-10">
          {tools.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Skills;
