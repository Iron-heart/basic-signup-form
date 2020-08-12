import React from 'react';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as SunIcon } from './sun.svg';
import ToggleContainer from './Toggle.styled';

interface IToggle {
  theme: any;
  toggleTheme: () => void;
}

const Toggle = ({ theme, toggleTheme }: IToggle) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer
      className="dark-mode-button"
      role="button"
      aria-label="Dark Mode Button"
      lightTheme={isLight}
      onClick={toggleTheme}
    >
      <SunIcon aria-label="Sun icon for Button" />
      <MoonIcon aria-label="Moon icon for Button" />
    </ToggleContainer>
  );
};

export default Toggle;
