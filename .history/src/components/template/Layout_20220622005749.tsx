import MenuLateral from "./MenuLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import useAppData from "../../data/hook/UseAppData";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();
  return (
    <ForcarAutenticacao>
    <div className={`
      ${tema} flex h-screen w-screen bg-gray-700
    `}>
      <MenuLateral />
      <div className={`flex flex-col w-full p-8
      dark:bg-gray-900 bg-gray-400 `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
    </ForcarAutenticacao>
  );
  
}
