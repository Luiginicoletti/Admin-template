import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUsuarioProps {
  className?: string;
  nome?: string;
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth();
  const nome = usuario.nome;
  return (
    <>
      <Link href="/perfil">
        <img
          src={usuario?.imagemUrl ?? "/images/avatar.svg"}
          alt="Avatar"
          className={` h-8 w-18 rounded-full cursor-pointer`}
        />
       
      </Link>
    </>
  );
}
