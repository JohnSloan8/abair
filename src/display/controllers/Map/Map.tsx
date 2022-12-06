/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { AbMap } from 'abair-components';

import { useSynthesisCounty } from '@/store/synthesis/voiceOptions';
import { frontPageSelectionBoxSize, useBreakpointSize } from '@/store/viewDimensions';

const Map = () => {
  const { synthesisCounty, setSynthesisCounty } = useSynthesisCounty();
  const gaeltachts = ['Ulster', 'Connemara', 'Munster'];
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);
  const { breakpointSize } = useBreakpointSize();
  const location = useLocation();

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
      gaeltachts={gaeltachts}
      selectedCounty={synthesisCounty}
      setSelectedCounty={(county) => setSynthesisCounty(county)}
    />
  );
};

export default Map;
