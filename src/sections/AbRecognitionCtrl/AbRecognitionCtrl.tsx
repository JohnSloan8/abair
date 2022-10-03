import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import { useRecognitionText } from '@/store/recognition';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisRecognitionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();
  const { recognitionText, setRecognitionText } = useRecognitionText();

  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      mx={1}
      sx={{
        width: 550,
        backgroundColor: frontPageTabs === 0 ? 'secondary.light' : 'primary.light',
        borderRadius: 3,
        boxShadow: 6,
        position: 'relative',
      }}
    >
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
  );
};

export default AbSynthesisRecognitionCtrl;
