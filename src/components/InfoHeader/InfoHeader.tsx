import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface InfoHeaderProps {
  title: string;
  description: string;
}

function InfoHeader({ title, description }: InfoHeaderProps) {
  return (
    <Box p={4}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
      <Typography variant="body1" color="text.main" align="center">
        {description}
      </Typography>
    </Box>
  );
}

export default InfoHeader;
