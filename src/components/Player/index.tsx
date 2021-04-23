/* eslint-disable jsx-a11y/media-has-caption */
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useContext } from 'react';

import { PlayerContext } from '../../contexts/PlayerContext';
import {
  PlayerContainer,
  EmptyPlayer,
  Progress,
  EmptySlider,
  Buttons,
  Footer,
  SliderLine,
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
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Select a podcast to listen</strong>
        </EmptyPlayer>
      ) }

      <Footer className={!episode ? 'empty' : ''}>
        <Progress>
          <span>00:00</span>
          <SliderLine>
            { episode ? (
              <Slider
                trackStyle={{ background: '#04d361' }}
                railStyle={{ background: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <EmptySlider />
            ) }
          </SliderLine>
          <span>00:00</span>

          { episode && (
          <audio src={episode.url} autoPlay />
          ) }

        </Progress>
        <Buttons>
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="shuffle" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="previous" />
          </button>
          <button type="button" className="playButton" disabled={!episode}>
            <img src="/play.svg" alt="play" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="next" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="repeat" />
          </button>
        </Buttons>
      </Footer>
    </PlayerContainer>
  );
}
