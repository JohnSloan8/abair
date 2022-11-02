import { useNavigate } from 'react-router-dom';

import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ImageDataModel {
  url: string;
}

interface AbNewsStoryProps {
  id: number;
  title: string;
  date: string;
  blurb: string;
  body: string;
  images: ImageDataModel[];
}

function AbNewsStory({ id, title, date, blurb, images }: AbNewsStoryProps) {
  const navigate = useNavigate();

  return (
    <Box m={{ sm: 2, xs: 1 }}>
      <CardActionArea onClick={() => navigate(`/dev/news/${id}`)}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 180, minWidth: 180, maxWidth: 180 }}
            image={images.length !== 0 ? images[0].url : ''}
            alt="news story image"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="body2">{date}</Typography>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="subtitle2" color="text.secondary" component="div">
                {blurb}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </CardActionArea>
    </Box>
  );
}

export default AbNewsStory;
