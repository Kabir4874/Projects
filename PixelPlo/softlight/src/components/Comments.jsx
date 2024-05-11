const Comments = ({ heading, tik }) => {
  return (
    <div className="w-[49.25rem] mx-auto mt-[4.47rem]">
      <h2 className=" text-jaguar font-syne text-[2.5rem] font-semibold leading-[128.182%]">
        {heading}
      </h2>
      <form action="" className="mt-[2.88rem]">
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
        <div className="w-full flex flex-col gap-[1.06rem] mt-10">
          <label
            htmlFor="website"
            className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
          >
            Website *
          </label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="your website address here"
            className="w-full rounded-[17.68rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
          />
        </div>
        <div className="w-full flex flex-col gap-[1.06rem] mt-10">
          <label
            htmlFor="message"
            className=" text-jaguar font-syne text-xl font-medium leading-[150%]"
          >
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Hello there,I would like to talk about how to..."
            className="w-full h-[15.625rem] rounded-[1.25rem] border border-alto3 py-[1.34rem] px-8 placeholder:text-boulder2 placeholder:font-nunito placeholder:text-lg placeholder:lowercase"
          ></textarea>
        </div>
        <div
          className={`mt-[1.12rem] space-x-[0.5rem] flex items-center ${
            !tik && "hidden"
          }`}
        >
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className=" rounded-[0.25rem] border-[1.5px] border-jaguar w-[1.125rem]"
          />
          <label
            htmlFor="checkbox"
            className="text-boulder font-nunito text-lg lowercase"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button className="mt-10 py-4 px-8 rounded-[2.5rem] bg-jaguar text-white font-nunito text-sm font-bold">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
