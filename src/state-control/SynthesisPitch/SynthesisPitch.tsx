import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import { AbSlider } from 'abair-components';

import { useSynthesisPitch, useSynthesisVoiceIndex } from '@/store/synthesis/voiceOptions';

const SynthesisPitch = () => {
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();

  return synthesisVoiceIndex !== -1 ? (
    <AbSlider
      min={0.5}
      value={synthesisPitch}
      max={1.5}
      onChange={(e) => {
        setSynthesisPitch(parseFloat((e.target as HTMLInputElement).value));
      }}
      step={0.1}
      icon={GraphicEqIcon}
      iconSize="medium"
      color="secondary.main"
    />
  ) : null;
};

export default SynthesisPitch;
