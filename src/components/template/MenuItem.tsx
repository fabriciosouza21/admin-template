import Link from "next/link"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    onclick?: (evento: any)=> void
    className?: string
}


export default function MenuItem(props: MenuItemProps) {
    function renderContent(){
        return(
            <a className={`
            flex flex-col justify-center items-center h-20 w-20
            dark:text-gray-200
            ${props.className}`}>
                {props.icon}
                <span className={`
                text-xs font-light  `} >
                    {props.text}</span>
            </a>


        )
    }

    return (
        <li onClick= {props.onclick} className={`
        hover:bg-gray-300 dark:hover:bg-gray-800
        cursor-pointer`
        }>
            { props.url 
            ?(
                <Link href={props.url}>
                {renderContent()}
            </Link> )
            : (renderContent())
            }

        </li>
    )
}
