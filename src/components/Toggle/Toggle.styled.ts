import styled from 'styled-components';

interface IContainer {
  lightTheme: boolean;
}

const ToggleContainer = styled.button<IContainer>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 3rem;
  height: 2rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

export default ToggleContainer;
