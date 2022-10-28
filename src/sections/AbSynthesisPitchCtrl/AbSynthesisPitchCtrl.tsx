import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import AbSlider from '@/components/AbSlider';
import { useSynthesisPitch, useSynthesisVoiceIndex } from '@/store/synthesis/voiceOptions';

const AbSynthesisPitchCtrl = () => {
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();

  return synthesisVoiceIndex !== -1 ? (
    <AbSlider
      min={0.5}
      value={synthesisPitch}
      max={1.5}
      handleSliderChange={(e) =>
        setSynthesisPitch(parseFloat((e.target as HTMLInputElement).value))
      }
      step={0.1}
      icon={GraphicEqIcon}
      control="pitch"
      color="secondary.main"
    />
  ) : null;
};

export default AbSynthesisPitchCtrl;
