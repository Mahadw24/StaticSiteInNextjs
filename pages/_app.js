// pages/_app.js

import Head from "next/head";
import "../styles/global.css"; // Import your global stylesheets here

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Add other meta tags or external stylesheets */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
