import { LogOut } from "lucide-react";
import logo from "/src/assets/logo.png";
import { useLogin } from "@/hooks/use-login";
import { useLocation } from "react-router-dom";

export function Header() {
  const { logout } = useLogin();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <header className="flex items-center justify-between pr-5">
       {isLoginPage ? (
        <div className="partner-area w-full flex gap-4 justify-center items-center text-white">
          <img src={logo} alt="Logo Único Contato" className="w-40 " />
          x
          <img
            src="/trier-sistemas.png"
            alt="Logo Único Contato"
            className="w-40"
          />
        </div>
      ) : (
        <div className="flex justify-between w-full items-center">
          <img src={logo} alt="Logo Único Contato" className="w-40 " />

          <button
            className="p-2 hover:bg-zinc-800/50 hover:text-accent-foreground rounded-md"
            onClick={logout}
          >
            <LogOut color="white" />
          </button>
        </div>
      )}
    </header>
  );
}
