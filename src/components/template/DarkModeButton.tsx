import { MoonIcon, SunIcon } from "../icons/index";

interface DarkModeProps {
  tema: string;
  altTema: () => void;
}
export default function DarkModeButton(props: DarkModeProps) {
  return props.tema === 'dark' ? (
    <div
      onClick={props.altTema}
      className={` hidden sm:flex items-center cursor-pointer justify-start
    bg-gradient-to-r from-yellow-300 to-yellow-700 w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
    flex items-center justify-center bg-white text-yellow-600 rounded-full w-6 h-6
      `}
      >
        {SunIcon}
      </div>
      <div
        className={`
hidden lg:flex items-center ml-3 text-white
        `}
      >
        <span>Light</span>
      </div>
    </div>
  ) : (
  
    <div
    onClick={props.altTema}
    className={` hidden sm:flex items-center cursor-pointer justify-end
  bg-gradient-to-l from-gray-500 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full
  `}
  >
    <div
      className={`
hidden lg:flex items-center mr-3 text-gray-300
      `}
    >
      <span>Dark</span>
    </div>
    <div
      className={`
  flex items-center justify-center bg-black text-yellow-300 rounded-full w-6 h-6
    `}
    >
      {MoonIcon}
    </div>
    
  </div>
  );
}
