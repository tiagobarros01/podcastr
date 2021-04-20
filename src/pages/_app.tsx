import { AppProps } from 'next/app';
import React from 'react';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
