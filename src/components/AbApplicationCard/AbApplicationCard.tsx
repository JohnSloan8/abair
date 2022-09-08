import { useNavigate } from 'react-router-dom';

import { Card, CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ApplicationModel } from './types';

function AbApplicationCard({ name, url, description, image }: ApplicationModel) {
  const navigate = useNavigate();

  return (
    <Box m={{ sm: 0, xs: 0 }}>
      <CardActionArea onClick={() => navigate(url)}>
        <Card sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h5" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          </Box>
          <Box
            component="img"
            sx={{ height: 200 }}
            src={image}
            alt="Live from space album cover"
            display="flex"
          />
        </Card>
      </CardActionArea>
    </Box>
  );
}

export default AbApplicationCard;
