import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Venedict Chen | Web developer</title>
        <meta name="description" content="Creating functional, aesthetic, inspiring websites" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;