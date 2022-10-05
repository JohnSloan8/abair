import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AbInfoHeaderProps {
  title: string;
  color?: '#000' | 'background.paper';
  description?: string;
}

function AbInfoHeader({ title, description, color = '#000' }: AbInfoHeaderProps) {
  return (
    <Box width="100%">
      <Typography
        color={color}
        sx={{ typography: { sm: 'h5', xs: 'h6' } }}
        mb={{ sm: 1, xs: 1 }}
        align="center"
      >
        {title}
      </Typography>
      <Typography
        sx={{ typography: { sm: 'body1', xs: 'body2' } }}
        mb={0}
        color={color}
        align="center"
      >
        {description}
      </Typography>
    </Box>
  );
}

export default AbInfoHeader;
