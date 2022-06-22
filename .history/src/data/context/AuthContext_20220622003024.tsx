import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import route from "next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
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
    Cookies.set("admin-template-cookie-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-cookie-auth");
  }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFireBase) {
    if (usuarioFireBase?.email) {
      const usuario = await usuarioNormalizado(usuarioFireBase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      configurarSessao(resp.user);
      route.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if(Cookies.get("admin-template-cookie-auth")){

    }
    
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
