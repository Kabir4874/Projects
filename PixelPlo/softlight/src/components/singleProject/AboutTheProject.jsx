import singleProjectPhoto2 from "../../assets/singleProjectPhoto2.png";
const AboutTheProject = () => {
  return (
    <div className="w-[49.625rem] mx-auto mt-[5.64rem]">
      <div className="flex flex-col gap-5">
        <h3 className=" text-jaguar font-syne text-[2.5rem] font-bold">
          About the project
        </h3>
        <p className=" text-boulder font-nunito text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu
          enim urna adipiscing praesent velit viverra sit semper lorem eu cursus
          vel hendrerit elementum. Morbi curabitur etiam nibh justo, lorem
          aliquet donec. Sed sit mi dignissim at ante massa mattis egestas.
        </p>
        <p className=" text-boulder font-nunito text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu
          enim urna adipiscing praesent velit viverra sit semper lorem eu cursus
          vel hendrerit elementum. Morbi curabitur etiam nibh justo, lorem
          aliquet donec.{" "}
        </p>
      </div>
      <p className=" text-boulder mt-[1.88rem] font-nunito text-[1.5625rem] leading-[200%]">
        <span className=" text-jaguar">1.</span> Nostrum facere repellendus
        minus quod <br /> <span className=" text-jaguar">2.</span> Aut aliquam
        neque reiciendis. <br /> <span className=" text-jaguar">3.</span> Qui
        beatae vel magnam repudiandae <br />{" "}
        <span className=" text-jaguar">4.</span> Ipsum repellat repudiandae.
      </p>
      <img src={singleProjectPhoto2} alt="" className="mt-[2.1rem]" />
      <div className="mt-[3.12rem]">
        <h4 className=" text-jaguar font-syne text-3xl font-bold">
          Make real time a work improvements
        </h4>
        <p className=" text-boulder font-nunito text-xl mt-5">
          Lorem ipsum dolor sit amet, adipiscing praesent velit viverra sit
          semper lorem eu cursus vels hendrerit elementum. Morbi curabitur etiam
          nibh justo, lorem aliquet donec. Sed sit mi dignissim at ante massa
          mattis egestas.
        </p>
        <p className=" text-boulder mt-[1.88rem] font-nunito text-[1.5625rem] leading-[180.9%] ml-6">
          <ul className=" list-disc">
            <li>Veniam quae. Nostrum facere repellendus minus</li>
            <li>Quod aut aliquam neque reiciendis. magnam</li>
            <li>Repudiandae ipsum repellat repudiandae. </li>
            <li>Voluptate Dolores ut dolor sint occaecation.</li>
          </ul>
        </p>
        <p className="mt-[1.88rem] text-boulder font-nunito text-xl">
          Lorem hendrerit elementum. Morbi curabitur etiam nibh justo, lorem
          aliquet donec. Sed sit mi dignissim at ante massa mattis egestas.
        </p>
      </div>
    </div>
  );
};

export default AboutTheProject;
