import singleblog3Photo from "../../assets/singleblog3Photo.png";
import singleblog2Photo from "../../assets/singleblog2Photo.png";
import quoteIcon from "../../assets/quoteIcon.svg";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const BlogDetails = () => {
  return (
    <div className="w-[49.25rem] mx-auto">
      <h3 className=" text-jaguar font-syne text-[2.5rem] font-bold mt-[1.94rem]">
        How to choose the typography?
      </h3>
      <p className=" text-boulder font-nunito text-xl mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis
        ridiculus viverra nisi, eget egestas. Sed aliquet eu in risus elit morbi
        at lectus et enim aiondimentum volutpat feugiat gravida tortor, bibendum
        in. Vitae pharetra eu aliquet ut lorem.{" "}
      </p>
      <p className=" text-boulder mt-[1.88rem] font-nunito text-[1.5625rem] leading-[200%] ml-6">
        <ul className=" list-disc">
          <li>Veniam quae. Nostrum facere repellendus minus</li>
          <li>Quod aut aliquam neque reiciendis. magnam</li>
          <li>Repudiandae ipsum repellat repudiandae. </li>
          <li>Voluptate Dolores ut dolor sint occaecation.</li>
        </ul>
      </p>
      <h3 className=" text-jaguar font-syne text-3xl font-bold mt-[3.12rem]">
        Make real time a wireframes service
      </h3>
      <p className=" text-boulder font-nunito text-xl mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis
        ridiculus viverra nisi, eget egestas. Sed aliquet eu in risus elit morbi
        at lectus et enim aiondimentum volutpat feugiat gravida tortor, bibendum
        in. Vitae pharetra eu aliquet ut lorem.
      </p>
      <img src={singleblog3Photo} alt="" className=" mt-[1.88rem]" />
      <h3 className=" text-jaguar font-syne text-[2.5rem] font-bold mt-[3.12rem]">
        The creative digital product
      </h3>
      <p className=" text-boulder font-nunito text-xl mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis
        ridiculus viverra nisi, eget egestas. Sed aliquet eu in risus elit morbi
        at lectus et enim aiondimentum volutpat feugiat gravida tortor, bibendum
        in. Vitae pharetra eu aliquet ut lorem.
      </p>
      <p className=" text-boulder mt-[1.88rem] font-nunito text-[1.5625rem] leading-[200%] ml-6">
        <ol className=" list-decimal">
          <li>Veniam quae. Nostrum facere repellendus minus</li>
          <li>Quod aut aliquam neque reiciendis. magnam</li>
          <li>Repudiandae ipsum repellat repudiandae. </li>
          <li>Voluptate Dolores ut dolor sint occaecation.</li>
        </ol>
      </p>
      <div className="mt-[3.12rem] single-blog-quote py-[4.12rem] px-[6.75rem] rounded-[14.78325rem] flex flex-col items-center gap-3">
        <img src={quoteIcon} alt="" />
        <p className=" text-white text-center font-nunito text-[1.5625rem] italic font-semibold">
          High-end digital experiences. Created at the heart of Manhattan, we
          are a should human team. The driving force of all speeches, we believe
          that creation should be the point around which any strategy revolves.
        </p>
      </div>
      <p className="mt-[1.88rem] text-boulder font-nunito text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis
        ridiculus viverra nisi, feugiat gravida tortor, bibendum in. Vitae
        pharetra eu aliquet ut lorem. <br /> <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis
        ridiculus viverra nisi, eget egestas. Sed aliquet eu in risus elit morbi
        at lectus et enim aiondimentum volutpat feugiat gravida tortor, bibendum
        in. Vitae pharetra eu aliquet ut lorem.
      </p>
      <div className="mt-[1.88rem] py-4 border-t border-pampas border-b">
        <button className="py-2 px-[1.125rem] rounded-[3.5rem] bg-jaguar text-white font-nunito text-sm">
          Design
        </button>
        <button className="py-2 px-[1.125rem] rounded-[3.5rem] bg-gallery text-boulder font-nunito text-sm">
          Technology
        </button>
        <button className="py-2 px-[1.125rem] rounded-[3.5rem] bg-gallery text-boulder font-nunito text-sm">Website</button>
      </div>
      <div>
        <div>
          <img src={singleblog2Photo} alt="" />
        </div>
        <div>
          <h6>Megan Olson</h6>
          <p>Client of Agency</p>
          <p>
            “ Lorem ipsum dolor consectetur adipiscing elitlacus laoreet donec
            adipiscing tristique risus. amet est placerat in egestas sed euismod
            nisi ut lorem. “
          </p>
          <div className="flex items-center gap-10 mt-5">
            <img src={insta} alt="" className="w-[2.113rem] cursor-pointer" />
            <img src={fb} alt="" className="w-[2.113rem] cursor-pointer" />
            <img src={twitter} alt="" className="w-[2.113rem] cursor-pointer" />
            <img
              src={linkedin}
              alt=""
              className="w-[2.113rem] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
