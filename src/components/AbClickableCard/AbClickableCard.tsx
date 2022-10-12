import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import styles from './styles';
import { AbClickableCardProps } from './styles';

const AbClickableCard = ({
  image,
  title,
  description,
  handleClickEvent = () => {
    console.log('clicked Speech Synthesis');
  },
  variation,
}: AbClickableCardProps) => {
  const style = styles[variation];
  return (
    <Card sx={{ height: style.height, width: style.width }}>
      <CardActionArea onClick={handleClickEvent}>
        <CardContent
          sx={{
            bottom: style.bottom,
            position: 'absolute',
            p: style.padding,
            zIndex: 1000,
          }}
        >
          <Typography gutterBottom variant={style.titleVariant} color={style.color}>
            {title}
          </Typography>
          <Typography variant="body2" color={style.color}>
            {description}
          </Typography>
        </CardContent>
        <CardMedia component="img" image={image ? image : style.image} alt="fallback image" />
      </CardActionArea>
    </Card>
  );
};

export default AbClickableCard;
