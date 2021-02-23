import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, my name is Dina Rocio. I'm an apprentice of Web Development and a translator (English/Spanish). You can contact me on <a href="https://www.linkedin.com/in/dinavillanueva/">Linkedin</a>.
        </p>
      </section>
    </Layout>
  )
}
