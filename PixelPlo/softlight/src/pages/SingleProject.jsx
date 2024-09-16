import { useEffect } from "react";
import AboutTheProject from "../components/singleProject/AboutTheProject";
import HeroSection from "../components/singleProject/HeroSection";
import MoreProject from "../components/singleProject/MoreProject";
import ProjectGallery from "../components/singleProject/ProjectGallery";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_project } from "../store/reducers/projectReducer";

const SingleProject = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(get_project(projectId));
  }, [projectId]);
  return (
    <div className="w-full overflow-x-hidden single-project-bg">
      <HeroSection project={project} />
      <AboutTheProject
        about={project?.aboutProject}
        description={project?.projectDescription}
        image={project?.images?.[1] ? project.images[1] : ""}
      />
      <ProjectGallery images={project.images} />
      <MoreProject />
    </div>
  );
};

export default SingleProject;
