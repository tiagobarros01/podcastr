import React from 'react';
import { VscColorMode } from 'react-icons/vsc';

import { SwitcherContainer } from './style';

interface SwitchProps {
  toggleTheme: () => void;
}

export function Switcher({ toggleTheme }: SwitchProps) {
  return (
    <SwitcherContainer>
      <VscColorMode
        type="button"
        onClick={toggleTheme}
        fontSize={25}
        cursor="pointer"
      />
    </SwitcherContainer>
  );
}
