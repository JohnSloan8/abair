import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface InfoClickableCardProps {
  image: string;
  title: string;
  description: string;
}

const InfoClickableCard = ({ image, title, description }: InfoClickableCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="green iguana" />
        <CardContent sx={{ minHeight: 120 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InfoClickableCard;
