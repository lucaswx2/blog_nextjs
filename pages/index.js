import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>Desenvolvedor Fullstack</li>
          <li>Cruadir de Conteúdo</li>
          <li>A vida esta me obrigando a programar em Java</li>
        </ul>
        <p></p>
      </section>
    </Layout>
  );
}
