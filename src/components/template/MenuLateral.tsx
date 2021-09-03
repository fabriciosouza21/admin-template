import MenuItem from "./MenuItem";
import { IconHome, IconLogout, IconNotify, IconSettings } from "../icons/Icons"
import Logo from "./Logo";


export default function MenuLateral() {
    return (
        <aside className={`
        flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900 dark:text-gray-200`}>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-600
            h-20 w-20
            `}>
                <Logo />

            </div>
            <ul className="flex-grow" >
                <MenuItem url="/" text="home" icon={IconHome} />
                <MenuItem url="/notification" text="notifications" icon={IconNotify} />
                <MenuItem url="/settings" text="settings" icon={IconSettings} />
            </ul>
            <ul>
                <MenuItem onclick = {()=> {console.log("logout")}} text="sair" icon={IconLogout} 
                className={`text-red-500
                            hover:bg-red-400 hover:text-white
                            dark:hover:text-white
                            `} />
            </ul>

        </aside>
    )
}