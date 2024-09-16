
const AboutTheProject = ({ about, description, image }) => {
  return (
    <div className="w-[49.625rem] mx-auto mt-[5.64rem]">
      <div className="flex flex-col gap-5">
        <h3 className=" text-jaguar font-syne text-[2.5rem] font-bold">
          About the project
        </h3>
        <p className=" text-boulder font-nunito text-xl">{about}</p>
      </div>
      <img src={image} alt="" className="mt-[2.1rem] w-full" />
      <div className="mt-[3.12rem]">
        <h4 className=" text-jaguar font-syne text-3xl font-bold">
          Project Description
        </h4>
        <p className=" text-boulder font-nunito text-xl mt-5">{description}</p>
      </div>
    </div>
  );
};

export default AboutTheProject;
