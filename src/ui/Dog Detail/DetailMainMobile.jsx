/* eslint-disable react/prop-types */
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { ChatWithMonito } from "./ChatWithMonito";
import { Information } from "./Information";

export function DetailMainMobile({ item, newLink }) {
  const newName = item.name.split("-");

  const logined = localStorage.getItem("logined") === "true" || false;

  const navigate = useNavigate();

  return (
    <div className="hidden w-[414px] h-[1597px] mobile:block">
      <img
        className="w-[414px] h-[523px] relative object-cover"
        src={item.img}
        alt=""
      />
      <IoIosArrowBack
        className="absolute top-[69.5px] left-[26px] w-[25px] h-[25px] text-white"
        onClick={() => navigate(-1)}
      />
      <AiOutlineInfoCircle className="absolute text-white top-[64px] right-[16px] w-[25px] h-[25px]" />

      <div className="mt-[56px] w-[414px] h-[1018px] rounded-t-[20px] flex flex-col shadow-[0_-4px_10px_rgba(128,128,128,0.5)]">
        <div className="w-[40px] h-[6px] rounded-[10px] bg-[#CCD1D2] mt-[10px] mx-auto"></div>
        <div className="w-[328px] h-[24px] flex justify-between items-center mt-[16px] ml-[16px]">
          <Link className="font-SFProDisplay text-[14px] text-[#667479]" to="/">
            Home
          </Link>
          <FaAngleRight className="w-[10px] h-[10px] text-[#667479]" />
          <Link
            className="font-SFProDisplay text-[14px] text-[#667479]"
            to="/category"
          >
            Dog
          </Link>
          <FaAngleRight className="w-[10px] h-[10px] text-[#667479]" />
          <Link
            className="font-SFProDisplay text-[14px] text-[#667479]"
            to="/category"
          >
            Large Dog
          </Link>
          <FaAngleRight className="w-[10px] h-[10px] text-[#667479]" />
          <Link
            className="font-SFProDisplay text-[14px] text-[#667479]"
            to={`/dog/${newLink}`}
          >
            {newName[1]}
          </Link>
        </div>
        <h2 className="font-SFProDisplay font-bold text-[24px] text-[#00171F] mt-[8px] ml-[16px] mb-[2px]">
          {newName[1]}
        </h2>
        <span className="font-SFProDisplay font-bold text-[20px] ml-[16px] text-[#002A48]">
          {item.price.toLocaleString()} VND
        </span>
        <div className="w-[382px] h-[48px] flex gap-[8px] mt-[16px] mx-auto">
          <Link to="/contact">
            <div className="w-[141px] h-[48px] bg-[#003459] rounded-[57px] text-white font-SFProDisplay font-bold text-[16px] flex items-center justify-center">
              Contact us
            </div>
          </Link>

          {logined ? (
            <Link to={`/chat/${item.name}`}>
              <ChatWithMonito />
            </Link>
          ) : (
            <ChatWithMonito />
          )}
        </div>

        <div className="flex w-[382px] h-[40px] justify-between mt-[56px] items-center mx-auto mb-[17px]">
          <span className="font-SFProDisplay font-bold text-[18px] text-[#00171F]">
            Information
          </span>
          <div className="w-[82px] h-[40px] flex gap-[8px] text-[14px] font-SFProDisplay font-bold items-center justify-center">
            <FiShare2 className="text-[#002A48]" />
            <span className="text-[#002A48]">Share</span>
          </div>
        </div>

        <Information first="SKU" second={`#${item.sku}`} />
        <Information first="Gender" second={`${item.gender}`} />
        <Information first="Age" second={`${item.age} Months`} />
        <Information first="Size" second={`${item.breed}`} />
        <Information first="Color" second={`${item.color}`} />
        <Information first="Vaccinated" second={`${item.vaccinated}`} />
        <Information first="Dewormed" second={`${item.dewormed}`} />
        <Information first="Cert" second={`${item.cert}`} />
        <Information first="Microchip" second={`${item.microchip}`} />
        <Information first="Location" second={`${item.location}`} />
        <Information first="Published Date" second={`${item.published}`} />

        <div className="w-[382px] h-[102px] border-b border-b-[#EBEEEF] flex  items-center mx-auto">
          <h3 className="w-[206px] h-[26px] font-SFProDisplay text-[14px] text-[#667479] content-center">
            Additional Information
          </h3>
          <h3 className="w-[199px] h-[80px] font-SFProDisplay text-[14px] text-[#667479] content-center">
            : {item.additionalInformation1} <br />
            <span className="ml-[7px]">{item.additionalInformation2}</span>
            <br />
            <span className="ml-[7px]">{item.additionalInformation3}</span>
            <br />
            <span className="ml-[7px]">{item.additionalInformation4}</span>
          </h3>
        </div>

        <div className="w-[382px] h-[96px] bg-[#FCEED5] mt-[26px] mx-auto rounded-[10px]">
          <div className="w-[239px] h-[30px] mt-[14px] ml-[14px] flex gap-[9px] items-center">
            <img
              className="w-[24px] h-[24px]"
              src="petsGuarantee.png"
              alt="petsGuarantee"
            />
            <span className="font-SFProDisplay font-bold text-[14px] text-[#002A48]">
              100% health guarantee for pets
            </span>
          </div>
          <div className="w-[270px] h-[30px] mt-[8px] ml-[14px] flex gap-[9px] items-center">
            <img
              className="w-[24px] h-[24px]"
              src="petIdentification.png"
              alt="petIdentification"
            />
            <span className="font-SFProDisplay font-bold text-[14px] text-[#002A48]">
              100% guarantee of pet identification
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
