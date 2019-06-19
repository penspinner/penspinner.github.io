import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Audio from '../Audio';

afterEach(cleanup);

test('changes audio volume to initialVolume', () => {
  const audioElement = <Audio data-testid="audio" initialVolume={0.5} />;
  const { getByTestId, rerender } = render(audioElement);
  rerender(audioElement);
  const audio = getByTestId('audio') as HTMLAudioElement;
  expect(audio.volume).toEqual(0.5);
});
