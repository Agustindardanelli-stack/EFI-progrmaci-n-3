import { AuthContextProvider } from '../context/AuthContext';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <LanguageProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </LanguageProvider>
  )
}

export default MyApp