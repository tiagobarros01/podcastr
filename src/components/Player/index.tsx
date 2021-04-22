import Image from 'next/image';
import React, { useContext } from 'react';

import { PlayerContext } from '../../contexts/PlayerContext';
import {
  PlayerContainer,
  EmptyPlayer,
  Progress,
  EmptySlider,
  Buttons,
  Footer,
  Slider,
  CurrentEpisode,
} from './style';

export function Player() {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <PlayerContainer>
      <header>
        <img src="/playing.svg" alt="playing now" />
        <strong>
          Playing now
        </strong>
      </header>
      { episode ? (
        <CurrentEpisode>
          <Image width={592} height={592} src={episode.thumbnail} objectFit="cover" />
          <strong>{episode.title}</strong>
          <strong>{episode.members}</strong>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Select a podcast to listen</strong>
        </EmptyPlayer>
      ) }

      <Footer className="empty">
        <Progress>
          <span>00:00</span>
          <Slider>
            <EmptySlider />
          </Slider>
          <span>00:00</span>
        </Progress>
        <Buttons>
          <button type="button">
            <img src="/shuffle.svg" alt="shuffle" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="previous" />
          </button>
          <button type="button" className="playButton">
            <img src="/play.svg" alt="play" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="next" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="repeat" />
          </button>
        </Buttons>
      </Footer>
    </PlayerContainer>
  );
}
