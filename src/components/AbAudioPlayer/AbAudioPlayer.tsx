import ReactAudioPlayer from 'react-audio-player';

interface AbAudioPlayerProps {
  audioURL: string | undefined;
}

const AbAudioPlayer = ({ audioURL }: AbAudioPlayerProps) => {
  return <ReactAudioPlayer src={audioURL} autoPlay controls />;
};

export default AbAudioPlayer;
