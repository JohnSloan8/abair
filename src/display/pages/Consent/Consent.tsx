/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AbInfoHeader } from 'abair-components';

import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { getConsent } from '@/services/supabase/consent';
import { useSession } from '@/store/auth';
import { useConsent } from '@/store/consent';

import _consentForm from './consentForm.json';
import informationSheet from './informationSheet.json';

const Consent = () => {
  const { consent, setConsent } = useConsent();
  const { session } = useSession();
  const consentForm = _consentForm;

  useEffect(() => {
    if (session && !consent) {
      getConsent(session.user.id).then((c) => {
        if (c) {
          setConsent(c);
        }
      });
    }
    console.log('consent', consent);
    console.log('consent', Object.keys(consent));
    console.log('consentForm', consentForm);
  }, []);

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'md', width: '100%' }}>
        <Meta title="Consent and Consent" />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title="GDPR & Consent" />
        </Box>
        <Box p={2}>
          <Typography my={2} variant="h6" align="center">
            Information Sheet
          </Typography>
          <Card
            sx={{ width: '100%', height: '340px', backgroundColor: 'white', overflowY: 'scroll' }}
          >
            <CardContent sx={{ padding: 4 }}>
              {informationSheet.map((section, i) => (
                <Box key={i} py={1}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {section.title}
                  </Typography>
                  <Typography>{section.content}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        <Box p={2}>
          <Typography my={2} variant="h6" align="center">
            Consent
          </Typography>
          {Object.entries(consentForm).map(([k, v]) => (
            <Box key={k} my={2}>
              <Card>
                <CardContent sx={{ padding: 2 }}>
                  <Grid container py={1} spacing={2}>
                    <Grid item xs={8} sm={10} md={11}>
                      <Typography variant="body1">{v}</Typography>
                    </Grid>
                    <Grid item xs={4} sm={2} md={1}>
                      <CenteredFlexBox>
                        <Checkbox
                          onChange={(e) => {
                            setConsent({ ...consent, k: e.target.value });
                          }}
                        />
                      </CenteredFlexBox>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        {/* <Box p={2}>
          {consentForm['Consent'].map((c, i) => (
            <Grid container key={i}>
              <Grid item xs={8} sm={10} md={11}>
                <Typography variant="body1">{c.content}</Typography>
              </Grid>
              <Grid item xs={4} sm={2} md={1}>
                <FormControlLabel control={<Switch />} label={c.section} />
              </Grid>
            </Grid>
          ))}
        </Box> */}
      </Box>
    </HorizontallyCenteredFlexBox>
  );
};

export default Consent;
