import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';

import { Switcher } from '../ThemeSwitcher';
import { HeaderContainer } from './style';

interface HeaderProps {
  toggleTheme: () => void
}

const currentDate = format(new Date(), 'EEEEEE,d MMM', {
  locale: ptBR,
});

export function Header({ toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="logo" />

      <p>The best for you hear, always</p>
      <span>{currentDate}</span>
      <Switcher toggleTheme={toggleTheme} />
    </HeaderContainer>
  );
}
