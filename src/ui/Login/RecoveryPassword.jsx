/* eslint-disable react/prop-types */
import { useState } from "react";

export function RecoveryPassword({ setView }) {
  const email = localStorage.getItem("email");
  const [enteredEmail, setEnteredEmail] = useState("");

  function handleCheckEmail() {
    if (enteredEmail.includes("@")) {
      if (!email || email === enteredEmail) {
        localStorage.setItem("email", enteredEmail);
        setView("confirmPassword");
      } else {
        alert(
          "The entered email does not match our records. PLEASE SIGN UP First"
        );
      }
    } else {
      alert("Please enter a valid email address or SIGN UP");
    }
  }

  return (
    <div className="w-[320px] h-[236px] mt-[130px] mb-[100px] mx-auto">
      <h3 className="font-inter text-[14px] text-[#003459]">
        Please enter the email address associated with your account. We&apos;ll
        promptly send you a link to reset your password.
      </h3>
      <div className="w-[320px] h-[69px] flex flex-col mt-[24px]">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor=""
        >
          Email
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="email"
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
      </div>
      <button
        className="w-[318px] h-[44px] bg-[#003459] rounded-[4px] mt-[24px] mx-auto text-white text-[14px] font-inter font-medium"
        onClick={handleCheckEmail}
      >
        Send Reset Link
      </button>
      <h3
        className="font-inter text-[12px] text-[#003459] mt-[24px] text-center cursor-pointer"
        onClick={() => setView("signup")}
      >
        Don&apos;t have an account? Sign up
      </h3>
    </div>
  );
}
