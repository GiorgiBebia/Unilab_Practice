import { FaAngleRight } from "react-icons/fa6";
import { ourProducts } from "../../data/ourProducts";
import { OurProductDiv } from "./OurProductDiv";

export function OurProducts() {
  const ourProduct = [...ourProducts];

  return (
    <div className="max-w-[1440px] w-full h-[1122px] flex flex-col mobile:hidden">
      <div className="max-w-[1184px] w-full h-[62px] mx-auto mt-[60px] flex justify-between">
        <div className="w-[302px] h-[62px]">
          <span className="font-SFProDisplay text-[16px]">
            Hard to choose right products for your pets?
          </span>
          <h3 className="font-SFProDisplay font-bold text-[24px] text-[#003459]">
            Our Products
          </h3>
        </div>
        <div className="w-[155px] h-[44px] border-[1.5px] border-[#003459] rounded-[57px] content-center self-end cursor-pointer">
          <div className="flex gap-[8px] items-center justify-center">
            <span className="font-SFProDisplay text-[14px] text-[#003459]">
              View more
            </span>
            <FaAngleRight className="w-[10px] h-[10px] text-[#003459]" />
          </div>
        </div>
      </div>
      <div className="w-[1180px] h-[912px] flex flex-wrap gap-[20px] mx-auto mt-[28px]">
        {ourProduct.map((item, i) => (
          <OurProductDiv items={item} key={i} />
        ))}
      </div>
    </div>
  );
}
