/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import AbMap from '@/components/AbMap';
import {
  synthesisMapFilterState,
  synthesisVoiceIndexState,
  synthesisVoiceSelectedState,
  useSynthesisMapFilter,
} from '@/store/synthesis/voiceOptions';

import irelandMapData from './data';
import localeToCounty from './utils';

const AbMapCtrl = () => {
  const { synthesisMapFilter, setSynthesisMapFilter } = useSynthesisMapFilter();
  const [hoveringCounty, setHoveringCounty] = useState('');
  const gaeltachts = ['Donegal', 'Galway', 'Kerry'];
  const synthesisVoiceSelected = useRecoilValue(synthesisVoiceSelectedState);
  const resetSynthesisVoiceIndex = useResetRecoilState(synthesisVoiceIndexState);
  const resetMapFilter = useResetRecoilState(synthesisMapFilterState);

  const handleMouseEnter = (county: string) => {
    gaeltachts.includes(county) ? setHoveringCounty(county) : setHoveringCounty('');
  };

  const handleMouseLeave = () => {
    setHoveringCounty('');
  };

  const handleClick = (county: string) => {
    if (county === synthesisMapFilter) {
      resetMapFilter();
    } else {
      setSynthesisMapFilter(county);
      gaeltachts.includes(county)
        ? localeToCounty(synthesisVoiceSelected.locale) !== county
          ? resetSynthesisVoiceIndex()
          : null
        : null;
    }
  };

  return (
    <AbMap
      irelandMapData={irelandMapData}
      gaeltachts={gaeltachts}
      hoveringCounty={hoveringCounty}
      selectedCounty={localeToCounty(synthesisVoiceSelected.locale)}
      synthesisMapFilter={synthesisMapFilter}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleClick={handleClick}
    />
  );

  return null;
};

export default AbMapCtrl;
