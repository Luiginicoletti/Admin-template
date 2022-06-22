import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps{
    usuario:Usuario
    loginGoogle:() => Promise<void>
}

const AuthContext = createContext<AuthContextProps>()