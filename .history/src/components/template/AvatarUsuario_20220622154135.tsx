import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    const avat = src={'/images/avatar.svg'}
    return (
        <Link href="/perfil">
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt={}
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}