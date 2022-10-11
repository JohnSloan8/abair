/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import AbMap from '@/components/AbMap';
import {
  synthesisCountyState,
  synthesisVoiceIndexState,
  synthesisVoiceSelected,
  useSynthesisCounty,
} from '@/store/synthesis/voiceOptions';
import { frontPageSelectionBoxSize, useBreakpointSize } from '@/store/viewDimensions';

import irelandMapData from './simpleData';
import localeToCounty from './utils';

const AbMapCtrl = () => {
  const { synthesisCounty, setSynthesisCounty } = useSynthesisCounty();
  const [hoveringCounty, setHoveringCounty] = useState('');
  const gaeltachts = ['Donegal', 'Galway', 'Kerry'];
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const resetSynthesisVoiceIndex = useResetRecoilState(synthesisVoiceIndexState);
  const resetCounty = useResetRecoilState(synthesisCountyState);
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);
  const { breakpointSize } = useBreakpointSize();

  const handleMouseEnter = (county: string) => {
    gaeltachts.includes(county) ? setHoveringCounty(county) : setHoveringCounty('');
  };

  const handleMouseLeave = () => {
    setHoveringCounty('');
  };

  const handleClick = (county: string) => {
    if (county === synthesisCounty) {
      resetCounty();
    } else {
      setSynthesisCounty(county);
      gaeltachts.includes(county)
        ? localeToCounty(synthesisVoiceSelectedValue.locale) !== county
          ? resetSynthesisVoiceIndex()
          : null
        : null;
    }
  };

  useEffect(() => {
    console.log('synthesisCounty:', synthesisCounty);
  }, [synthesisCounty]);

  return (
    <AbMap
      height={
        breakpointSize === 'xs'
          ? frontPageSelectionBoxSizeValue - 55
          : frontPageSelectionBoxSizeValue - 85
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

  return null;
};

export default AbMapCtrl;
