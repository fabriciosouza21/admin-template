import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";


export default function Notifications() {
    const {alternaTema}= useAppData()
    return (
        <Layout titulo="notificação"
                subtitulo="Gerenciando notificações">
            <button onClick={alternaTema}> alterna Tema </button>
            
            
        </Layout>
    )
}
