import { useNavigate } from 'react-router-dom';

import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AbNewsStoryModel } from './types';

function AbNewsStory({ id, title, date, blurb, images }: AbNewsStoryModel) {
  const navigate = useNavigate();

  return (
    <Box m={{ sm: 2, xs: 1 }}>
      <CardActionArea onClick={() => navigate(`/news/${id}`)}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={images[0].url}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="body2">{date}</Typography>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
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
