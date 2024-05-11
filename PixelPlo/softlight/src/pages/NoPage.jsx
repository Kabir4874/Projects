import { Link } from "react-router-dom";
import HeroButton from "../components/HeroButton";
import NewsLetter from "../components/about/NewsLetter";

const NoPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-[75rem] mx-auto px-[2.7rem]">
        <h1 className=" text-jaguar flex flex-col items-center font-syne text-[15.625rem] font-bold">
          404
        </h1>
        <h2 className="my-4 text-center text-[3.125rem] font-syne font-bold text-jaguar">
          Looks like you’re lost{" "}
        </h2>
        <p className="max-w-[62.25rem] text-center mx-auto text-boulder font-nunito text-[1.5625rem] my-[1.62rem]">
          We'll never push extras that don't make sense for your brand just to
          make a quick buck. Our pricing policy is as transparent as our
          process.
        </p>
        <Link to={"/"}>
          <HeroButton text={"Go To Home"} />
        </Link>
      </div>
      <NewsLetter />
    </div>
  );
};

export default NoPage;
