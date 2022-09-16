interface AbAudioPlayerProps {
  audioURL: string | undefined;
}

const AbAudioPlayer = ({ audioURL }: AbAudioPlayerProps) => {
  return <audio src={audioURL} autoPlay controls />;
};

export default AbAudioPlayer;
