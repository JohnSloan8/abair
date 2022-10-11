import Box from '@mui/material/Box';

interface AbRecognitionCtrlProps {
  buttons: React.ReactNode;
  textbox: React.ReactNode;
}

const AbRecognitionCtrl = ({ buttons, textbox }: AbRecognitionCtrlProps) => {
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

      <Box sx={{ width: '100%', height: 50 }}>{buttons}</Box>
    </Box>
  );
};

export default AbRecognitionCtrl;
