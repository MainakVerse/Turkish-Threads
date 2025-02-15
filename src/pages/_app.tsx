/* eslint-disable prettier/prettier */
import { AppProps } from 'next/app';
import Head from 'next/head'; // Import Head

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Turkish Rags</title> {/* Fallback title */}
      <meta name="description" content="A default description" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;