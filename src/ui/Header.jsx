/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

export function Header({
  languageEng = true,
  setLanguageEng,
  showLanguage = false,
  setShowLanguage,
}) {
  const [showAccount, setShowAccount] = useState(false);
  const [enteredAccount, setEnteredAccount] = useState(
    localStorage.getItem("logined") || false
  );

  const [burger, setBurger] = useState(false);

  const name = localStorage.getItem("name");

  const divRef = useRef(null);
  const joinCommunityRef = useRef(null);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    const logined = localStorage.getItem("logined");
    setEnteredAccount(logined === "true");

    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowLanguage(false);
      }
      if (
        accountDropdownRef.current &&
        accountDropdownRef.current.contains(event.target)
      ) {
        return;
      }
      if (
        joinCommunityRef.current &&
        !joinCommunityRef.current.contains(event.target)
      ) {
        setShowAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleChangeLang() {
    setLanguageEng((val) => !val);
    setShowLanguage((val) => !val);

    if (burger) setBurger(false);
  }

  const navigate = useNavigate();

  function handleJoinCommunity() {
    if (!enteredAccount) {
      navigate("/login");
    } else {
      setShowAccount((prev) => !prev);
    }
  }

  function handleLogOut() {
    localStorage.setItem("logined", false);
    setEnteredAccount(false);
    setShowAccount(false);
    setBurger(false);

    localStorage.clear();
  }

  function handleBurger() {
    setBurger((val) => !val);
  }

  return (
    <div className="w-[1180px] mobile:w-[414px] h-[44px] mobile:h-[104px] flex justify-between mt-[28px] mobile:mt-0 mx-[130px] mobile:mx-0">
      <div className="w-[443px] h-[40px] flex justify-between items-center mobile:hidden">
        <Link to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
        <Link
          className="font-SFProDisplay font-bold text-[16px] text-[#003459]"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-SFProDisplay font-bold text-[16px] text-[#003459]"
          to="/category"
        >
          Category
        </Link>
        <Link
          className="font-SFProDisplay font-bold text-[16px] text-[#003459]"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="w-[332px] h-[44px] flex justify-between items-center mobile:hidden">
        <div
          ref={joinCommunityRef}
          className="w-[214px] h-[44px] bg-[#003459] rounded-[57px] content-center text-center cursor-pointer"
          onClick={handleJoinCommunity}
        >
          <span className="font-SFProDisplay font-bold text-white text-[16px]">
            {enteredAccount ? `Hello, ${name}` : `Join the community`}
          </span>
        </div>
        <div className="w-[88px] h-[24px] flex justify-between items-center">
          <img
            className={`w-[16px] h-[16px] ${languageEng ? `block` : `hidden`}`}
            src="english.png"
            alt="English"
          />
          <span
            className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
              languageEng ? `block` : `hidden`
            }`}
          >
            ENG
          </span>
          <img
            className={`w-[16px] h-[16px] ${languageEng ? `hidden` : `block`}`}
            src="georgian.png"
            alt="Georgian"
          />
          <span
            className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
              languageEng ? `hidden` : `block`
            }`}
          >
            GEO
          </span>
          <RiArrowDropDownLine
            className="w-[25px] h-[25px] cursor-pointer"
            onClick={() => setShowLanguage(true)}
          />
          {showLanguage && (
            <div
              className="absolute w-[56px] h-[23px] top-[65px] flex justify-between items-center cursor-pointer"
              onClick={handleChangeLang}
              ref={divRef}
            >
              <img
                className={`w-[16px] h-[16px] ${
                  languageEng ? `hidden` : `block`
                }`}
                src="english.png"
                alt="English"
              />
              <span
                className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
                  languageEng ? `hidden` : `block`
                }`}
              >
                ENG
              </span>
              <img
                className={`w-[16px] h-[16px] ${
                  languageEng ? `block` : `hidden`
                }`}
                src="georgian.png"
                alt="Georgian"
              />
              <span
                className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
                  languageEng ? `block` : `hidden`
                }`}
              >
                GEO
              </span>
            </div>
          )}
          {showAccount && (
            <div className="absolute w-[272px] h-[171px] bg-white top-[85px] left-[949px] flex flex-col justify-between pl-[17px] py-[10px] rounded-[10px] shadow-2xl">
              <h3 className="font-notoSans text-[16px] text-[#003459]">
                Hello {name}
              </h3>
              <div className="w-[239px] h-[1px] bg-[#003459]"></div>
              <div className="flex gap-[8px] items-center">
                <FiUser />
                <span className="font-notoSans text-[12px] text-[#003459]">
                  Profile
                </span>
              </div>
              <div
                className="flex gap-[8px] items-center cursor-pointer"
                onClick={handleLogOut}
                ref={accountDropdownRef}
              >
                <LuLogOut />
                <span className="font-notoSans text-[12px] text-[#003459]">
                  Log Out
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden mobile:flex w-[414px] h-[57px] mt-[47px] justify-between items-center">
        <Link className="ml-[10px]" to="/">
          <img src="logo.png" alt="Logo" />
        </Link>
        <RxHamburgerMenu
          className="w-[32px] h-[32px] text-[#00171F] mr-[11.5px]"
          onClick={handleBurger}
        />
      </div>
      {burger && (
        <div className="fixed inset-0 bg-[rgba(18,18,18,0.6)]">
          <div className="w-[380px] h-[468px] absolute top-[53px] left-[17px] bg-white rounded-[16px]">
            <MdClose
              className="w-[32px] h-[32px] mt-[21px] ml-[13px]"
              onClick={() => setBurger(false)}
            />
            <div className="w-[214px] h-[256px] mx-auto flex flex-col items-center justify-between">
              <Link
                className="font-SFProDisplay font-bold text-[16px] text-[#003459]"
                to="/"
                onClick={() => setBurger(false)}
              >
                Home
              </Link>
              <Link
                className="font-SFProDisplay font-bold text-[16px] text-[#003459]"
                to="/category"
                onClick={() => setBurger(false)}
              >
                Category
              </Link>
              <Link
                className="font-SFProDisplay font-bold text-[16px] text-[#003459]"
                to="/contact"
                onClick={() => setBurger(false)}
              >
                Contact
              </Link>

              <div
                ref={joinCommunityRef}
                className="w-[214px] h-[44px] bg-[#003459] rounded-[57px] content-center text-center cursor-pointer"
                onClick={handleJoinCommunity}
              >
                <span className="font-SFProDisplay font-bold text-white text-[16px]">
                  {enteredAccount ? `Hello, ${name}` : `Join the community`}
                </span>
              </div>

              <div className="w-[88px] h-[24px] flex justify-between items-center">
                <img
                  className={`w-[16px] h-[16px] ${
                    languageEng ? `block` : `hidden`
                  }`}
                  src="english.png"
                  alt="English"
                />
                <span
                  className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
                    languageEng ? `block` : `hidden`
                  }`}
                >
                  ENG
                </span>
                <img
                  className={`w-[16px] h-[16px] ${
                    languageEng ? `hidden` : `block`
                  }`}
                  src="georgian.png"
                  alt="Georgian"
                />
                <span
                  className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
                    languageEng ? `hidden` : `block`
                  }`}
                >
                  GEO
                </span>
                <RiArrowDropDownLine
                  className="w-[25px] h-[25px] cursor-pointer"
                  onClick={() => setShowLanguage(true)}
                />
                {showLanguage && (
                  <div
                    className="absolute w-[56px] h-[23px] top-[305px] flex justify-between items-center cursor-pointer"
                    onClick={handleChangeLang}
                    ref={divRef}
                  >
                    <img
                      className={`w-[16px] h-[16px] ${
                        languageEng ? `hidden` : `block`
                      }`}
                      src="english.png"
                      alt="English"
                    />
                    <span
                      className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
                        languageEng ? `hidden` : `block`
                      }`}
                    >
                      ENG
                    </span>
                    <img
                      className={`w-[16px] h-[16px] ${
                        languageEng ? `block` : `hidden`
                      }`}
                      src="georgian.png"
                      alt="Georgian"
                    />
                    <span
                      className={`font-SFProDisplay font-medium text-[16px] text-[#002A48] ${
                        languageEng ? `block` : `hidden`
                      }`}
                    >
                      GEO
                    </span>
                  </div>
                )}
              </div>
            </div>

            <img
              className="w-[92px] h-[32px] mt-[89px] mx-auto"
              src="logo.png"
              alt="Logo"
            />
          </div>

          {showAccount && (
            <div className="absolute w-[380px] h-[171px] bg-white top-[550px] left-[17px] flex flex-col justify-evenly py-[10px] rounded-[10px] shadow-2xl items-center">
              <h3 className="font-notoSans text-[16px] text-[#003459]">
                Hello {name}
              </h3>
              <div className="w-[350px] h-[1px] bg-[#003459]"></div>
              <div className="flex gap-[8px] items-center">
                <FiUser />
                <span className="font-notoSans text-[12px] text-[#003459]">
                  Profile
                </span>
              </div>
              <div
                className="flex gap-[8px] items-center cursor-pointer"
                onClick={handleLogOut}
                ref={accountDropdownRef}
              >
                <LuLogOut />
                <span className="font-notoSans text-[12px] text-[#003459]">
                  Log Out
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
