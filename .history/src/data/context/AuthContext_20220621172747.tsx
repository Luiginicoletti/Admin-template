import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import route from "next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFireBase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFireBase.getIdToken();
  return {
    uid: usuarioFireBase.uid,
    nome: usuarioFireBase.displayName,
    email: usuarioFireBase.email,
    token,
    provedor: usuarioFireBase.providerData[0].providerId,
    imagemUrl: usuarioFireBase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookie.set("admin-template-cookie-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-cookie-auth");
  }
}

export function AuthProvider(props) {
  const [carregando,setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFireBase) {
    if (usuarioFireBase?.email) {
      const usuario = await usuarioNormalizado(usuarioFireBase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false)
    } else {
      setUsuario(null)
      gerenciarCookie(false);
      setCarregando(false)
    }
  }

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (resp.user?.email) {
      const usuario = await usuarioNormalizado(resp.user);
      setUsuario(usuario);
      route.push("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
