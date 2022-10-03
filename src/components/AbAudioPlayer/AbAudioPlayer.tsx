interface AbAudioPlayerProps {
  audioURL: string | undefined;
}

const AbAudioPlayer = ({ audioURL }: AbAudioPlayerProps) => {
  return <audio src={audioURL} controls />;
};

export default AbAudioPlayer;
