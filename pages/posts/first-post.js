import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
export default function FirstPost(){

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        
    </>
  )
}




const YourComponent = () => (
  <Image
    src="/images/myProfile.jpg" //Ruta de la carpeta de imagen
    height={144} // medida esperada
    width={144}
    alt="DinaRocio"
  ></Image>
)
