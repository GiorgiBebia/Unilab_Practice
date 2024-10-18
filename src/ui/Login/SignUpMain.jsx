/* eslint-disable react/prop-types */
import { useState } from "react";

export function SignUpMain({ setView }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleCreateAccount() {
    setErrorMessage("");

    if (name.length < 2) {
      setErrorMessage("Name must be at least 2 characters long.");
      return;
    }

    if (!email.includes("@") && email.length < 10) {
      setErrorMessage("Email must be valid.");
      return;
    }

    if (password.length < 8 || !/[A-Z]/.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain at least one uppercase letter."
      );
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setName("");
    setEmail("");
    setPassword("");

    setView("login");
  }

  return (
    <div className="w-[320px] h-[556px] mt-[130px] mb-[100px] mx-auto">
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
          htmlFor=""
        >
          Name
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-[320px] h-[69px] flex flex-col mt-[15px]">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor=""
        >
          Email
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-[320px] h-[69px] flex flex-col mt-[15px]">
        <label
          className="font-inter text-[14px] text-[#003459] font-medium"
          htmlFor=""
        >
          Password
        </label>
        <input
          className="border border-[#E6E7E8] rounded-[6px] w-[320px] h-[45px]"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && (
        <h3 className="text-red-500 text-[12px] font-bold mt-[10px]">
          {errorMessage}
        </h3>
      )}
      <h3 className="font-inter text-[12px] text-[#003459] mt-[16px] font-medium">
        By creating an account you agree with our Terms of Service, Privacy
        Policy.
      </h3>
      <button
        className="w-[318px] h-[44px] bg-[#003459] rounded-[4px] mt-[24px] mx-auto text-white text-[14px] font-inter font-medium"
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
      <h3
        className="font-inter text-[14px] text-[#003459] mt-[24px] text-center cursor-pointer"
        onClick={() => setView("login")}
      >
        Already have an account? Log in
      </h3>
    </div>
  );
}
