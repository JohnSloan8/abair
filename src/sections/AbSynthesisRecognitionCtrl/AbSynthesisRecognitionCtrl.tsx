import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbSynthesisButtonsCtrl from '@/sections/AbSynthesisButtonsCtrl';
import { useRecognitionText } from '@/store/recognition';
import { useAwaitingSynthesis, useSynthesisText } from '@/store/synthesis';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisRecognitionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();
  const { recognitionText, setRecognitionText } = useRecognitionText();
  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { awaitingSynthesis } = useAwaitingSynthesis();
  return (
    <>
      {frontPageTabs === 0 ? (
        <Box
          px={{ sm: 4, xs: 1 }}
          pt={3}
          sx={{
            width: 550,
            backgroundColor: 'secondary.wafer',
            borderRadius: 3,
          }}
        >
          <AbTextField
            key={frontPageTabs}
            label="synthesis text"
            rows={4}
            disabled={awaitingSynthesis ? true : false}
            autoFocus={false}
            getter={synthesisText}
            onChangeHandler={(text) => {
              setSynthesisText(text);
            }}
          />

          <Box sx={{ width: '100%' }}>
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

          <Box sx={{ width: '100%', height: 60 }}>
            <AbRecognitionButtonsCtrl />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default AbSynthesisRecognitionCtrl;
