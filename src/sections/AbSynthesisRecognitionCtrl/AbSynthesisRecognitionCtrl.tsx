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
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      mx={1}
      sx={{
        width: 550,
        backgroundColor: frontPageTabs === 0 ? 'secondary.light' : 'warning.light',
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      {frontPageTabs === 0 ? (
        <Box sx={{ position: 'relative' }}>
          <AbTextField
            key={frontPageTabs}
            label="scríobh anseo"
            rows={4}
            disabled={awaitingSynthesis ? true : false}
            autoFocus={false}
            getter={synthesisText}
            onChangeHandler={(text) => {
              setSynthesisText(text);
            }}
          />

          <Box sx={{ width: '100%', height: 50 }}>
            <AbSynthesisButtonsCtrl />
          </Box>
        </Box>
      ) : frontPageTabs === 1 ? (
        <Box>
          <AbTextField
            key={frontPageTabs}
            label=""
            rows={4}
            disabled={false}
            autoFocus={false}
            getter={recognitionText}
            onChangeHandler={(text) => {
              setRecognitionText(text);
            }}
          />

          <Box sx={{ width: '100%', height: 50 }}>
            <AbRecognitionButtonsCtrl />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default AbSynthesisRecognitionCtrl;
