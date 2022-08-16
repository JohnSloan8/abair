import { Link } from 'react-router-dom';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import styles from './styles';

interface AbClickableCardProps {
  image?: string;
  title?: string;
  description?: string;
  path: string;
  variation: string;
}

const AbClickableCard = ({ path, image, title, description, variation }: AbClickableCardProps) => {
  const style = styles[variation];

  return (
    <Card sx={{ minWidth: style.minWidth, maxWidth: style.maxWidth }}>
      <Link to={path}>
        <CardActionArea>
          <CardContent sx={{ bottom: style.bottom, position: 'absolute', p: style.padding }}>
            <Typography
              gutterBottom
              /* variant={style.titleVariant}*/ variant={style.titleVariant}
              color={style.color}
            >
              {title}
            </Typography>
            <Typography variant="body2" color={style.color}>
              {description}
            </Typography>
          </CardContent>
          <CardMedia component="img" image={image ? image : style.image} alt="fallback image" />
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default AbClickableCard;
