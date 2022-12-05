import Box from '@mui/material/Box';

interface RecognitionProps {
  buttons: React.ReactNode;
  textbox: React.ReactNode;
  visualisation?: React.ReactNode;
}

const Recognition = ({ buttons, textbox, visualisation }: RecognitionProps) => {
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
      {visualisation}
      <Box sx={{ width: '100%', height: 50 }}>{buttons}</Box>
    </Box>
  );
};

export default Recognition;
