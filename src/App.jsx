import Header from "./components/header/Header";
import SkillContainer from "./components/skillContainer/SkillContainer";
import AboutMe from "./components/aboutMe/AboutMe";
import ProjectCard from "./components/projectCard/ProjectCard";
import { project } from "./utils/optionList";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="mt-[68px] max-w-6xl mx-auto">
        <AboutMe />
        <div className="max-w-xl mx-auto text-[#424242] px-8">
          <hr/>
        </div>
        <SkillContainer/>
      </div>

      <div className="w-full h-full bg-[#F4F4F4]" id="project">
        <div className="w-[90%] max-w-4xl mx-auto py-8">
          <div className="text-center text-[24px]">Personal Project</div>

          <div className="grid grid-cols gap-8 mt-4">
            {project.map((pj) => {
              return <ProjectCard key={pj.name} project={pj} />;
            })}
          </div>
        </div>
      </div>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
