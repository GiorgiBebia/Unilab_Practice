/* eslint-disable react/prop-types */
import { useState } from "react";

export function ConfirmPassword({ setView }) {
  const [enteredNewPassword, setEnteredNewPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  function handleResetPassword() {
    if (enteredNewPassword.length < 8 || enteredConfirmPassword.length < 8) {
      alert("Passwords must be at least 8 characters long.");
      return;
    }

    if (!/[A-Z]/.test(enteredNewPassword)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }

    if (enteredNewPassword !== enteredConfirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("password", enteredNewPassword);
    alert("Password has been reset successfully!");

    setEnteredNewPassword("");
    setEnteredConfirmPassword("");

    setView("login");
  }

  return (
    <div className="w-[320px] h-[238px] mt-[130px] mb-[100px] mx-auto">
      <div className="w-[320px] h-[69px] flex flex-col">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor=""
        >
          New Password
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="password"
          defaultValue={enteredNewPassword}
          onChange={(e) => setEnteredNewPassword(e.target.value)}
        />
      </div>
      <div className="w-[320px] h-[69px] flex flex-col mt-[16px]">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor=""
        >
          Confirm Password
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="password"
          defaultValue={enteredConfirmPassword}
          onChange={(e) => setEnteredConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className="w-[318px] h-[44px] bg-[#003459] rounded-[4px] mt-[40px] mx-auto text-white text-[14px] font-inter font-medium"
        onClick={handleResetPassword}
      >
        Reset Password
      </button>
    </div>
  );
}
