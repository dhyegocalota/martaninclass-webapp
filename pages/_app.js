import React from "react";
import Head from "next/head";

import Favicons from "components/favicons";
import GoogleAnalytics from "components/google-analytics";
import "styles.css";

const { GOOGLE_ANALYTICS_ID } = process.env;

export default function MartanApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Karina Martan</title>
        <Favicons />
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics id={GOOGLE_ANALYTICS_ID} />
    </>
  );
}
