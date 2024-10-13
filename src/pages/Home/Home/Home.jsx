import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import HireMe from "../HireMe/HireMe";
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
      <HireMe></HireMe>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
