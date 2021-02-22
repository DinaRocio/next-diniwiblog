import '../styles/globals.css' // solo aqui se puede importar los estilos globales, esta es la ruta principal digamos

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
