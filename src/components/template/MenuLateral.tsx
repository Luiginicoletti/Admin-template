import useAuth from "../../data/hook/useAuth";
import { HomeIcon, CfgIcon, BellIcon, LogoIcon, OutIcon } from "../icons";
import Logo from "./Logo";

import MenuItem from "./MenuItem";

export default function MenuLateral() {
  const { logout} = useAuth()
  return (
    <aside className={`
    flex flex-col
     bg-gray-300 text-gray-800
     dark:bg-gray-800 dark:text-gray-300
    `}>
      <div
        className={`
      flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-500 opacity-50
      h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Inicio" icone={HomeIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={CfgIcon} />
        <MenuItem url="/notificacoes" texto="Notificacoes" icone={BellIcon} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={OutIcon}
          onClick={logout}
          className={`
        text-red-500
        hover:bg-red-400 hover:text-white
        `}
        />
      </ul>
    </aside>
  );
}
