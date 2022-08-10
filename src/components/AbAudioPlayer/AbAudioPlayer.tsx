import ReactAudioPlayer from 'react-audio-player';

interface AbAudioPlayerProps {
  audioURL: string;
}

const AbAudioPlayer = ({ audioURL = 'assets/audio/LRMonoPhase4.wav' }: AbAudioPlayerProps) => {
  return <ReactAudioPlayer src={audioURL} autoPlay controls />;
};

export default AbAudioPlayer;
