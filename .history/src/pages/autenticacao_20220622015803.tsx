import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarnIcon } from "../components/icons/index";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
  const { cadastrar, login, usuario, loginGoogle } = useAuth();
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState(null);
  const [senha, setSenha] = useState("");

  function exibirErro(msg, tempo = 3) {
    setErro(msg);
    setTimeout(() => setErro(null), tempo * 1000);
  }

  async function submit() {
    try {
      if (modo === "login") {
        await login(email, senha);
      } else {
       await cadastrar(email, senha);
      }
    } catch (e) {
      exibirErro(e?.message ?? "Fatal Error");
    }
  }

  return (
    <div
      className={`
    flex h-screen items-center justify-center
    `}
    >
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="http://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1
          className={`
      text-3xl font-bold mb-5 text-blue-500
     
      `}
        >
          {modo === "login" ? "Log In" : "Sign Up"}
        </h1>
        {erro ? (
          <div
            className={`
bg-red-400 text-white flex py-3 items-center px-5 my-2
border border-red-500 rounded-lg`}
          >
            {WarnIcon}
            <span className="ml-4">{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />

        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button
          onClick={submit}
          className={`
      w-full bg-indigo-500 hover:bg-indigo-400 text-white
      rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Log in" : "Sign Up"}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button
          onClick={loginGoogle}
          className={`
      w-full bg-red-500 hover:bg-red-400 text-white
      rounded-lg px-4 py-3 `}
        >
          Login with Google
        </button>

        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`
        text-blue-500 hover:text-blue-700 font-semibold
        cursor-pointer ml-3`}
            >
              Crie sua conta gratis!
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já tem uma conta?
            <a
              onClick={() => setModo("login")}
              className={`
    text-blue-500 hover:text-blue-700 font-semibold
    cursor-pointer ml-3`}
            >
              Entre com a sua conta!
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
