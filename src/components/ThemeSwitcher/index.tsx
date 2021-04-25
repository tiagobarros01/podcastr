import React from 'react';

interface SwitchProps {
  toggleTheme: () => void
}

export function Switcher({ toggleTheme }: SwitchProps) {
  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}
      >
        BOTAO
      </button>
    </div>
  );
}
