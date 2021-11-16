import Head from "next/head"
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      {/* configura o title em cada pagina */}
      <Head>
      <title>FLR Assessoria Contábil</title>
      </Head>

      <div className={styles.mainWrapper}>
      <h1>Site FLR</h1>

        </div>
      
    </>
  )

}
