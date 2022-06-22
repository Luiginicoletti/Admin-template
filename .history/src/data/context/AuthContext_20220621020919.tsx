import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps{
    usuario?:Usuario
    loginGoogle:() => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({

})

const function AuthProvider(props){
    const [usuario, setUsuario] = useState<Usuario>(null)
    async function loginGoogle(){

    }
    return (
        <AuthContext.Provider value={{
        
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext