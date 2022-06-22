interface AuthInputProps{
    label:string
    renderizarSenha?:boolean
    obrigatorio:boolean
    valor:any
    tipo?: 'email' | 'password' | 'text' 
    valorMudou: (novoValor:any) => void
    

}
export default function AuthInput(props:AuthInputProps){
    return  (
        <div className={`flex flex-col mt-2`}>
            <label>{props.label}</label>
            <input
            onChange={e => props.valorMudou?.(e.target.value)}
            required={props.obrigatorio} 
            type={props.tipo ?? 'text'} value={props.valor}
            className={`
            px-4 py-3 rounded-lg bg-gray-200
            mt-2 border focus:border-blue-500
            focus:outline-none focus:bg-gray-100`}/>
            
        </div>


    )
}