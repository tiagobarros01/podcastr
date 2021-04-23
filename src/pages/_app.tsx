import { AppProps } from 'next/app';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header/index';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';
import GlobalStyle from '../styles/global';
import { Wrapper } from '../styles/pages/App';
import light from '../styles/themes/light';

function MyApp({ Component, pageProps }: AppProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      play,
      isPlaying,
      togglePlay,
    }}
    >
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
    </PlayerContext.Provider>
  );
}

export default MyApp;
