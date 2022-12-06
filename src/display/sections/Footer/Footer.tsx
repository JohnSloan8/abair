import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/display/utils/flex';

import cogg from '/assets/images/funders/COGG_logo_red.png';
import DCHG from '/assets/images/funders/DCHG_logo_small.png';
import S20 from '/assets/images/funders/S20.png';

function Footer() {
  const { i18n } = useTranslation();
  return (
    <CenteredFlexBox py={2} sx={{ position: 'relative', backgroundColor: '#eaeaea', bottom: 0 }}>
      <Box>
        <Grid
          container
          direction="row"
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
                src={DCHG}
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
                src={S20}
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
                src={cogg}
                alt="Logo COGG"
              />
            </a>
          </Grid>
        </Grid>
        {i18n.language === 'en' ? (
          <Typography color="text.main" align="center">
            Copyright © 2008&ndash;2022{' '}
            <a href="http://www.tcd.ie/slscs/clcs/psl/">Phonetics and Speech Laboratory</a>, Trinity
            College, Dublin, Ireland
          </Typography>
        ) : (
          <Typography color="text.main" align="center">
            Cóipcheart © 2008&ndash;2022{' '}
            <a href="http://www.tcd.ie/slscs/clcs/psl/">
              An tSaotharlann Foghraíochta agus Urlabhra
            </a>
            , Coláiste na Tríonóide, Baile Átha Cliath, Éire
          </Typography>
        )}
      </Box>
    </CenteredFlexBox>
  );
}

export default Footer;
