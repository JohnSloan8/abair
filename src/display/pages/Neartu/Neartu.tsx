import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { AbButton, AbPopup } from 'abair-components';
import Image from 'mui-image';

import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, FlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { validateEmail } from '@/display/utils/validators';
import { createInterest } from '@/services/supabase/neartu';

import AACClassroom from '/assets/images/misc/AACClassroom-min.jpg';
import AACScreenshot from '/assets/images/misc/AACScreenshot-min.png';
import UsingAAC from '/assets/images/misc/AACUse.jpg';
import neartuTransparentLogo from '/assets/images/misc/neartuTransparent.png';
import Ronan from '/assets/images/misc/ronan_leitheoir_scaileain1-min.jpg';
import screenreader from '/assets/images/misc/screenreader-min.png';

function Neartu() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailOK, setEmailOK] = useState(false);
  const [interest, setInterest] = useState('');
  const [otherInfo, setOtherInfo] = useState('');
  const [consent, setConsent] = useState(false);
  const [showSubmittedConfirmation, setShowSubmittedConfirmation] = useState(false);

  useEffect(() => {
    const _emailOK = validateEmail(email);
    if (_emailOK) {
      setEmailOK(true);
    } else {
      setEmailOK(false);
    }
  }, [email]);

  const submitRequest = () => {
    console.log('request submitted');
    createInterest(name, email, interest, otherInfo, consent).then((response) => {
      setEmail('');
      setName('');
      setInterest('');
      setOtherInfo('');
      setConsent(false);
      setShowSubmittedConfirmation(true);
      console.log('response:', response);
    });
  };

  return (
    <Box>
      <HorizontallyCenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'md' }} mt={-6}>
          <Meta title={t('pageTitles.neartu')} />
          <HorizontallyCenteredFlexBox>
            <Image
              duration={1000}
              width={340}
              height={340}
              easing="ease-out"
              alt="Abair Applications"
              src={neartuTransparentLogo}
              showLoading
            />
          </HorizontallyCenteredFlexBox>
        </Box>
      </HorizontallyCenteredFlexBox>
      <CenteredFlexBox mt={-6} flexDirection="column" mb={2}>
        <Box maxWidth="lg" py={4} px={2} sx={{ backgroundColor: '#EEE' }}>
          <Typography variant="h6" align="center" fontWeight="bold" my={2}>
            Líonra NEARTÚ ag obair ar son cearta comhionanna do dhaoine faoi mhíchumas
          </Typography>
          <Typography variant="body1">
            Tá tionscadal ABAIR.ie i gColáiste na Tríonóide ag cur Teicneolaíochtaí Urlabhra agus
            Teanga ar fáil don Ghaeilge. Tá rochtain do chách mar bhun-aidhm ag ABAIR agus forbairtí
            á ndéanamh ar áiseanna rochtana agus oideachais. Is léir go bhfuil éileamh air seo ó na
            fiosrúcháin rialta a thagann isteach cheana féin. Sa Phlean Digiteach don Ghaeilge, tá
            béim ar an ngá atá le taighde agus le forbairtí teicneolaíochta a chinnteoidh rochtain
            ar an teanga dóibh siúd le míchumas. Moltar líonraí abhcóideachta a bhunú a thacóidh
            leis an bhforbairt ar áiseanna rochtana. Le déanaí dhaingnigh Rialtas na hÉireann an
            Coinbhinsiún maidir le Cearta Daoine atá faoi Mhíchumas. Mar fhreagra ar an riachtanas
            seo, díreoidh líonra NEARTÚ:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">
                ar chumarsáid le foirne forbartha na mbogearraí, maidir le riachtanais, dearadh na
                n-áiseanna agus tastáil orthu le linn forbartha.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">
                ar fhorleathnú na n-áiseanna i measc an phobail agus chun aiseolas a thabhairt
                d&apos;fhoirne forbartha maidir le cothabháil agus leasú leanúnach.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">
                ar shaineolas agus ar chomhairle phraiticiúil a chur ar fáil do lucht a úsáide, do
                thuismitheoirí, do mhúinteoirí, do theiripeoirí, agus eile, faoi áiseanna rochtana
                don Ghaeilge, agus comhairle i dtaca leis an taighde is déanaí ar shealbhú teanga
                agus ar bhuntaistí an dátheangachais.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </CenteredFlexBox>
      <HorizontallyCenteredFlexBox>
        <FlexBox>
          <Grid container direction="row" justifyContent={'space-around'}>
            <Grid>
              <Image
                duration={1000}
                easing="ease-out"
                alt="Abair Applications"
                height={204}
                src={Ronan}
                showLoading
                style={{ padding: 4 }}
              />
            </Grid>
            <Grid item>
              <Image
                duration={1000}
                easing="ease-out"
                alt="Abair Applications"
                height={204}
                src={screenreader}
                showLoading
                style={{ padding: 4 }}
              />
            </Grid>
            <Grid item>
              <Image
                duration={1000}
                easing="ease-out"
                alt="Abair Applications"
                height={204}
                src={UsingAAC}
                showLoading
                style={{ padding: 4 }}
              />
            </Grid>
            <Grid item>
              <Image
                duration={1000}
                easing="ease-out"
                alt="Abair Applications"
                height={205}
                src={AACScreenshot}
                showLoading
                style={{ padding: 4 }}
              />
            </Grid>

            <Grid item>
              <Image
                duration={1000}
                easing="ease-out"
                alt="Abair Applications"
                height={204}
                src={AACClassroom}
                showLoading
                style={{ padding: 4 }}
              />
            </Grid>
          </Grid>
        </FlexBox>
      </HorizontallyCenteredFlexBox>
      <HorizontallyCenteredFlexBox mt={2} mb={4}>
        <Box width={'100%'} maxWidth="lg">
          <Grid container>
            <Grid item lg={6} md={12}>
              <CenteredFlexBox
                py={2}
                px={4}
                sx={{ backgroundColor: '#EEE' }}
                flexDirection="column"
              >
                <Box maxWidth="lg" py={1} px={2} sx={{ backgroundColor: '#EEE' }}>
                  <Typography variant="body1">
                    Ag an ócáid seo roinnfear eolas faoi na háiseanna atá á bhforbairt ag ABAIR i
                    réimse na rochtana, go háirithe
                  </Typography>
                  <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item' }}>
                      <Typography variant="body1">
                        Léitheoir scáileáin dóibh siúd le míchumas radhairc
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      <Typography variant="body1">
                        Geabaire, córas AAC dóibh siúd gan cumas urlabhra
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      <Typography variant="body1">
                        An togra PRINTTS a dhíreoidh orthu siúd le deacrachtaí litearthachta
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                      <Typography variant="body1">
                        Mol an Óige - áis d&apos;fheasacht na fóineolaíochta agus bunús na
                        litearthachta - a bheidh cabhrach dóibh siúd le disléicse
                      </Typography>
                    </ListItem>
                  </List>
                  <Typography variant="body1">
                    AIs gá go mbeidh na teicneolaíochtaí urlabhra agus teanga seo ar fáil ar réimse
                    leathan ardán, saorearraí agus gléasanna eile. Tá sé mar aidhm againn go
                    spreagfaidh líonra NEARTÚ rannpháirtíocht ghníomhach trí Ghaeilge do chách.
                  </Typography>
                  <Typography variant="body1">
                    Léarscáil: Seomra TRiSS (Trinity Research in Social Sciences), C6.002 ar an 6ú
                    urlár i bhFoirgneamh na nEalaíon, Coláiste na Tríonóide
                  </Typography>
                </Box>
              </CenteredFlexBox>
            </Grid>
            <Grid item lg={6} md={12} width={'100%'}>
              <HorizontallyCenteredFlexBox sx={{ position: 'relative' }}>
                {showSubmittedConfirmation && (
                  <CenteredFlexBox
                    sx={{
                      zIndex: 9999,
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      width: '100%',
                      height: '100%',
                    }}
                    p={1}
                  >
                    <AbPopup
                      title={''}
                      description={t('pages.neartu.requestSubmitted')}
                      condition1=""
                      borderColor="secondary.main"
                      buttons={[{ text: 'ok', color: 'primary' }]}
                      onClick={() => {
                        setShowSubmittedConfirmation(false);
                      }}
                    />
                  </CenteredFlexBox>
                )}
                <Box width={400}>
                  <Typography variant="h6" fontWeight="bold" align="center" my={2}>
                    {t('pages.neartu.expressionInterest')}
                  </Typography>
                  <Box m={2}>
                    <TextField
                      required
                      fullWidth
                      id={`NeartuName`}
                      label={t('pages.auth.name')}
                      name="name"
                      autoComplete="name"
                      type="text"
                      placeholder={t('pages.auth.name')}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      helperText={name.length < 2 && name !== '' ? t('pages.neartu.validName') : ''}
                      sx={{ input: { backgroundColor: '#fff' } }}
                    />
                  </Box>
                  <Box m={2}>
                    <TextField
                      required
                      fullWidth
                      id={`NeartuEmail`}
                      label={t('pages.auth.emailAddress')}
                      name="email"
                      autoComplete="email"
                      type="email"
                      placeholder={t('pages.auth.emailAddress')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      helperText={!emailOK && email !== '' ? t('pages.auth.validEmail') : ''}
                      sx={{ input: { backgroundColor: '#fff' } }}
                    />
                  </Box>
                  <Box m={2}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      id={`NeartuInterest`}
                      label={t('pages.neartu.interest')}
                      name="interest"
                      type="text"
                      placeholder={t('pages.neartu.interestCategories')}
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      sx={{ input: { backgroundColor: '#fff' } }}
                    />
                  </Box>
                  <Box m={2}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      id={`NeartuOtherInfo`}
                      label={t('pages.neartu.otherInfo')}
                      name="otherInfo"
                      type="text"
                      placeholder={t('pages.neartu.otherInfo')}
                      value={otherInfo}
                      onChange={(e) => setOtherInfo(e.target.value)}
                      sx={{ input: { backgroundColor: '#fff' } }}
                    />
                  </Box>
                  <Box m={2}>
                    <Grid container>
                      <Grid item xs={10}>
                        <Typography variant="body2" ml={1}>
                          {t('pages.neartu.consent')}
                        </Typography>
                      </Grid>

                      <Grid item xs={2}>
                        <FlexBox justifyContent="flex-end">
                          <Checkbox
                            color={'secondary'}
                            onChange={(e) => setConsent(e.target.checked)}
                            checked={consent}
                          />
                        </FlexBox>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box m={2}>
                    <AbButton
                      borderRadius={0}
                      disabled={!consent || !emailOK || name.length < 2}
                      label={t('pages.neartu.send')}
                      onClick={() => {
                        submitRequest();
                      }}
                      selected={true}
                      color={'secondary'}
                      fullWidth={true}
                    />
                  </Box>
                </Box>
              </HorizontallyCenteredFlexBox>
            </Grid>
          </Grid>
        </Box>
      </HorizontallyCenteredFlexBox>
    </Box>
  );
}

export default Neartu;
