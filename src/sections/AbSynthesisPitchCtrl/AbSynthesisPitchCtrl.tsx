import { useEffect } from 'react';

import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import { AbSlider } from 'abair-components';

import { useSynthesisPitch, useSynthesisVoiceIndex } from '@/store/synthesis/voiceOptions';

const AbSynthesisPitchCtrl = () => {
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();

  useEffect(() => {
    console.log('synthesisPitch:', synthesisPitch);
  }, [synthesisPitch]);

  return synthesisVoiceIndex !== -1 ? (
    <AbSlider
      min={0.5}
      value={synthesisPitch}
      max={1.5}
      onChange={(e) => {
        console.log('e', e);
        setSynthesisPitch(parseFloat((e.target as HTMLInputElement).value));
      }}
      step={0.1}
      icon={GraphicEqIcon}
      iconSize="medium"
      color="secondary.main"
    />
  ) : null;
};

export default AbSynthesisPitchCtrl;
