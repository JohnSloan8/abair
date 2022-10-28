/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import AbMap from '@/components/AbMap';
import {
  synthesisVoiceIndexState,
  synthesisVoiceSelected,
  useSynthesisCounty,
} from '@/store/synthesis/voiceOptions';
import { frontPageSelectionBoxSize, useBreakpointSize } from '@/store/viewDimensions';

import irelandMapData from './simpleData';

// import localeToCounty from './utils';

const AbMapCtrl = () => {
  const { synthesisCounty, setSynthesisCounty } = useSynthesisCounty();
  const [hoveringCounty, setHoveringCounty] = useState('');
  const gaeltachts = ['Ulster', 'Connemara', 'Munster'];
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const resetSynthesisVoiceIndex = useResetRecoilState(synthesisVoiceIndexState);
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);
  const { breakpointSize } = useBreakpointSize();
  const location = useLocation();

  const handleMouseEnter = (county: string) => {
    gaeltachts.includes(county) ? setHoveringCounty(county) : setHoveringCounty('');
  };

  const handleMouseLeave = () => {
    setHoveringCounty('');
  };

  const handleClick = (county: string) => {
    if (county !== synthesisCounty) {
      if (synthesisVoiceSelectedValue !== undefined) {
        setSynthesisCounty(county);
        gaeltachts.includes(county)
          ? synthesisVoiceSelectedValue.locale !== county
            ? resetSynthesisVoiceIndex()
            : null
          : null;
      } else {
        setSynthesisCounty(county);
        resetSynthesisVoiceIndex();
      }
    } else {
      alert('no voice selected');
    }
  };

  return (
    <AbMap
      height={
        location.pathname === '/speech-synthesis'
          ? breakpointSize === 'xs'
            ? 260
            : 340
          : breakpointSize === 'xs'
          ? frontPageSelectionBoxSizeValue - 90
          : frontPageSelectionBoxSizeValue - 65
      }
      irelandMapData={irelandMapData}
      gaeltachts={gaeltachts}
      hoveringCounty={hoveringCounty}
      selectedCounty={synthesisCounty}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleClick}
    />
  );
};

export default AbMapCtrl;
