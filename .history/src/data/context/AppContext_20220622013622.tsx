import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
    tema?:string
    altTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: null,
    altTema: null
})

export function AppProvider(props){
    const [tema, setTema] = useState('dark')

    function altTema(){
        setTema(tema === '' ? 'dark' : '')
    }

useEffect(() =>{
    const temaSalvo = localStorage.getItem('tema')
    setTema(temaSalvo)
},[])

    return (
        <AppContext.Provider value={{
            tema,
            altTema
            
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
