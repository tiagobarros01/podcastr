import React from 'react';

import {
  PlayerContainer,
  EmptyPlayer,
  Progress,
  EmptySlider,
  Buttons,
  Footer,
  Slider,
} from './style';

export function Player() {
  return (
    <PlayerContainer>
      <header>
        <img src="/playing.svg" alt="playing now" />
        <strong>Playing now</strong>
      </header>
      <EmptyPlayer>
        <strong>Select a podcast to listen</strong>
      </EmptyPlayer>

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
