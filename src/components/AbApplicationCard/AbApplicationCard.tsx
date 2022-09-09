import { Card, CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ApplicationModel } from './types';

function AbApplicationCard({ name, url, description, image }: ApplicationModel) {
  return (
    <Box m={{ sm: 2, xs: 1 }}>
      <CardActionArea
        onClick={() => {
          window.location.replace(url);
        }}
      >
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
}

export default AbApplicationCard;
