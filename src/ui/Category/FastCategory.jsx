import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { scrollToTop } from "../ScrollToTop";
("../../ScrollToTop");

export function FastCategory() {
  return (
    <div className="w-[99px] h-[24px] mt-[37px] mobile:mt-[23.5px] ml-[130px] mobile:ml-[17px] flex justify-between items-center">
      <Link
        className="font-SFProDisplay text-[14px] text-[#667479]"
        to="/"
        onClick={scrollToTop}
      >
        Home
      </Link>
      <FaAngleRight className="w-[10px] h-[10px] text-[#667479]" />
      <Link
        className="font-SFProDisplay text-[14px] text-[#667479]"
        to="/category"
        onClick={scrollToTop}
      >
        Dog
      </Link>
    </div>
  );
}
