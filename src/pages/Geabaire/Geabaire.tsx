import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/components/styled';

function Geabaire() {
  const { t } = useTranslation();

  return (
    <Box>
      <HorizontallyCenteredFlexBox sx={{ backgroundColor: 'primary.main' }}>
        <Box pb={4} sx={{ width: '100%', maxWidth: 'md' }}>
          <Meta title="Geabaire" />
          <AbInfoHeader title="Geabaire" color="background.paper" variant="front" />
          <CenteredFlexBox>
            <Box maxWidth="md" border={8} borderRadius={2} borderColor={'primary.light'}>
              <Image
                duration={1000}
                height={250}
                width={600}
                easing="ease-out"
                alt="Abair Applications"
                src="https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/applications/GeabaireInterfaceDemo.gif"
                bgColor="#fff"
                showLoading
              />
            </Box>
          </CenteredFlexBox>
          <Typography mt={4} variant={'h6'} align="center" color="background.paper">
            {t('pages.geabaire.description')}
          </Typography>
        </Box>
      </HorizontallyCenteredFlexBox>
      <Box py={8}>
        <CenteredFlexBox>
          <Typography variant={'h5'} align="center">
            {t('pages.geabaire.whatIsAACQuestion')}
          </Typography>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">{t('pages.geabaire.whatIsAACAnswer')}</Typography>
          </Box>
        </CenteredFlexBox>
      </Box>

      <Box py={8} sx={{ backgroundColor: 'primary.light' }}>
        <CenteredFlexBox>
          <Box maxWidth="md">
            <Typography align="center" variant={'h5'}>
              {t('pages.geabaire.exampleVideo')}
            </Typography>
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox py={4}>
          <video width="500" controls>
            <source src="https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/applications/Geabairedemo.mov" />
            Your browser does not support the video tag.
          </video>
        </CenteredFlexBox>
      </Box>

      <Box py={8}>
        <CenteredFlexBox>
          <Typography variant={'h5'} align="center">
            {t('pages.geabaire.projectDetailsTitle')}
          </Typography>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">{t('pages.geabaire.projectDetailsDescription')}</Typography>
          </Box>
        </CenteredFlexBox>
      </Box>

      <Box py={8} sx={{ backgroundColor: 'primary.wafer' }}>
        <CenteredFlexBox>
          <Typography variant={'h5'} align="center">
            {t('pages.geabaire.contactDetailsTitle')}
          </Typography>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">Julie Cummins</Typography>
            <Typography variant="body2" align="center">
              jucummin@tcd.ie
            </Typography>
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox mt={4}>
          <Box maxWidth="md">
            <Typography align="center">Emily Barnes</Typography>
            <Typography variant="body2" align="center">
              barnesem@tcd.ie
            </Typography>
          </Box>
        </CenteredFlexBox>
      </Box>
    </Box>
  );
}

export default Geabaire;
