import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { dogsData } from "../../data/dogsData";
import { scrollToTop } from "../ScrollToTop";
("../../ScrollToTop");
import { PetDiv } from "./PetDiv";

export function HomePets() {
  const pets = [...dogsData];

  return (
    <div className="max-w-[1440px] mobile:max-w-[382px] w-full h-[926px] mobile:h-[1518px] flex flex-col overflow-hidden mobile:mx-auto">
      <div className="max-w-[1183px] w-full h-[62px] mx-auto mt-[60px] flex justify-between">
        <div className="w-[357px] mobile:w-[298px] h-[62px] mobile:h-[54px]">
          <span className="font-SFProDisplay text-[16px] mobile:text-[14px]">
            Whats new?
          </span>
          <h3 className="font-SFProDisplay font-bold text-[24px] mobile:text-[20px] text-[#003459]">
            Take A Look At Some Of Our Pets
          </h3>
        </div>
        <div className="w-[155px] h-[44px] border-[1.5px] border-[#003459] rounded-[57px] content-center self-end cursor-pointer mobile:hidden">
          <Link to="/category" onClick={scrollToTop}>
            <div className="flex gap-[8px] items-center justify-center">
              <span className="font-SFProDisplay text-[14px]">View more</span>
              <FaAngleRight className="w-[10px] h-[10px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[1181px] mobile:w-[382px] h-[776px] mobile:h-[1304px] flex flex-wrap gap-[20px] mobile:gap-[12px] mx-auto mt-[28px] mobile:mt-[20px]">
        {pets.map((pet, i) => (
          <PetDiv item={pet} key={i} />
        ))}
      </div>

      <div className="hidden w-[382px] h-[48px] border-[1.5px] border-[#003459] rounded-[57px] content-center cursor-pointer mb-[40px] mobile:block">
        <Link to="/category">
          <div className="flex gap-[8px] items-center justify-center h-[48px]">
            <span className="font-SFProDisplay text-[14px]">View more</span>
            <FaAngleRight className="w-[10px] h-[10px]" />
          </div>
        </Link>
      </div>
    </div>
  );
}
