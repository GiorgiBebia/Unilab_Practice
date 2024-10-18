import { FaRegCirclePlay } from "react-icons/fa6";

export function Banner3() {
  return (
    <div className="w-[1180px] mobile:w-[382px] h-[378px] mobile:h-[441px] mx-auto bg-[url('/banner3.png')] mobile:bg-[url('/banner3Mobile.png')] flex mt-[9px] mobile:mt-[14px]">
      <div className="w-[416px] mobile:w-[340px] h-[258px] mobile:h-[244px] mt-[64px] mobile:mt-[28px] ml-[692px] mobile:ml-[16px] text-end mobile:text-start">
        <h2 className="font-SFProDisplay font-extrabold text-[52px] mobile:text-[42px] text-white mobile:text-[#002A48] mr-[13px]">
          One More Friend
        </h2>
        <h3 className="font-SFProDisplay font-bold text-[36px] mobile:text-[26px] text-white mobile:text-[#002A48] mr-[13px]">
          Thousands More Fun!
        </h3>
        <p className="font-SFProDisplay text-[12px] text-[#CCD1D2] mobile:text-[#242B33] mr-[13px] w-[394px] mobile:w-[338px] mobile:mt-[12px]">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="w-[344px] h-[48px] flex justify-between mt-[24px] float-end">
          <div className="w-[157px] h-[48px] rounded-[57px] border-[1.5px] border-[#FDFDFD] mobile:border-[#003459] content-center cursor-pointer">
            <div className="flex items-center justify-center gap-[8px]">
              <span className="font-SFProDisplay font-medium text-[16px] text-[#FDFDFD] mobile:text-[#003459]">
                View Intro
              </span>
              <FaRegCirclePlay className="text-[#FDFDFD] mobile:text-[#003459]" />
            </div>
          </div>
          <div className="w-[163px] h-[48px] rounded-[57px] bg-[#FDFDFD] mobile:bg-[#003459] flex justify-center items-center font-SFProDisplay font-medium text-[16px] text-[#00171F] mobile:text-[#FDFDFD] cursor-pointer">
            Explore Now
          </div>
        </div>
      </div>
    </div>
  );
}
