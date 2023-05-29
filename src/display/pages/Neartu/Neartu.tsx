import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';

import Meta from '@/display/sections/Meta';
import {
  CenteredFlexBox,
  FlexBox,
  FullSizeBox,
  HorizontallyCenteredFlexBox,
} from '@/display/utils/flex';

import AACScreenshot from '/assets/images/misc/AACScreenshot.png';
import AACUse from '/assets/images/misc/AACUse.jpg';
import neartuTransparentLogo from '/assets/images/misc/neartuTransparent.png';
import Ronan from '/assets/images/misc/ronan_leitheoir_scaileain1.jpg';

function Neartu() {
  const { t } = useTranslation();

  return (
    <FullSizeBox height={'100vh'}>
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
        <Box maxWidth="md" py={1} px={4} sx={{ backgroundColor: '#DDD' }} borderRadius={4}>
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
                n-áiseanna agus tastáil orthu le linn forbartha
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">
                ar fhorleathnú na n-áiseanna i measc an phobail agus chun aiseolas a thabhairt
                d’fhoirne forbartha maidir le cothabháil agus leasú leanúnach
              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">
                ar shaineolas agus ar chomhairle phraiticiúil a chur ar fáil do lucht a úsáide, do
                thuismitheoirí, do mhúinteoirí, do theiripeoirí, agus eile, faoi áiseanna rochtana
                don Ghaeilge, agus comhairle i dtaca leis an taighde is déanaí ar shealbhú teanga
                agus ar bhuntaistí an dátheangachais
              </Typography>
            </ListItem>
          </List>
        </Box>
      </CenteredFlexBox>
      <HorizontallyCenteredFlexBox>
        <Box sx={{ maxWidth: 'md' }}>
          <FlexBox sx={{ maxWidth: 'md' }}>
            {/* <Box p={1}> */}
            <Image
              duration={1000}
              easing="ease-out"
              alt="Abair Applications"
              height={200}
              src={Ronan}
              showLoading
              style={{ padding: 4 }}
            />
            {/* </Box> */}
            <Image
              duration={1000}
              easing="ease-out"
              alt="Abair Applications"
              height={200}
              src={AACScreenshot}
              showLoading
              style={{ padding: 4 }}
            />
            <Image
              duration={1000}
              easing="ease-out"
              alt="Abair Applications"
              height={200}
              src={AACUse}
              showLoading
              style={{ padding: 4 }}
            />
          </FlexBox>
        </Box>
      </HorizontallyCenteredFlexBox>
    </FullSizeBox>
  );
}

export default Neartu;
