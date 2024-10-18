import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { petKnowledge } from "../../data/petKnowledge";
import { UsefulPetKnowledgeDiv } from "./UsefulPetKnowledgeDiv";

export function UsefulPetKnowledge() {
  const petsKnowledge = [...petKnowledge];
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < petsKnowledge.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="max-w-[1440px] mobile:max-w-[382px] w-full h-[634px] mobile:h-[546px] flex flex-col mobile:mx-auto mobile:overflow-hidden mobile:mb-[40px]">
      <div className="max-w-[1180px] w-full h-[62px] mx-auto mt-[60px] mobile:mt-[40px] flex justify-between">
        <div className="w-[302px] h-[62px]">
          <span className="font-SFProDisplay text-[16px] mobile:text-[14px]">
            You already know?
          </span>
          <h3 className="font-SFProDisplay font-bold text-[24px] mobile:text-[20px] text-[#003459]">
            Useful Pet Knowledge
          </h3>
        </div>
        <div className="w-[174px] h-[44px] content-center self-end flex gap-[22px]">
          <div
            className="w-[76px] mobile:w-[60px] h-[44px] mobile:h-[30px] border-[1.5px] border-[#003459] rounded-[57px] cursor-pointer flex items-center justify-center"
            onClick={handlePrev}
          >
            <FaAngleLeft className="w-[10px] h-[10px] text-[#003459]" />
          </div>
          <div
            className="w-[76px] mobile:w-[60px] h-[44px] mobile:h-[30px] border-[1.5px] border-[#003459] rounded-[57px] cursor-pointer flex items-center justify-center"
            onClick={handleNext}
          >
            <FaAngleRight className="w-[10px] h-[10px] text-[#003459]" />
          </div>
        </div>
      </div>
      <div className="w-[1180px] h-[424px] flex gap-[20px] mx-auto mt-[28px] mobile:mt-[20px]">
        {petsKnowledge.slice(startIndex, startIndex + 3).map((item, i) => (
          <UsefulPetKnowledgeDiv item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
