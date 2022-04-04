import React from "react";
import Head from "next/head";

import Favicons from "components/favicons";
import GoogleAnalytics from "components/google-analytics";
import "styles.css";

export default function MartanApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Karina Martan — Danças Árabes</title>
        <Favicons />
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics />
    </>
  );
}
