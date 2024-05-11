import mailIcon from "../../assets/mailIcon.png";
import callIcon from "../../assets/callIcon.png";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const ContactForm = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[6.23rem]">
      <div className="flex items-start gap-[3.12rem]">
        {/* left side  */}
        <div>
          <h3 className=" text-jaguar font-syne text-[2.5rem] font-bold">
            Let's <span className=" bg-jaguar text-white px-2">Talk</span>
          </h3>
          <p className="mt-[0.94rem] text-black font-nunito text-[1.5625rem] w-[30.5rem]">
            Send us an email or start a conversation by filling the form below.
          </p>
          <p className="mt-12 text-jaguar font-syne text-3xl font-semibold leading-[128.182%] capitalize">
            Reach us directly!
          </p>
          <div className="mt-[1.88rem] px-6 py-3 flex items-center gap-[2.09rem] rounded-[11.5rem] border-2 border-jaguar bg-jaguar">
            <img src={mailIcon} alt="" />
            <div className="pt-[0.45rem] pb-[0.91rem] text-white">
              <p className=" font-syne text-[1.5625rem] font-bold">Email</p>
              <p className="mt-2 font-nunito text-xl font-medium">
                hello@softlight.degsign
              </p>
            </div>
          </div>
          <div className="mt-[1.88rem] px-6 py-3 flex items-center gap-[2.09rem] rounded-[11.5rem] border-2 border-jaguar bg-jaguar">
            <img src={callIcon} alt="" />
            <div className="pt-[0.45rem] pb-[0.91rem] text-white">
              <p className=" font-syne text-[1.5625rem] font-bold">Email</p>
              <p className="mt-2 font-nunito text-xl font-medium">
                hello@softlight.degsign
              </p>
            </div>
          </div>
          <div className="w-[27.7rem] h-[1px] bg-alto my-12" />
          <p className=" text-jaguar font-syne text-3xl font-semibold">
            Follow us:
          </p>
          <div className="mt-5 flex items-center gap-[2.56rem]">
            <img src={insta} alt="" className="w-[2.113rem]" />
            <img src={fb} alt="" className="w-[2.113rem]" />
            <img src={twitter} alt="" className="w-[2.113rem]" />
            <img src={linkedin} alt="" className="w-[2.113rem]" />
          </div>
        </div>

        {/* right side  */}
        <div className="w-[41.381rem]">
          <form action="">
            <div className="flex items-center justify-between gap-[1.12rem]">
              <div className="flex flex-col gap-[1.06rem] w-full">
                <label
                  htmlFor="name"
                  className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John David"
                  className="w-full rounded-[17.68rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
                />
              </div>
              <div className="w-full flex flex-col gap-[1.06rem]">
                <label
                  htmlFor="email"
                  className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@yourmail.com"
                  className="w-full rounded-[17.68rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-[1.12rem] mt-[1.88rem]">
              <div className="flex flex-col gap-[1.06rem] w-full">
                <label
                  htmlFor="name"
                  className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
                >
                  Phone *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="(000) 123 456"
                  className="w-full rounded-[17.68rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
                />
              </div>
              <div className="w-full flex flex-col gap-[1.06rem]">
                <label
                  htmlFor="email"
                  className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
                >
                  Subject *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ex. project"
                  className="w-full rounded-[17.68rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-[1.06rem] mt-10">
              <label
                htmlFor="message"
                className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
              >
                Leave us a message *
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Hello there,I would like to talk about how to..."
                className="w-full h-[15.625rem] rounded-[1.25rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
              ></textarea>
            </div>
            <button className="mt-10 py-4 px-8 rounded-[2.5rem] bg-jaguar text-white font-nunito text-sm font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
