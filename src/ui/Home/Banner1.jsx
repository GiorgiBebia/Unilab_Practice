import { FaRegCirclePlay } from "react-icons/fa6";

export function Banner1() {
  return (
    <div className="w-[1180px] mobile:w-[382px] h-[378px] mobile:h-[640px] mx-auto bg-[url('/banner1.png')] mobile:bg-[url('/banner1Mobile.png')] flex">
      <div className="w-[416px] mobile:w-[340px] h-[258px] mobile:h-[236px] mt-[64px] mobile:mt-[32px] ml-[692px] mobile:ml-[20px] text-end">
        <h2 className="font-SFProDisplay font-extrabold text-[52px] mobile:text-[36px] text-[#003459] mr-[13px] mobile:mr-[32px]">
          One More Friend
        </h2>
        <h3 className="font-SFProDisplay font-bold text-[36px] mobile:text-[24px] text-[#003459] mr-[13px] mobile:text-start mobile:ml-[15px]">
          Thousands More Fun!
        </h3>
        <p className="w-[394px] mobile:w-[311px] font-SFProDisplay text-[12px] text-[#242B33] mr-[13px] mobile:text-center mobile:ml-[17px] mobile:mt-[12px]">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="w-[344px] h-[48px] flex justify-between mt-[24px] float-end">
          <div className="w-[157px] h-[48px] rounded-[57px] border-[1.5px] border-[#003459] content-center cursor-pointer">
            <div className="flex items-center justify-center gap-[8px]">
              <span className="font-SFProDisplay font-medium text-[16px] text-[#003459]">
                View Intro
              </span>
              <FaRegCirclePlay className="text-[#003459]" />
            </div>
          </div>
          <div className="w-[163px] h-[48px] rounded-[57px] bg-[#003459] flex justify-center items-center font-SFProDisplay font-medium text-[16px] text-white cursor-pointer">
            Explore Now
          </div>
        </div>
      </div>
    </div>
  );
}
