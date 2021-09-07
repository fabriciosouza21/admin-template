
import 'tailwindcss/tailwind.css'
import { AppProvide } from '../data/context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
    <AppProvide>
      <Component {...pageProps} />
    </AppProvide> )
}

export default MyApp
