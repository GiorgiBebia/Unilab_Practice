import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Header } from "../Header";

export function HeaderDiv() {
  const [languageEng, setLanguageEng] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <div className="max-w-[1440px] w-full h-[695px] bg-[url('/headerBackground.png')] mobile:bg-[url('/headerBackgroundMobile.png')] flex flex-col mobile:rounded-b-[20px]">
      <Header
        languageEng={languageEng}
        setLanguageEng={setLanguageEng}
        showLanguage={showLanguage}
        setShowLanguage={setShowLanguage}
      />

      <div className="w-[465px] mobile:w-[357px] h-[337px] mobile:h-[244px] mt-[80px] mobile:mt-[23px] ml-[130px] mobile:ml-[16px]">
        <h2
          className={`font-SFProDisplay font-black ${
            languageEng
              ? `text-[60px] mobile:text-[46px]`
              : `text-[45px] mobile:text-[30px]`
          } text-[#002A48]`}
        >
          {languageEng ? `One More Friend` : `კიდევ ერთი მეგობარი`}
        </h2>
        <h3
          className={`font-SFProDisplay font-bold ${
            languageEng
              ? `text-[46px] mobile:text-[28px]`
              : `text-[36px] mobile:text-[22px]`
          }  text-[#002A48]`}
        >
          {languageEng ? `Thousands More Fun!` : `კიდევ ათასობით გართობა!`}
        </h3>
        <p className="font-SFProDisplay font-medium text-[16px] mobile:text-[12px] text-[#002A48] mt-[24px] mobile:mt-[12px]">
          {languageEng
            ? `Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!`
            : `შინაური ცხოველის ყოლა ნიშნავს, რომ გქონდეს მეტი სიხარული, ახალი მეგობარი, ბედნიერი ადამიანი ყოველთვის შენთან იქნება გასართობად. ჩვენ გვყავს 200+ სხვადასხვა შინაური ცხოველი შეუძლია დააკმაყოფილოს თქვენი საჭიროებები!`}
        </p>
        <div className="w-[344px] h-[48px] flex justify-between mt-[34px] mobile:mt-[32px]">
          <div className="w-[157px] h-[48px] rounded-[57px] border-[1.5px] border-[#003459] content-center cursor-pointer">
            <div className="flex items-center justify-center gap-[8px]">
              <span className="font-SFProDisplay font-medium text-[16px] text-[#003459]">
                {languageEng ? `View Intro` : `შესავლის ნახვა`}
              </span>
              <FaRegCirclePlay className="text-[#003459]" />
            </div>
          </div>
          <div className="w-[163px] h-[48px] rounded-[57px] bg-[#003459] flex justify-center items-center font-SFProDisplay font-medium text-[16px] text-white cursor-pointer">
            {languageEng ? `Explore Now` : `გამოიკვლიეთ ახლა`}
          </div>
        </div>
      </div>
    </div>
  );
}
