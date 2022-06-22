import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface AppContextProps {
    tema?:string
    altTema?: () => void
}

const AppContext = createContext<AppContextProps>({
  
})

export function AppProvider(props){
    const [tema, setTema] = useState('dark')

    function altTema(){
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    
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
