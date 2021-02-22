import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}

// const YourComponent = () => (
//   <Image
//     src="/images/myProfile.jpg" //Ruta de la carpeta de imagen
//     height={144} // medida esperada
//     width={144}
//     alt="DinaRocio"
//   ></Image>
// )
