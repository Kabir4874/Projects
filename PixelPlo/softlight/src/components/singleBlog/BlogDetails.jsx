import singleblog2Photo from "../../assets/singleblog2Photo.png";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import EditorJSHTML from "editorjs-html";
const editorJSHTML = EditorJSHTML();
const BlogDetails = ({ content }) => {
  const htmlContent = editorJSHTML.parse(content).join("");
  return (
    <div className="w-[49.25rem] mx-auto">
      <div className="my-8">
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className=" space-y-3 editorjsdiv"
        />
      </div>

      <div className="mt-[1.88rem] space-x-[0.62rem] py-4 border-t border-pampas border-b">
        <button className="py-2 px-[1.125rem] rounded-[3.5rem] bg-jaguar text-white font-nunito text-sm">
          Design
        </button>
        <button className="py-2 px-[1.125rem] rounded-[3.5rem] bg-gallery text-boulder font-nunito text-sm">
          Technology
        </button>
        <button className="py-2 px-[1.125rem] rounded-[3.5rem] bg-gallery text-boulder font-nunito text-sm">
          Website
        </button>
      </div>
      <div className="flex items-center gap-[2.62rem] mt-[3.14rem] py-[2.12rem] px-[2.75rem] bg-jaguar text-white rounded-[0.5rem] border-2 border-jaguar">
        <div className=" shrink-0">
          <img src={singleblog2Photo} alt="" className="w-full rounded-full" />
        </div>
        <div>
          <h6 className=" font-syne text-xl font-medium">Megan Olson</h6>
          <p className="mt-[0.31rem] font-nunito text-sm">Client of Agency</p>
          <p className="mt-[0.81rem] font-nunito text-lg italic">
            “ Lorem ipsum dolor consectetur adipiscing elitlacus laoreet donec
            adipiscing tristique risus. amet est placerat in egestas sed euismod
            nisi ut lorem. “
          </p>
          <div className="flex items-center gap-[1.38rem] mt-[0.81rem]">
            <img
              src={insta}
              alt=""
              className="w-[1.12rem] cursor-pointer svg"
            />
            <img src={fb} alt="" className="w-[1.12rem] cursor-pointer svg" />
            <img
              src={twitter}
              alt=""
              className="w-[1.12rem] cursor-pointer svg"
            />
            <img
              src={linkedin}
              alt=""
              className="w-[1.12rem] cursor-pointer svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
