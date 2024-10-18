/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginMain({ setView }) {
  const email = localStorage.getItem("email") || "";
  const password = localStorage.getItem("password") || "";

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    if (enteredEmail === email && enteredPassword === password) {
      navigate("/");
      alert("Login successful!");
      localStorage.setItem("logined", true);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="w-[320px] h-[444px] mt-[130px] mb-[100px] mx-auto">
      <img src="googleButton.png" alt="Google Button" />
      <div className="flex items-center justify-center mt-[32px] mb-[34px]">
        <div className="h-[1px] bg-[#E6E7E8] flex-grow"></div>
        <span className="px-[16px] text-[#003459] font-inter text-[12px] font-medium">
          OR
        </span>
        <div className="h-[1px] bg-[#E6E7E8] flex-grow"></div>
      </div>
      <div className="w-[320px] h-[69px] flex flex-col">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="email"
          id="email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
      </div>
      <div className="w-[320px] h-[69px] flex flex-col mt-[15px]">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="password"
          id="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
      </div>
      <h3
        className="font-inter text-[12px] text-[#003459] font-medium mt-[16px] text-end cursor-pointer"
        onClick={() => setView("recovery")}
      >
        Forgot Password?
      </h3>
      <button
        className="w-[318px] h-[44px] bg-[#003459] rounded-[4px] mt-[24px] mx-auto text-white text-[14px] font-inter font-medium"
        onClick={handleLogin}
      >
        Login
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
