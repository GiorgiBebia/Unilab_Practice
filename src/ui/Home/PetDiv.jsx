/* eslint-disable react/prop-types */
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { scrollToTop } from "../ScrollToTop";
("../../ScrollToTop");

export function PetDiv({ item }) {
  return (
    <Link className="flex" to={`/dog/${item.name}`} onClick={scrollToTop}>
      <div className="w-[280px] mobile:w-[185px] h-[378px] mobile:h-[317px] bg-white rounded-[12px]">
        <img
          className="w-[264px] mobile:w-[169px] h-[264px] mobile:h-[169px] rounded-[10px] m-[8px]"
          src={item.img}
          alt={item.name}
        />

        <h2 className="font-SFProDisplay font-bold text-[16px] mobile:text-[14px] mt-[8px] mobile:mt-[4px] mx-[16px] mobile:mx-[12px] mb-[4px]">
          {item.name}
        </h2>

        <div className="flex gap-[4px] ml-[16px] mobile:ml-[12px] items-center mobile:flex-col mobile:items-start">
          <h3 className="font-SFProDisplay text-[12px] text-[#667479]">
            Gene: <span className="font-bold">{item.gender}</span>
          </h3>
          <TbPointFilled className="text-[12px] text-[#667479] mobile:hidden" />
          <h3 className="font-SFProDisplay text-[12px] text-[#667479]">
            Age:{" "}
            <span className="font-bold">
              {item.age < 10 ? `0` : ``}
              {item.age} months
            </span>
          </h3>
        </div>

        <h3 className="font-SFProDisplay text-[14px] mobile:text-[16px] font-bold ml-[16px] mobile:ml-[12px] mt-[4px] mobile:mt-[8px]">
          {item.price.toLocaleString()} VND
        </h3>
      </div>
    </Link>
  );
}
