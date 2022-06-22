import { createContext } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps{
    usuario?:Usuario
    loginGoogle:() => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
function usuarioNormalizado(usuarioFireBase: firebase.User) : Promise<Usuario>{
    const token = await usuarioFireBase.getToken()
}
})

const function AuthProvider(props){
    const [usuario, setUsuario] = useState<Usuario>(null)
    async function loginGoogle(){

    }
    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext