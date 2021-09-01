import MenuItem from "./MenuItem";
import {IconHome, IconNotify, IconSettings} from "../icons/Icons"


export default function MenuLateral(){
    return (
        <aside>
            <ul>
                <MenuItem url = "/" text = "home" icon = {IconHome} />
                <MenuItem url = "/notification" text = "settings" icon = {IconSettings} />
                <MenuItem url = "/settings" text = "notifications" icon = {IconNotify} />                
            </ul>

        </aside>
    )
}