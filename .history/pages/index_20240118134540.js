import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Li

export default function Home() {

  return (
    <>
      <Head>
        <title>X. It's what's happening / X </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>

      </main>        
      <Footer/>
    </>
  )
}
