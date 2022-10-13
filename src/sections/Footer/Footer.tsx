import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/components/styled';

function Footer() {
  return (
    <CenteredFlexBox sx={{ position: 'relative', backgroundColor: '#eaeaea', bottom: 0 }}>
      <Box>
        <Grid
          container
          direction="row"
          py={2}
          spacing={{ sm: 4, xs: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <a href="https://www.chg.gov.ie/">
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: 200, sm: 200 },
                }}
                alt="Logo of The Department of Culture Heritage and the Gaeltacht"
                src="/assets/images/funders/DCHG_logo_small.png"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.chg.gov.ie/gaeltacht/20-year-strategy-for-the-irish-language-2010-2030/">
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: 200, sm: 200 },
                }}
                src="/assets/images/funders/S20.png"
                alt="Logo of the 20 years strategy of Irish"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.cogg.ie/en/">
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: 200, sm: 200 },
                }}
                src="/assets/images/funders/COGG_logo_red.png"
                alt="Logo COGG"
              />
            </a>
          </Grid>
        </Grid>

        <Typography color="text.main" align="center">
          Copyright © 2008&ndash;2022{' '}
          <a href="http://www.tcd.ie/slscs/clcs/psl/">Phonetics and Speech Laboratory</a>, Trinity
          College, Dublin, Ireland
        </Typography>
      </Box>
    </CenteredFlexBox>
  );
}

export default Footer;
