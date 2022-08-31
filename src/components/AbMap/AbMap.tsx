/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useResetRecoilState } from 'recoil';

import { blue, green } from '@mui/material/colors';

import {
  synthesisVoiceState,
  useSynthesisMapFilter,
  useSynthesisVoice,
} from '@/store/synthesis/voiceOptions';

import irelandMapData from './data';
import localeToCounty from './utils';

const AbMap = () => {
  const unselectedColour = blue[300];
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
    <svg viewBox="0 0 1600 800">
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
  );
};

export default AbMap;
