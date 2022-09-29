import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import { isRecognitionAudioEmpty, useRecognitionAudio } from '@/store/recognition';
import { isSynthesisAudioEmpty, useSynthesisAudio } from '@/store/synthesis';

interface AbAudioPlayerCtrlProps {
  variant: 'recognition' | 'synthesis';
}

const AbAudioPlayerCtrl = ({ variant }: AbAudioPlayerCtrlProps) => {
  const { recognitionAudio } = useRecognitionAudio();
  const { synthesisAudio } = useSynthesisAudio();
  const emptySynthesisAudio = useRecoilValue(isSynthesisAudioEmpty);
  const emptyRecognitionAudio = useRecoilValue(isRecognitionAudioEmpty);

  if (variant === 'recognition') {
    return (
      <Box sx={{ visibility: emptyRecognitionAudio ? 'hidden' : 'visible' }}>
        <AbAudioPlayer audioURL={recognitionAudio} />
      </Box>
    );
  } else if (variant === 'synthesis') {
    return (
      <Box sx={{ visibility: emptySynthesisAudio ? 'hidden' : 'visible' }}>
        <AbAudioPlayer audioURL={synthesisAudio} />
      </Box>
    );
  }

  return null;
};

export default AbAudioPlayerCtrl;
