/* eslint-disable jsx-a11y/media-has-caption */
import 'rc-slider/assets/index.css';
import Image from 'next/image';
import Slider from 'rc-slider';
import React, { useEffect, useRef, useState } from 'react';

import { usePlayer } from '../../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../../utils/convertDurationToTimeString';
import {
  EmptyPlayer,
  Progress,
  EmptySlider,
  Buttons,
  Footer,
  SliderLine,
  CurrentEpisode,
  InfoEpisodeContainer,
  HeaderContainer,
} from '../style';

export function PlayerMobile() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    isShuffling,
    toggleShuffle,
    toggleLoop,
    clearPlayerState,
  } = usePlayer();

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressLIstener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;

    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  const episode = episodeList[currentEpisodeIndex];

  return (
    <>
      <HeaderContainer>
        <header>
          <img src="/playing.svg" alt="playing now" />
          <strong>
            Playing now
          </strong>
        </header>
      </HeaderContainer>
      { episode ? (
        <CurrentEpisode>
          <Image width={592} height={592} src={episode.thumbnail} objectFit="cover" />
          <InfoEpisodeContainer>
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </InfoEpisodeContainer>
        </CurrentEpisode>
      ) : (
        <EmptyPlayer>
          <strong>Select a podcast to listen</strong>
        </EmptyPlayer>
      ) }
      <Footer>
        <Progress className={!episode ? 'empty' : ''}>
          <span>{convertDurationToTimeString(progress)}</span>
          <SliderLine>
            { episode ? (
              <Slider
                trackStyle={{ background: '#04d361' }}
                railStyle={{ background: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
              />
            ) : (
              <EmptySlider />
            ) }
          </SliderLine>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>

          { episode && (
          <audio
            src={episode.url}
            autoPlay
            ref={audioRef}
            onEnded={handleEpisodeEnded}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            loop={isLooping}
            onLoadedMetadata={setupProgressLIstener}
          />
          ) }

        </Progress>
        <Buttons>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? 'isActive' : ''}
          >
            <img src="/shuffle.svg" alt="shuffle" />
          </button>
          <button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
            <img src="/play-previous.svg" alt="previous" />
          </button>
          <button
            type="button"
            className="playButton"
            disabled={!episode}
            onClick={togglePlay}
          >
            { isPlaying
              ? <img src="/pause.svg" alt="pause" />
              : <img src="/play.svg" alt="play" /> }
          </button>
          <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
            <img src="/play-next.svg" alt="next" />
          </button>
          <button
            type="button"
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? 'isActive' : ''}
          >
            <img src="/repeat.svg" alt="repeat" />
          </button>
        </Buttons>
      </Footer>
    </>
  );
}
