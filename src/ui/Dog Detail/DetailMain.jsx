/* eslint-disable react/prop-types */
import { BsFacebook, BsChatLeftDots } from "react-icons/bs";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAngleRight,
} from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { scrollToTop } from "../ScrollToTop";
("../ScrollToTop");
import { Info } from "./Info";

export function DetailMain({ item, newLink }) {
  const newName = item.name.split("-");

  return (
    <div className="w-[1180px] h-[870px]  mt-[48px] mx-auto flex gap-[34px] px-[20px] py-[22px] border border-[#EBEEEF] rounded-[20px] mobile:hidden">
      <div className="w-[560px] h-[590px]">
        <img
          className="w-[560px] h-[476px] rounded-[10px]"
          src={item.img}
          alt={newName}
        />
        <div className="w-[560px] h-[48px] bg-[#FCEED5] rounded-[10px] mt-[17px] flex gap-[27px] items-center justify-center">
          <div className="w-[239px] h-[30px] flex gap-[9px] items-center justify-center">
            <img src="petsGuarantee.png" alt="100% health guarantee for pets" />
            <span className="font-SFProDisplay font-bold text-[14px] text-[#002A48]">
              100% health guarantee for pets
            </span>
          </div>
          <div className="w-[270px] h-[30px] flex gap-[9px] items-center justify-center">
            <img
              src="petIdentification.png"
              alt="100% guarantee of pet identification"
            />
            <span className="font-SFProDisplay font-bold text-[14px] text-[#002A48]">
              100% guarantee of pet identification
            </span>
          </div>
        </div>

        <div className="w-[240px] h-[32px] mt-[17px] flex gap-[21px]">
          <div className="w-[70px] h-[20px] flex gap-[8px] text-[14px] font-SFProDisplay font-bold items-center justify-center">
            <FiShare2 className="text-[#002A48]" />
            <span className="text-[#002A48]">Share:</span>
          </div>
          <div className="w-[129px] h-[18.77px] flex justify-between mr-[16px]">
            <BsFacebook className="w-[19px] h-[19px] text-[#99A2A5]" />
            <FaTwitter className="w-[19px] h-[19px] text-[#99A2A5]" />
            <FaInstagram className="w-[19px] h-[19px] text-[#99A2A5]" />
            <FaYoutube className="w-[19px] h-[19px] text-[#99A2A5]" />
          </div>
        </div>
      </div>
      <div className="w-[517px] h-[782px]">
        <div className="w-[328px] h-[24px] flex justify-between items-center mb-[18px]">
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
          <FaAngleRight className="w-[10px] h-[10px] text-[#667479]" />
          <Link
            className="font-SFProDisplay text-[14px] text-[#667479]"
            to="/category"
            onClick={scrollToTop}
          >
            Large Dog
          </Link>
          <FaAngleRight className="w-[10px] h-[10px] text-[#667479]" />
          <Link
            className="font-SFProDisplay text-[14px] text-[#667479]"
            to={`/dog/${newLink}`}
            onClick={scrollToTop}
          >
            {newName[1]}
          </Link>
        </div>
        <span className="font-SFProDisplay text-[14px] text-[#99A2A5]">
          SKU #{item.sku}{" "}
        </span>
        <h2 className="font-SFProDisplay font-bold text-[24px] text-[#00171F] mt-[2px] mb-[6px]">
          {newName[1]}
        </h2>
        <span className="font-SFProDisplay font-bold text-[20px] text-[#002A48]">
          {item.price.toLocaleString()} VND
        </span>
        <div className="w-[371px] h-[44px] flex justify-between mt-[30px] mb-[26px]">
          <Link to="/contact">
            <div className="w-[141px] h-[44px] bg-[#003459] rounded-[57px] text-white font-SFProDisplay font-bold text-[16px] flex items-center justify-center">
              Contact us
            </div>
          </Link>

          <div className="w-[212px] h-[44px] border-[2px] border-[#002A48] rounded-[57px] flex gap-[10px] items-center justify-center">
            <BsChatLeftDots className="text-[#002A48] w-[18px] h-[18px]" />
            <span className="font-SFProDisplay font-bold text-[16px] text-[#002A48]">
              Chat with Monito
            </span>
          </div>
        </div>

        <Info first="SKU" second={`#${item.sku}`} />
        <Info first="Gender" second={`${item.gender}`} />
        <Info first="Age" second={`${item.age} Months`} />
        <Info first="Size" second={`${item.breed}`} />
        <Info first="Color" second={`${item.color}`} />
        <Info first="Vaccinated" second={`${item.vaccinated}`} />
        <Info first="Dewormed" second={`${item.dewormed}`} />
        <Info first="Cert" second={`${item.cert}`} />
        <Info first="Microchip" second={`${item.microchip}`} />
        <Info first="Location" second={`${item.location}`} />
        <Info first="Published Date" second={`${item.published}`} />

        <div className="w-[517px] h-[102px] border-b border-b-[#EBEEEF] flex  items-center">
          <h3 className="w-[206px] h-[26px] ml-[11px] font-SFProDisplay text-[14px] text-[#667479] content-center">
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
      </div>
    </div>
  );
}
