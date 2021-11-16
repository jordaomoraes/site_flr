import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
    <title>FLR Assessoria Contábil</title>
    <Header />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp;
