import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { scrollToTop } from "./ScrollToTop";
("../ScrollToTop");

export function Footer() {
  return (
    <div className="max-w-[1440px] mobile:max-w-[414px] w-full h-[440px] mobile:h-[598px] bg-[#FCEED5] rounded-t-[20px] flex flex-col">
      <div className="w-[1180px] mobile:w-[382px] h-[136px] mobile:h-[244px] rounded-[16px] bg-[#003459] mt-[80px] mobile:mt-[40px] mx-auto flex gap-[20px] mobile:gap-[16px] pt-[32px] mobile:pt-[16px] pl-[32px] mobile:pl-[16px] mobile:flex-col">
        <h3 className="w-[389px] mobile:w-[350px] h-[72px] mobile:h-[64px] font-SFProDisplay font-bold text-white text-[24px] mobile:text-[20px]">
          Register Now So You Don&apos;t Miss Our Programs
        </h3>
        <div className="w-[707px] mobile:w-[350px] h-[72px] mobile:h-[132px] bg-white rounded-[8px] mobile:rounded-[14px] flex gap-[8px] mobile:gap-[12px] justify-center items-center mobile:flex-col">
          <input
            className="w-[508px] mobile:w-[326px] h-[48px] border border-[#99A2A5] rounded-[8px] pl-[28px]"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
          <button className="w-[163px] mobile:w-[326px] h-[48px] bg-[#003459] rounded-[8px] font-SFProDisplay text-[16px] text-white">
            Subscibe Now
          </button>
        </div>
      </div>
      <div className="max-w-[1182px] mobile:max-w-[382px] w-full h-[24px] mobile:h-[64px] mt-[40px] mx-auto flex justify-between mobile:flex-col mobile:items-center">
        <div className="w-[404px] mobile:w-[382px] h-[24px] flex justify-between text-[16px] text-[#00171F] font-SFProDisplay">
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/category" onClick={scrollToTop}>
            Categort
          </Link>
          <Link to="/" onClick={scrollToTop}>
            About
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Contact
          </Link>
        </div>
        <div className="w-[216px] mobile:w-[200px] h-[24px] mobile:h-[20px] flex justify-between mr-[16px] mobile:mr-0 mobile:mt-[20px]">
          <BsFacebook className="w-[24px] mobile:w-[20px] h-[24px] mobile:h-[20px]" />
          <FaTwitter className="w-[24px] mobile:w-[20px] h-[24px] mobile:h-[20px]" />
          <FaInstagram className="w-[24px] mobile:w-[20px] h-[24px] mobile:h-[20px]" />
          <FaYoutube className="w-[24px] mobile:w-[20px] h-[24px] mobile:h-[20px]" />
        </div>
      </div>
      <div className="max-w-[1180px] mobile:max-w-[382px] w-full h-[1px] bg-[#CCD1D2] mx-auto my-[40px] mobile:mb-[36px]"></div>
      <div className="max-w-[1180px] w-full h-[40px] flex justify-between mx-auto items-center mobile:hidden">
        <span className="font-SFProDisplay text-[14px] text-[#667479]">
          © 2024 Monito. All rights reserved.
        </span>
        <Link to="/" onClick={scrollToTop}>
          <img src="logo.png" alt="Logo" />
        </Link>
        <span className="font-SFProDisplay text-[14px] text-[#667479]">
          Terms of Service Privacy Policy
        </span>
      </div>

      <div className="hidden w-[178px] h-[114px] mobile:flex justify-between mx-auto items-center flex-col">
        <Link to="/" onClick={scrollToTop}>
          <img src="logo.png" alt="Logo" />
        </Link>
        <span className="font-SFProDisplay text-[12px] text-[#667479]">
          Terms of Service <span className="ml-[16px]"> Privacy Policy</span>
        </span>
        <span className="font-SFProDisplay text-[10px] text-[#667479]">
          © 2024 Monito. All rights reserved.
        </span>
      </div>
    </div>
  );
}
