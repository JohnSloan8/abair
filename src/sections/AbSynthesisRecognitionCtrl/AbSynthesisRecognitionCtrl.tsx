import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import { CenteredFlexBox } from '@/components/styled';
import AbAudioPlayerCtrl from '@/sections/AbAudioPlayerCtrl';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbSynthesisButtonsCtrl from '@/sections/AbSynthesisButtonsCtrl';
import { useRecognitionText } from '@/store/recognition';
import { useSynthesisText } from '@/store/synthesis';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisRecognitionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();
  const { recognitionText, setRecognitionText } = useRecognitionText();
  const { synthesisText, setSynthesisText } = useSynthesisText();

  return (
    <>
      {frontPageTabs === 0 ? (
        <Box>
          <AbTextField
            key={frontPageTabs}
            label="synthesis text"
            rows={4}
            disabled={false}
            autoFocus={false}
            getter={synthesisText}
            onChangeHandler={(text) => {
              setSynthesisText(text);
            }}
          />
          <CenteredFlexBox m={2}>
            <AbAudioPlayerCtrl variant="synthesis" />
          </CenteredFlexBox>
          <Box sx={{ width: '100%', height: 60 }}>
            <AbSynthesisButtonsCtrl />
          </Box>
        </Box>
      ) : frontPageTabs === 1 ? (
        <Box>
          <AbTextField
            key={frontPageTabs}
            label="recognition text"
            rows={4}
            disabled={false}
            autoFocus={false}
            getter={recognitionText}
            onChangeHandler={(text) => {
              setRecognitionText(text);
            }}
          />
          <CenteredFlexBox m={2}>
            <AbAudioPlayerCtrl variant="recognition" />
          </CenteredFlexBox>
          <Box sx={{ width: '100%', height: 60 }}>
            <AbRecognitionButtonsCtrl />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default AbSynthesisRecognitionCtrl;
