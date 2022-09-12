import Box from '@mui/material/Box';

interface AbTranscriptionContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const AbTranscriptionContainer = ({ children }: AbTranscriptionContainerProps) => {
  return (
    <Box p={4} sx={{ backgroundColor: '#f00' }}>
      {children}
    </Box>
  );
};

export default AbTranscriptionContainer;
