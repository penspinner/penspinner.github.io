import React from 'react';

interface IAudioProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  initialVolume: number;
}

const Audio = ({ initialVolume, ...otherProps }: IAudioProps) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = initialVolume;
    }
  }, []);

  return <audio {...otherProps} ref={audioRef} />;
};

Audio.defaultProps = {
  initialVolume: 0.15,
};

export default Audio;
