import { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaPhoneVolumeSolid, LiaFaxSolid } from "react-icons/lia";

export function ContactMain() {
  const [name, setName] = useState(
    localStorage.getItem("logined") === "true"
      ? localStorage.getItem("name")
      : ""
  );

  const [email, setEmail] = useState(
    localStorage.getItem("logined") === "true"
      ? localStorage.getItem("email")
      : ""
  );

  const [phoneNumber, setPhoneNumber] = useState("");
  const [option, setOption] = useState("");

  function handleSend() {
    if (name.length <= 1) {
      alert("Name must be longer than 1 characters.");
      return;
    }

    const phonePattern = /^5\d{8}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Phone number must be 9 digits and start with '5'.");
      return;
    }

    alert(
      `Sending info: \nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nQuestion: ${option}`
    );
  }

  return (
    <div className="w-[1140px] mobile:w-[382px] h-[700px] mobile:h-[1100px] mt-[130px] mobile:mt-[30px] mx-auto flex mb-[100px] gap-[50px] mobile:flex-col mobile:gap-[150px]">
      <div className="w-[545px] mobile:w-[382px] h-[604px]">
        <h2 className="font-montserrat font-bold text-[54px] mt-[48px]">
          Get in <span className="text-[#003459]">Touch</span>
        </h2>
        <p className="w-[545px] mobile:w-[382px] h-[48px] text-[14px] font-montserrat font-semibold">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <input
          className="w-[545px] mobile:w-[382px] h-[50px] border border-[#E0E0E0] px-[20px] py-[13px] mt-[40px]"
          type="text"
          placeholder="Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-[545px] mobile:w-[382px] h-[50px] border border-[#E0E0E0] px-[20px] py-[13px] mt-[20px]"
          type="email"
          placeholder="Email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[545px] mobile:w-[382px] h-[50px] border border-[#E0E0E0] px-[20px] py-[13px] mt-[20px]"
          type="number"
          name=""
          id=""
          placeholder="Phone Number"
          defaultValue={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <select
          className="w-[545px] mobile:w-[382px] h-[50px] border border-[#E0E0E0] px-[17px] py-[13px] mt-[20px]"
          name=""
          id=""
          value={option}
          onChange={(e) =>
            setOption(e.target.options[e.target.selectedIndex].text)
          }
        >
          <option value="option1">How did you find us?</option>
          <option value="option2">What happened here?</option>
          <option value="option3">Hello everyone</option>
        </select>
        <button
          className="w-[545px] mobile:w-[382px] h-[50px] bg-[#003459] text-white font-montserrat font-bold text-[16px] mt-[20px]"
          onClick={handleSend}
        >
          SEND
        </button>
        <div className="w-[532px] mobile:w-[382px] h-[40px] mt-[60px] flex justify-between mobile:flex-col mobile:items-center mobile:gap-[10px]">
          <div className="w-[127px] h-[40px] flex justify-between items-center">
            <LiaPhoneVolumeSolid className="w-[28px] h-[28px]" />
            <div>
              <h4 className="font-montserrat text-[13px] font-semibold">
                Phone
              </h4>
              <h4 className="font-montserrat text-[13px] text-[#003459]">
                03 5432 1234
              </h4>
            </div>
          </div>
          <div className="w-[127px] h-[40px] flex justify-between items-center">
            <LiaFaxSolid className="w-[28px] h-[28px]" />
            <div>
              <h4 className="font-montserrat text-[13px] font-semibold">FAX</h4>
              <h4 className="font-montserrat text-[13px] text-[#003459]">
                03 5432 1234
              </h4>
            </div>
          </div>
          <div className="w-[178px] h-[40px] flex justify-between items-center">
            <HiOutlineMailOpen className="w-[28px] h-[28px]" />
            <div>
              <h4 className="font-montserrat text-[13px] font-semibold">
                EMAIL
              </h4>
              <h4 className="font-montserrat text-[13px] text-[#003459]">
                info@marcc.com.au
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          className="w-[545px] h-[700px] mobile:w-[382px] mobile:h-[382px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d190388.66513238713!2d44.816793600000004!3d41.789030399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ska!2sge!4v1729001133449!5m2!1ska!2sge"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
