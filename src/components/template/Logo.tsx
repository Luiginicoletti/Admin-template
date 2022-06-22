import { HomeIcon, CfgIcon, BellIcon,LogoIcon } from "../icons";
export default function Logo(){
    return(
        <div className={`flex h-14 w-14 justify-center items-center
        bg-indigo-00 rounded-bl-3xl text-white
        `}>
            {LogoIcon}
        </div>
    )
}