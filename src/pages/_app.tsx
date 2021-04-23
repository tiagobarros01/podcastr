import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header/index';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import GlobalStyle from '../styles/global';
import { Wrapper } from '../styles/pages/App';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <ThemeProvider theme={light}>
        <Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Wrapper>
        <GlobalStyle />
      </ThemeProvider>
    </PlayerContextProvider>
  );
}

export default MyApp;
