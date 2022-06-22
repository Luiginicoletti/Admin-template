import { useContext } from "react"
import AppContext from "../context/AppContext"


const useAuth = () => useContext(AppContext)

export default useAuth