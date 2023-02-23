import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import { AbInfoLinkCard } from 'abair-components';
import { AbInfoHeader } from 'abair-components';

import { domain } from '@/config';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { ApplicationModel } from '@/models/application';
import { useBreakpointSize } from '@/store/viewDimensions';

function APIs() {
  const { t, i18n } = useTranslation();
  const [apis] = useState([
    {
      name: 'synthesis',
      description_en: 'generate synthetic voices in 3 dialects',
      description_ga: 'generate synthetic voices in 3 dialects',
      image: '#',
      url: `${domain}/apis/synthesis`,
    },
    {
      name: 'recogniton',
      description_en: 'speech to text',
      description_ga: 'speech to text',
      image: '#',
      url: `${domain}/apis/recognition`,
    },
    {
      name: 'grammar',
      description_en: 'automatically check for grammatical correctness',
      description_ga: 'automatically check for grammatical correctness',
      image: '#',
      url: `${domain}/apis/grammar`,
    },
  ]);

  const { breakpointSize } = useBreakpointSize();

  const handleClick = (url: string) => {
    window.location.replace(url);
  };

  return (
    <HorizontallyCenteredFlexBox pb={8}>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.APIs')} />
        <CenteredFlexBox>
          <Box sx={{ maxWidth: 'md', width: '100%' }} py={{ sm: 4, xs: 2 }}>
            <AbInfoHeader title={t('pageTitles.APIs')} />
          </Box>
        </CenteredFlexBox>

        <CenteredFlexBox mt={2}>
          <Box sx={{ maxWidth: 'md', width: '100%' }}>
            {apis.map((a: ApplicationModel, i: number) => (
              <AbInfoLinkCard
                key={i}
                onClick={() =>
                  a.name === 'An Bat Mírialta'
                    ? handleClick('/applications/bat-mirialta')
                    : handleClick(a.url)
                }
                name={a.name}
                description={i18n.language === 'en' ? a.description_en : a.description_ga}
                image={a.image}
                message={''}
                breakpointSize={breakpointSize}
              />
            ))}
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default APIs;
