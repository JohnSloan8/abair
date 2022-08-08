import { Link } from 'react-router-dom';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface AppClickableCardProps {
  image?: string;
  title?: string;
  description?: string;
  path: string;
}

const AppClickableCard = ({ path, image, title, description }: AppClickableCardProps) => {
  return (
    <Card>
      <Link to={path}>
        <CardActionArea>
          <CardContent sx={{ position: 'absolute', p: 1 }}>
            <Typography gutterBottom variant="h6" color="secondary.dark">
              {title}
            </Typography>
            <Typography variant="body2" color="secondary.dark">
              {description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={image ? image : 'assets/images/misc/400x400_fallbackAbairImage.png'}
            alt="fallback image"
          />
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default AppClickableCard;
