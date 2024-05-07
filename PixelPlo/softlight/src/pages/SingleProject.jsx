import AboutTheProject from "../components/singleProject/AboutTheProject";
import HeroSection from "../components/singleProject/HeroSection";
import MoreProject from "../components/singleProject/MoreProject";
import ProjectGallery from "../components/singleProject/ProjectGallery";

const SingleProject = () => {
  return (
    <div className="w-full overflow-x-hidden single-project-bg">
      <HeroSection />
      <AboutTheProject />
      <ProjectGallery />
      <MoreProject />
    </div>
  );
};

export default SingleProject;
