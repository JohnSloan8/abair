import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '../styled';
import styles from './styles';

interface AbInfoHeaderProps {
  variant?: 'front' | 'main';
  title: string;
  color?: 'text.main' | 'background.paper';
  description?: string;
}

function AbInfoHeader({
  variant = 'main',
  title,
  description,
  color = 'text.main',
}: AbInfoHeaderProps) {
  const variation = styles[variant];
  return (
    <CenteredFlexBox
      width="100%"
      maxWidth="md"
      // height={{ sm: variation.heights[0], xs: variation.heights[1] }}
      px={1}
    >
      <Grid container direction={'column'}>
        <Typography
          color={color}
          sx={{
            typography: {
              sm: variation.titleFonts[0],
              xs: variation.titleFonts[1],
            },
          }}
          align="center"
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            pt={{ sm: 4, xs: 2 }}
            sx={{
              typography: {
                sm: variation.descriptionFonts[0],
                xs: variation.descriptionFonts[1],
              },
            }}
            color={color}
            align="center"
          >
            {description}
          </Typography>
        ) : null}
      </Grid>
    </CenteredFlexBox>
  );
}

export default AbInfoHeader;
