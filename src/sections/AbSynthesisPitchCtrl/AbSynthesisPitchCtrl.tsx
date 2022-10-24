import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import AbSlider from '@/components/AbSlider';
import { useSynthesisPitch } from '@/store/synthesis/voiceOptions';

const AbSynthesisPitchCtrl = () => {
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  return (
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
  );
};

export default AbSynthesisPitchCtrl;
