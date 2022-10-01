import Box from '@mui/material/Box';

interface AbCoverProps {
  opacity: number;
}

const AbCover = ({ opacity }: AbCoverProps) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: `rgba(0,0,0,${opacity.toString()})`,
      }}
    ></Box>
  );
};

export default AbCover;
