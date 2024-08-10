import { useEffect } from 'react';
// @ts-ignore
import ConfettiGenerator from 'confetti-js';
import { NormalLayout } from '../../layouts/NormalLayout';
import { RouteButton } from '../../styles/elements';
import IMG from './converted_logo.png';
// @ts-ignore
import ThemeSound from './theme.mp3';

const WelcomePage = () => {
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  useEffect(() => {
    const themeSound = new Audio(ThemeSound);

    themeSound.loop = true;

    themeSound.play();

    return () => {
      themeSound.pause();
      themeSound.currentTime = 0;
    };
  }, []);

  return (
    <>
      <canvas id="my-canvas" style={{ position: 'absolute', zIndex: 2 }}></canvas>
      <div style={{ width: '60%', margin: 'auto' }}>
        <NormalLayout>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 30,
            }}
          >
            <img src={IMG} style={{ width: 700, cursor: 'pointer' }} alt="Start playing wakajki" />
            <RouteButton to="/choice" style={{ zIndex: 999 }}>
              Rozpocznij grę
            </RouteButton>
          </div>
        </NormalLayout>
      </div>
    </>
  );
};

export default WelcomePage;
