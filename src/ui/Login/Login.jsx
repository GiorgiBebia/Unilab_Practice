import { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { ConfirmPassword } from "./ConfirmPassword";
import { RecoveryPassword } from "./RecoveryPassword";
import { SignUpMain } from "./SignUpMain";
import { LoginMain } from "./LoginMain";

function Login() {
  const [view, setView] = useState("login");

  return (
    <div>
      <Header />
      {view === "login" && <LoginMain setView={setView} />}
      {view === "signup" && <SignUpMain setView={setView} />}
      {view === "recovery" && <RecoveryPassword setView={setView} />}
      {view === "confirmPassword" && <ConfirmPassword setView={setView} />}
      <Footer />
    </div>
  );
}

export default Login;
