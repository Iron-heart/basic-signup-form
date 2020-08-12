import React from 'react';
import Toggle from '../Toggle/Toggle';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1140px;
  align-items: center;
  height: 3em;
`;

const NavBar = ({ theme, toggleTheme }: any) => {
  return (
    <Navigation>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </Navigation>
  );
};

export default NavBar;
