import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray100};

  p {
    margin-left: 2rem;
    padding: .25rem 0 .25rem 2rem;
    border-left: 1px solid ${(props) => props.theme.colors.gray100};
  }

  span {
    margin-left: auto;
    text-transform: capitalize
  }
`;
