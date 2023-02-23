import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { AbInfoLinkCard } from 'abair-components';
import { AbInfoHeader } from 'abair-components';

import { domain } from '@/config';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { ApplicationModel } from '@/models/application';
import { useBreakpointSize } from '@/store/viewDimensions';

function Corpora() {
  const { t, i18n } = useTranslation();

  const [corpora] = useState([
    {
      name: 'Oireachtas, November 2022',
      description_en: '84 participant recordings from the van',
      description_ga: '84 participant recordings from the van',
      image: '#',
      url: `${domain}/apis/synthesis`,
    },
    {
      name: 'PhonLab, February 2022',
      description_en: 'Sibeal 300 sentences from corpus x',
      description_ga: 'Sibeal 300 sentences from corpus x',
      image: '#',
      url: `${domain}/apis/recognition`,
    },
    {
      name: 'Oireachtas, November 2021',
      description_en: '56 participant recordings from the hotel',
      description_ga: '56 participant recordings from the hotel',
      image: '#',
      url: `${domain}/apis/grammar`,
    },
    {
      name: 'PhonLab, August 2021',
      description_en: 'Padraig 278 recordings from lab',
      description_ga: 'Padraig 278 recordings from lab',
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

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Age</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="under 18" control={<Radio />} label="under 18" />
            <FormControlLabel value="18-34" control={<Radio />} label="18-34" />
            <FormControlLabel value="35-50" control={<Radio />} label="35-50" />
            <FormControlLabel value="50+" control={<Radio />} label="50+" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Location</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Oireachtas" control={<Radio />} label="Oireachtas" />
            <FormControlLabel value="Lab" control={<Radio />} label="Lab" />
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
          </RadioGroup>
        </FormControl>

        <CenteredFlexBox mt={2}>
          <Box sx={{ maxWidth: 'md', width: '100%' }}>
            {corpora.map((a: ApplicationModel, i: number) => (
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

export default Corpora;
