import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AbInfoHeaderProps {
  title: string;
  description?: string;
}

function AbInfoHeader({ title, description }: AbInfoHeaderProps) {
  return (
    <Box pt={{ sm: 4, xs: 1 }} pb={{ sm: 2, xs: 0 }}>
      <Typography sx={{ typography: { sm: 'h4', xs: 'h5' } }} mb={{ sm: 2, xs: 1 }} align="center">
        {title}
      </Typography>
      <Typography
        sx={{ typography: { sm: 'body1', xs: 'body2' } }}
        mb={0}
        color="text.main"
        align="center"
      >
        {description}
      </Typography>
    </Box>
  );
}

export default AbInfoHeader;
