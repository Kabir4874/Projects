import mailIcon from "../../assets/mailIcon.png";
import callIcon from "../../assets/callIcon.png";

const ContactForm = () => {
  return (
    <div className="w-[75rem] mx-auto mt-[6.23rem]">
      <div className="flex items-start gap-[3.12rem]">
        {/* left side  */}
        <div>
          <h3 className=" text-jaguar font-syne text-[2.5rem] font-bold">
            Let's <span className=" bg-tarawera text-white px-2">Talk</span>
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
          <div className="flex mt-5 items-center gap-[2.56rem]">
            <a
              href="https://www.instagram.com/pixelplo?igsh=MXB6amJvMzJvNjdxag=="
              className="group"
              target="_blank"
            >
              <svg
                width="2.113rem"
                height="2.113rem"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.637 2.08206C14.6288 2.08491 15.5791 2.46529 16.2804 3.14013C16.9817 3.81496 17.377 4.72942 17.3799 5.68378V12.8865C17.377 13.8408 16.9817 14.7553 16.2804 15.4301C15.5791 16.1049 14.6288 16.4853 13.637 16.4882H6.15196C5.16019 16.4853 4.20988 16.1049 3.50859 15.4301C2.80729 14.7553 2.412 13.8408 2.40904 12.8865V5.68378C2.412 4.72942 2.80729 3.81496 3.50859 3.14013C4.20988 2.46529 5.16019 2.08491 6.15196 2.08206H13.637ZM13.637 0.641602H6.15196C3.26998 0.641602 0.912109 2.91052 0.912109 5.68378V12.8865C0.912109 15.6597 3.26998 17.9286 6.15196 17.9286H13.637C16.519 17.9286 18.8769 15.6597 18.8769 12.8865V5.68378C18.8769 2.91052 16.519 0.641602 13.637 0.641602Z"
                  fill="#030211"
                  className=" group-hover:fill-instagram-mid transition-all duration-300"
                />
                <path
                  d="M14.7598 5.68432C14.5378 5.68432 14.3207 5.62095 14.136 5.50223C13.9514 5.38351 13.8075 5.21477 13.7225 5.01734C13.6375 4.81992 13.6153 4.60268 13.6586 4.39309C13.7019 4.18351 13.8089 3.99099 13.9659 3.83989C14.1229 3.68879 14.323 3.58589 14.5408 3.5442C14.7586 3.50251 14.9843 3.52391 15.1895 3.60568C15.3947 3.68746 15.57 3.82594 15.6934 4.00362C15.8168 4.18129 15.8826 4.39019 15.8826 4.60388C15.8829 4.74585 15.8541 4.88648 15.7978 5.0177C15.7415 5.14893 15.6588 5.26816 15.5545 5.36854C15.4501 5.46893 15.3262 5.54851 15.1899 5.60269C15.0535 5.65688 14.9074 5.68462 14.7598 5.68432ZM9.89451 6.40435C10.4867 6.40435 11.0656 6.57334 11.558 6.88994C12.0504 7.20654 12.4342 7.65654 12.6608 8.18303C12.8875 8.70952 12.9468 9.28885 12.8312 9.84777C12.7157 10.4067 12.4305 10.9201 12.0118 11.323C11.593 11.726 11.0595 12.0004 10.4787 12.1116C9.89783 12.2228 9.29579 12.1657 8.74866 11.9476C8.20153 11.7295 7.73389 11.3602 7.40487 10.8864C7.07586 10.4126 6.90025 9.85552 6.90025 9.28565C6.9011 8.52174 7.21684 7.78934 7.77819 7.24917C8.33953 6.709 9.10064 6.40517 9.89451 6.40435ZM9.89451 4.9639C9.00624 4.9639 8.13791 5.21736 7.39934 5.69224C6.66077 6.16712 6.08512 6.84209 5.74519 7.63179C5.40527 8.42149 5.31633 9.29045 5.48962 10.1288C5.66291 10.9671 6.09066 11.7372 6.71876 12.3416C7.34686 12.946 8.14712 13.3576 9.01832 13.5244C9.88953 13.6911 10.7926 13.6055 11.6132 13.2784C12.4339 12.9513 13.1353 12.3974 13.6288 11.6867C14.1223 10.976 14.3857 10.1404 14.3857 9.28565C14.3857 8.13945 13.9125 7.0402 13.0703 6.22971C12.228 5.41922 11.0856 4.9639 9.89451 4.9639Z"
                  fill="#030211"
                  className=" group-hover:fill-instagram-mid transition-all duration-300"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61552117013226"
              className="group"
              target="_blank"
            >
              <svg
                width="2.113rem"
                height="2.113rem"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.4404 9.33738C19.4404 4.53637 15.2844 0.643555 10.1587 0.643555C5.03302 0.643555 0.876953 4.53637 0.876953 9.33738C0.876953 13.6765 4.27059 17.2732 8.70843 17.926V11.8512H6.35111V9.33738H8.70843V7.42202C8.70843 5.24352 10.0945 4.03919 12.2144 4.03919C13.23 4.03919 14.2924 4.20919 14.2924 4.20919V6.34888H13.1214C11.9691 6.34888 11.6086 7.01877 11.6086 7.70729V9.33738H14.1826L13.7715 11.8512H11.609V17.9268C16.0468 17.2744 19.4404 13.6777 19.4404 9.33738Z"
                  fill="#030211"
                  className=" group-hover:fill-facebook-light transition-all duration-300"
                />
              </svg>
            </a>
            <a href="#" className="group" target="_blank">
              <svg
                width="2.113rem"
                height="2.113rem"
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7699 1.99992C17.1199 2.28217 16.4321 2.46812 15.7283 2.5519C16.4679 2.11911 17.0241 1.43155 17.2926 0.618161C16.5933 1.02677 15.8296 1.31347 15.034 1.46598C14.699 1.11514 14.2961 0.836033 13.8498 0.645632C13.4035 0.455231 12.9231 0.357508 12.4378 0.358405C10.4731 0.358405 8.88313 1.92416 8.88313 3.85429C8.88174 4.12277 8.91253 4.39044 8.97483 4.6516C7.56598 4.5856 6.18642 4.22646 4.92442 3.59715C3.66243 2.96785 2.54577 2.08223 1.64591 0.996972C1.33022 1.52879 1.16326 2.13559 1.16249 2.75394C1.16249 3.96613 1.79538 5.03763 2.75103 5.66537C2.18483 5.65194 1.63024 5.50219 1.13433 5.22884V5.27213C1.13433 6.96776 2.36184 8.37838 3.98647 8.69947C3.68096 8.78085 3.36614 8.82209 3.04996 8.82213C2.82561 8.82252 2.60176 8.80077 2.38169 8.75719C2.83334 10.1462 4.14785 11.1563 5.70498 11.1852C4.4397 12.1596 2.88628 12.6863 1.28885 12.6824C1.0053 12.682 0.722021 12.6651 0.44043 12.6319C2.06549 13.6688 3.9545 14.2173 5.88261 14.2121C12.4303 14.2121 16.0074 8.88346 16.0074 4.26197C16.0074 4.11044 16.0034 3.95892 15.9962 3.811C16.6905 3.31748 17.2911 2.70419 17.7699 1.99992Z"
                  fill="#030211"
                  className=" group-hover:fill-twitter-light transition-all duration-300"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/pixelplo/"
              className="group"
              target="_blank"
            >
              <svg
                width="2.113rem"
                height="2.113rem"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9201 0.507812H2.26951C1.46897 0.507812 0.769531 1.08382 0.769531 1.87495V16.5581C0.769531 17.3535 1.46897 18.0624 2.26951 18.0624H16.9158C17.7206 18.0624 18.3241 17.3488 18.3241 16.5581V1.87495C18.3288 1.08382 17.7206 0.507812 16.9201 0.507812ZM6.21105 15.1404H3.6962V7.32117H6.21105V15.1404ZM5.04062 6.13232H5.02259C4.21775 6.13232 3.6966 5.5332 3.6966 4.78321C3.6966 4.01951 4.23146 3.43449 5.05433 3.43449C5.8772 3.43449 6.38072 4.0152 6.39874 4.78321C6.39835 5.5332 5.8772 6.13232 5.04062 6.13232ZM15.4021 15.1404H12.8873V10.865C12.8873 9.84072 12.5213 9.14089 11.6114 9.14089C10.9163 9.14089 10.5049 9.6111 10.3219 10.0692C10.2533 10.2337 10.2349 10.4579 10.2349 10.6867V15.1404H7.72004V7.32117H10.2349V8.40932C10.6009 7.88817 11.1726 7.13818 12.5029 7.13818C14.1537 7.13818 15.4025 8.22633 15.4025 10.5723L15.4021 15.1404Z"
                  fill="#030211"
                  className=" group-hover:fill-linkedin-dark transition-all duration-300"
                />
              </svg>
            </a>
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
            <button className="mt-10 py-4 px-8 rounded-[2.5rem] bg-jaguar text-white font-nunito text-sm font-bold hover:bg-white hover:text-jaguar hover:border hover:border-jaguar transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
