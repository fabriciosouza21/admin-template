import MenuItem from "./MenuItem";
import { IconHome, IconNotify, IconSettings } from "../icons/Icons"
import Logo from "./Logo";


export default function MenuLateral() {
    return (
        <aside>
            <div className={`
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-600
            h-20 w-20
            `}>
                <Logo/>

            </div>
            <ul>
                <MenuItem url="/" text="home" icon={IconHome} />
                <MenuItem url="/notification" text="settings" icon={IconSettings} />
                <MenuItem url="/settings" text="notifications" icon={IconNotify} />
            </ul>

        </aside>
    )
}