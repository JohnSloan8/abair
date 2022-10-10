import { useState } from 'react';

import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbButton from '../AbButton';
import { CenteredFlexBox } from '../styled';

interface AbPublicationProps {
  title: string;
  abstract: string;
  year_published: number;
  authors: string[];
  handleDownload: () => void;
}

function AbNewsStory({
  title,
  abstract,
  year_published,
  authors,
  handleDownload,
}: AbPublicationProps) {
  const [showAllAbstract, setShowAllAbstract] = useState(false);

  return (
    <Box m={{ sm: 2, xs: 1 }}>
      <Card sx={{ display: 'flex' }}>
        {/* <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={images[0].url}
            alt="Live from space album cover"
          /> */}
        <Box>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h6">{title}</Typography>
            <Grid mb={2} container justifyContent="flex-start">
              <Typography variant="body2">{year_published} - &nbsp;</Typography>

              {authors.map((a, j) => (
                <Typography variant="body2" key={j}>
                  {a},&nbsp;&nbsp;
                </Typography>
              ))}
            </Grid>

            {showAllAbstract ? (
              <Box>
                <Typography my={1} variant="subtitle1" color="text.primary">
                  {abstract}
                </Typography>
                <CenteredFlexBox my={3}>
                  <AbButton
                    label={'download full text (pdf)'}
                    variation={'voice'}
                    onClick={handleDownload}
                  ></AbButton>
                </CenteredFlexBox>
                <CardActionArea onClick={() => setShowAllAbstract(false)}>
                  <Typography py={1} variant="body2" color="text.secondary">
                    see less
                  </Typography>
                </CardActionArea>
              </Box>
            ) : (
              <Box>
                <Typography my={1} variant="subtitle1" color="text.primary">
                  {`${abstract.slice(0, 100)}...`}
                </Typography>
                <CardActionArea onClick={() => setShowAllAbstract(true)}>
                  <Typography py={1} variant="body2" color="text.secondary">
                    read more
                  </Typography>
                </CardActionArea>
              </Box>
            )}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default AbNewsStory;
