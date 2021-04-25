import { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header/index';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import GlobalStyle from '../styles/global';
import { Wrapper } from '../styles/pages/App';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <PlayerContextProvider>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <main>
            <Header toggleTheme={toggleTheme} />
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
