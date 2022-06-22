import Link from "../../../node_modules/next/link";

interface MenuItemProps {
    className: any;
    texto: string;
    icone: any;
    url?: string;
    onClick?: (event:any) => void
}
export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <a
        className={`
                  flex flex-col justify-center items-center
                  h-20 w-20 text-grey-600 ${props.className}
                  `}
      >
        {props.icone}
        <span
          className={`
              text-xs font-light `}
        >
          {props.texto}
        </span>
      </a>
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-400 dark:hover:bg-gray-900`}>
      {props.url ? (
        <Link href={props.url}>
            {renderLink()}
            </Link>
      ) : (
        renderLink() 
      )}
    </li>
  )
}
