import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 26.5rem;
  height: 100vh;

  padding: 3rem 4rem;

  background: ${(props) => props.theme.colors.purple500};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }
`;

export const CurrentEpisode = styled.div`
  text-align: center;

  @media (max-width: 1200px) {
    display: flex;
    text-align: center;

    img {
      width: 10rem;
      height: 10rem;
    }
  }

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;

    @media (max-width: 1200px) {
      text-align: left;
    }
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6rem;
    line-height: 1.5rem;

    @media (max-width: 1200px) {
      text-align: left;
      width: 100%;
    }
  }
`;

export const InfoEpisodeContainer = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-left: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed ${(props) => props.theme.colors.purple300};
  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    transparent 100%
  );

  padding: 4rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  align-self: stretch;

  @media (max-width: 1200px) {
    align-self: auto;
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  &.empty {
    opacity: 0.5;
  }

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`;

export const SliderLine = styled.div`
  flex: 1;
`;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: ${(props) => props.theme.colors.purple300};
  border-radius: 2px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  .isActive {
    filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

    :hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
        hue-rotate(100deg) !important;
    }
  }

  button {
    background: transparent;
    border: 0;
    font-size: 0;
    outline: 0;

    transition: filter 200ms;

    :focus {
      border: 2px solid ${(props) => props.theme.colors.purple800};
    }

    :disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    :hover:not(:disabled) {
      filter: brightness(0.75);
    }

    &.playButton {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background: ${(props) => props.theme.colors.purple400};

      :hover:not(:disabled) {
        filter: brightness(0.95);
      }
    }
  }
`;
