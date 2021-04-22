import styled from 'styled-components';

export const EpisodeContainer = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray100};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: .875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
        position: relative;

        ::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #ddd;
          position: absolute;

          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  } 
`;

export const ThumbnailContainer = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: .75rem;

    position: absolute;
    z-index: 5;

    font-size: 0;

    transition: filter 200ms;

    :first-child {
      left: 0;
      top: 50%;

      background: ${(props) => props.theme.colors.purple500};

      transform: translate(-50%, -50%)
    }

    :last-child {
      right: 0;
      top: 50%;

      background: ${(props) => props.theme.colors.green500};
      transform: translate(50%, -50%)
    }

    :hover {
      filter: brightness(.9);
    }
  }

  
`;

export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: ${(props) => props.theme.colors.gray800};

  p {
    margin: 1.5rem 0;
  }
`;
