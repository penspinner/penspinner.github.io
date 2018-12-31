import React from 'react';

interface IAudioProps extends React.AudioHTMLAttributes<HTMLAudioElement> {
  children: React.ReactNode;
  initialVolume: number;
}

const Audio = ({ children, initialVolume, ...otherProps }: IAudioProps) => {
  const audioRef = React.createRef<HTMLAudioElement>();

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = initialVolume;
    }
  }, []);

  return (
    <audio {...otherProps} ref={audioRef}>
      {children}
    </audio>
  );
};

Audio.defaultProps = {
  initialVolume: 0.15,
};

export default Audio;
