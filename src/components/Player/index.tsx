import 'rc-slider/assets/index.css';
import React, { useEffect, useState } from 'react';

import { PlayerMobile } from './mobile/PlayerMobile';
import { PlayerWeb } from './PlayerWeb';
import {
  PlayerContainer,
} from './style';

export function Player() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <PlayerContainer>
      {isMobile === false ? (
        <PlayerWeb />
      ) : (
        <PlayerMobile />
      )}
    </PlayerContainer>
  );
}
