import Box from '@mui/material/Box';

const AbRecognitionVisualisationCtrl = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <canvas className="visualizer" height="60px" width="400px"></canvas>
    </Box>
  );
};

export default AbRecognitionVisualisationCtrl;
