import { Card, CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AbApplicationCardProps {
  name: string;
  handleClick: () => void;
  image: string;
  description: string;
}

const AbApplicationCard = ({ name, handleClick, description, image }: AbApplicationCardProps) => {
  return (
    <Box m={{ sm: 2, xs: 1 }}>
      <CardActionArea onClick={handleClick}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <Box component="img" sx={{ height: 200 }} src={image} alt="app image" display="flex" />
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default AbApplicationCard;
