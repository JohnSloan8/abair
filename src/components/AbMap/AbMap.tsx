/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useResetRecoilState } from 'recoil';

import Box from '@mui/material/Box';
import { blue, green } from '@mui/material/colors';

import {
  synthesisVoiceState,
  useSynthesisMapFilter,
  useSynthesisVoice,
} from '@/store/synthesis/voiceOptions';

import irelandMapData from './data';
import localeToCounty from './utils';

const AbMap = () => {
  const unselectedColour = blue[200];
  const voiceSelectedColour = blue[500];
  const countySelectedColour = blue[700];
  const hoverColour = blue[800];
  const restOfIrelandColour = green[200];
  const { synthesisMapFilter, setSynthesisMapFilter } = useSynthesisMapFilter();
  const [hoveringCounty, setHoveringCounty] = useState('');
  const gaeltachts = ['Donegal', 'Galway', 'Kerry'];
  const { synthesisVoice } = useSynthesisVoice();
  const resetSynthesisVoice = useResetRecoilState(synthesisVoiceState);

  const handleMouseEnter = (county: string) => {
    gaeltachts.includes(county) ? setHoveringCounty(county) : setHoveringCounty('');
  };

  const handleMouseLeave = () => {
    setHoveringCounty('');
  };

  const handleClick = (county: string) => {
    setSynthesisMapFilter(county);
    if (county !== localeToCounty(synthesisVoice.locale)) {
      resetSynthesisVoice();
    }
  };

  return (
    <Box m={{ xs: 4, sm: 1 }} my={{ xs: 0 }}>
      <svg viewBox="-100 0 800 800">
        <g onMouseLeave={handleMouseLeave}>
          {irelandMapData.map((c, i) => (
            <g
              key={i}
              fill={
                gaeltachts.includes(c.name)
                  ? c.name === hoveringCounty
                    ? hoverColour
                    : c.name === synthesisMapFilter
                    ? countySelectedColour
                    : localeToCounty(synthesisVoice.locale) === c.name
                    ? voiceSelectedColour
                    : unselectedColour
                  : restOfIrelandColour
              }
              onMouseEnter={() => handleMouseEnter(c.name)}
              onClick={() => {
                handleClick(c.name);
              }}
              style={{ cursor: 'pointer' }}
            >
              <path d={c.coordinates} />
            </g>
          ))}
        </g>
      </svg>
    </Box>
  );
};

export default AbMap;
