import Box from '@mui/material/Box';

import { useVoiceRecording } from '@/store/recognition';
import { CenteredFlexBox } from '@/utils/flex';

interface AbRecognitionCtrlProps {
  buttons: React.ReactNode;
  textbox: React.ReactNode;
  visualisation?: React.ReactNode;
}

const AbRecognitionCtrl = ({ buttons, textbox, visualisation }: AbRecognitionCtrlProps) => {
  const { voiceRecording } = useVoiceRecording();

  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      sx={{
        width: '100%',
        backgroundColor: 'warning.light',
        borderRadius: { sm: 3, xs: 0 },
        boxShadow: { sm: 6, xs: 3 },
        position: 'relative',
      }}
    >
      {textbox}
      {voiceRecording && (
        <CenteredFlexBox sx={{ width: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', bottom: { sm: 16, xs: -5 } }}>{visualisation}</Box>
        </CenteredFlexBox>
      )}
      <Box sx={{ width: '100%', height: 50 }}>{buttons}</Box>
    </Box>
  );
};

export default AbRecognitionCtrl;
