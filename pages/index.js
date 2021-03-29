import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diego Marangoni</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>I am Diego Marangoni, a Software Engineer passionated about solving real problems with simple use of technology.</p>
          <p>Currently at <a href="https://www.linkedin.com/company/hellofresh/" target="_blank" className={styles.helloFresh}>HelloFresh</a>, my last position was at <a href="https://www.linkedin.com/company/unicoidtech" target="_blank" className={styles.unico}>unico</a>. You can find me on <a href="https://www.linkedin.com/in/diegomarangoni/" target="_blank">LinkedIn</a> and <a href="https://github.com/diegomarangoni" target="_blank">GitHub</a>, for more information contact me at diegomarangoni@msn.com</p>
        </div>
        <span className={styles.detail1}></span>
        <span className={styles.detail2}></span>
        <span className={styles.detail3}></span>
      </main>
    </div>
  )
}
