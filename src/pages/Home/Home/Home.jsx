import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="z-20 max-w-screen-xl mx-auto text-white">
      <Banner></Banner>
      <Skills></Skills>
      <Service></Service>
      <Projects></Projects>
    </div>
  );
};

export default Home;
