import { FaRegCirclePlay } from "react-icons/fa6";

export function Banner2() {
  return (
    <div className="w-[1180px] h-[378px] mx-auto bg-[url('/banner2.png')] flex mobile:hidden">
      <div className="w-[452px] h-[267px] mt-[64px] ml-[72px]">
        <div className="flex gap-[16px] items-center ml-[13px]">
          <h2 className="font-SFProDisplay font-extrabold text-[52px] text-[#003459]">
            Adoption
          </h2>
          <img
            className="w-[42px] h-[38px]"
            src="adoption.png"
            alt="Adoption"
          />
        </div>
        <h3 className="font-SFProDisplay font-bold text-[36px] text-[#003459] ml-[13px]">
          We Need Help. So Do They.
        </h3>
        <p className="font-SFProDisplay text-[12px] text-[#242B33] mt-[8px] ml-[13px]">
          Adopt a pet and give it a home,
          <br /> it will be love you back unconditionally.
        </p>
        <div className="w-[344px] h-[48px] flex justify-between mt-[42px]">
          <div className="w-[163px] h-[48px] rounded-[57px] bg-[#003459] flex justify-center items-center font-SFProDisplay font-medium text-[16px] text-white cursor-pointer">
            Explore Now
          </div>
          <div className="w-[157px] h-[48px] rounded-[57px] border-[1.5px] border-[#003459] content-center cursor-pointer">
            <div className="flex items-center justify-center gap-[8px]">
              <span className="font-SFProDisplay font-medium text-[16px] text-[#003459]">
                View Intro
              </span>
              <FaRegCirclePlay className="text-[#003459]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
