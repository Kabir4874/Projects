import Team1Photo from "../../assets/Team1Photo.png";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const HeroSection = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[5.83rem]">
      <div className="w-[62.377rem] mx-auto flex items-center justify-between gap-[7.75rem]">
        <div>
          <img src={Team1Photo} alt="" className="w-full" />
        </div>
        <div className="w-[30.5rem]">
          <div className=" pb-7 border-b border-alto">
            <h2 className=" text-jaguar font-syne text-[2.5rem] font-bold">
              David James
            </h2>
            <p className="mt-[0.31rem] text-boulder font-nunito text-[1.5625rem] font-medium">
              Web App
            </p>
          </div>
          <div className="mt-7">
            <h4 className=" text-jaguar font-syne text-[1.5625rem] font-bold">
              {" "}
              About David James
            </h4>
            <p className="mt-[1.44rem] text-boulder text-xl">
              Portlight's worldwide managing partner and chief creator of
              portlight creative agency. Responsible for all aspects of the
              agency's strategy, team, and operations across the network of 50+
              offices all over the world.
            </p>
            <div className="mt-7 flex items-center justify-between w-[10.08rem]">
              <img src={insta} alt="" />
              <img src={fb} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[3.125rem] p-[6.25rem] bg-jaguar text-white mt-[3.14rem]">
        <div>
          <h5 className="text-[2.5rem] font-bold font-syne">Personal Info</h5>
          <p className="mt-[1.31rem] font-nunito text-xl">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>
        <div>
          <h5 className="text-[2.5rem] font-bold font-syne">
            Career Guidelines
          </h5>
          <p className="mt-[1.31rem] font-nunito text-xl">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined apitalize on low hanging fruit to identify a ballpark
            value added activity to beta test. Override the digital divide close
            the loop on focusing solely on the bottom line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
