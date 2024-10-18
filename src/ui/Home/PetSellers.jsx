import { FaAngleRight } from "react-icons/fa6";

export function PetSellers() {
  return (
    <div className="max-w-[1438px] w-full h-[251px] flex flex-col mobile:hidden">
      <div className="max-w-[1180px] w-full h-[171px] mx-auto">
        <div className="max-w-[1178px] w-full h-[44px] mx-auto mt-[40px] flex justify-between">
          <div className="w-[252px] h-[36px] flex gap-[8px] items-baseline">
            <span className="font-SFProDisplay text-[16px]">
              Proud to be part of
            </span>
            <h3 className="font-SFProDisplay font-bold text-[24px] text-[#003459]">
              Pet Sellers
            </h3>
          </div>
          <div className="w-[209px] h-[44px] border-[1.5px] border-[#003459] rounded-[57px] content-center cursor-pointer">
            <div className="flex gap-[8px] items-center justify-center">
              <span className="font-SFProDisplay text-[14px] text-[#003459]">
                View all our sellers
              </span>
              <FaAngleRight className="w-[10px] h-[10px] text-[#003459]" />
            </div>
          </div>
        </div>
        <div className="max-w-[1180px] w-full h-[112px] mt-[15px] flex justify-between items-center">
          <img className="w-[88px] h-[66px]" src="sheba.png" alt="Sheba" />
          <img
            className="w-[114px] h-[114px]"
            src="whiskas.png"
            alt="Whiskas"
          />
          <img className="w-[104px] h-[46px]" src="bakers.png" alt="Bakers" />
          <img className="w-[92px] h-[64px]" src="felix.png" alt="Felix" />
          <img className="w-[92px] h-[92px]" src="goodBoy.png" alt="Good Boy" />
          <img
            className="w-[130px] h-[56px]"
            src="butchers.png"
            alt="Butcher's"
          />
          <img
            className="w-[116px] h-[72px]"
            src="pedigree.png"
            alt="Pedigree"
          />
        </div>
      </div>
    </div>
  );
}
