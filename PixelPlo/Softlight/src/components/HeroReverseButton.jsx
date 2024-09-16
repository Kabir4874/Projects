import React from "react";

const HeroReverseButton = ({ text }) => {
  return (
    <button className=" text-white font-nunito text-[0.875rem] font-bold flex items-center gap-[0.38rem] py-[0.5625rem] px-[1.5625rem] rounded-[2.5rem] border group transition-all duration-300 hover:border-black hover:bg-white hover:text-black">
      {text}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.4682 1.32519C15.8685 0.809817 16.6472 0.809818 17.0476 1.32519L18.0358 2.59736C18.3463 2.99703 18.9064 3.10174 19.3403 2.84121L20.7214 2.01194C21.2809 1.676 22.007 1.95731 22.1942 2.5825L22.6561 4.12576C22.8013 4.6106 23.2858 4.91058 23.7845 4.82438L25.3718 4.55002C26.0149 4.43887 26.5904 4.9635 26.5391 5.61408L26.4123 7.22C26.3725 7.72453 26.7159 8.17926 27.2121 8.27904L28.7914 8.59663C29.4312 8.7253 29.7783 9.42238 29.4954 10.0105L28.7971 11.4622C28.5777 11.9183 28.7337 12.4663 29.1603 12.7386L30.5182 13.6053C31.0683 13.9564 31.1402 14.7318 30.6639 15.178L29.4884 16.2794C29.1191 16.6254 29.0665 17.1928 29.3659 17.6008L30.3191 18.8995C30.7052 19.4256 30.4921 20.1746 29.8868 20.4186L28.3928 21.021C27.9234 21.2102 27.6694 21.7203 27.8013 22.209L28.2209 23.7643C28.3909 24.3943 27.9216 25.0158 27.2691 25.0247L25.6583 25.0467C25.1523 25.0536 24.7312 25.4375 24.6776 25.9407L24.5071 27.5426C24.438 28.1915 23.7759 28.6015 23.1642 28.374L21.6543 27.8127C21.1799 27.6363 20.6486 27.8422 20.4168 28.2921L19.6791 29.7242C19.3803 30.3043 18.6148 30.4474 18.1266 30.0144L16.9214 28.9455C16.5428 28.6097 15.973 28.6097 15.5943 28.9455L14.3891 30.0144C13.9009 30.4474 13.1354 30.3043 12.8366 29.7242L12.0989 28.2921C11.8672 27.8422 11.3358 27.6363 10.8615 27.8127L9.35152 28.374C8.73983 28.6015 8.07774 28.1915 8.00866 27.5426L7.83814 25.9407C7.78457 25.4375 7.36346 25.0536 6.85741 25.0467L5.24665 25.0247C4.5941 25.0158 4.12482 24.3943 4.29483 23.7643L4.71448 22.209C4.84632 21.7203 4.59233 21.2102 4.12295 21.021L2.6289 20.4186C2.02364 20.1746 1.81053 19.4256 2.19666 18.8995L3.14982 17.6008C3.44927 17.1928 3.39669 16.6254 3.02737 16.2794L1.85181 15.178C1.37558 14.7318 1.44743 13.9564 1.99755 13.6053L3.35547 12.7386C3.78209 12.4663 3.93803 11.9183 3.71865 11.4622L3.02035 10.0105C2.73746 9.42238 3.08457 8.7253 3.72436 8.59663L5.30366 8.27904C5.79983 8.17926 6.14323 7.72453 6.10341 7.22L5.97669 5.61408C5.92535 4.9635 6.50083 4.43887 7.1439 4.55002L8.73128 4.82438C9.22999 4.91058 9.71447 4.6106 9.8596 4.12576L10.3216 2.5825C10.5087 1.95731 11.2348 1.676 11.7943 2.01194L13.1754 2.84121C13.6093 3.10174 14.1694 2.99703 14.4799 2.59736L15.4682 1.32519Z"
          fill="white"
          className="transition-all duration-300 fill-current text-white group-hover:text-black"
        />
        <path
          d="M21.1815 15.3746C21.272 15.466 21.3228 15.5895 21.3228 15.7182C21.3228 15.8469 21.272 15.9703 21.1815 16.0618L16.8414 20.4018C16.7489 20.4903 16.6259 20.5399 16.4979 20.5405C16.4339 20.5402 16.3705 20.5279 16.311 20.5043C16.2232 20.4674 16.1483 20.4053 16.0958 20.326C16.0432 20.2466 16.0153 20.1534 16.0156 20.0582V16.2004H11.6756C11.5477 16.2004 11.425 16.1496 11.3346 16.0592C11.2442 15.9687 11.1934 15.8461 11.1934 15.7182C11.1934 15.5903 11.2442 15.4676 11.3346 15.3772C11.425 15.2868 11.5477 15.236 11.6756 15.236H16.0156V11.3781C16.0153 11.2829 16.0432 11.1898 16.0958 11.1104C16.1483 11.031 16.2232 10.969 16.311 10.9321C16.4001 10.8973 16.4972 10.8885 16.591 10.9067C16.6849 10.9248 16.7717 10.9691 16.8414 11.0345L21.1815 15.3746Z"
          fill="#08364A"
          className="transition-all duration-300 fill-current text-black group-hover:text-white"
        />
      </svg>
    </button>
  );
};

export default HeroReverseButton;
