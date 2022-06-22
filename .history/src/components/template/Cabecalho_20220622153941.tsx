import useAppData from "../../data/hook/UseAppData";
import AvatarUsuario from "./AvatarUsuario";
import DarkModeButton from "./DarkModeButton";
import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, altTema } = useAppData();
  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end items-center`}>
        <DarkModeButton tema={tema} altTema={altTema} />
        <AvatarUsuario className="ml-5"/>
      </div>
    </div>
  );
}
