

interface TituloProps { 
  titulo: string;
  subtitulo: string;

}

export default function Layout(props: TituloProps) {
  return (
  <div>
    <h1 className={` font-black text-3xl text-gray-800 dark:text-gray-300
    `}>
      {props.titulo}
      </h1>
    <h2   className={` font-light text-sm text-gray-600 dark:text-gray-500
      `}>
      {props.subtitulo}
      </h2>
  </div>
  );
}
