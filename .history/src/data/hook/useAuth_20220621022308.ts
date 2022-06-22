import { useContext } from "react"
import AuthContext from "../context/AuthContext"


const useAuth = () => useContext(AppContext)

export default useAuth