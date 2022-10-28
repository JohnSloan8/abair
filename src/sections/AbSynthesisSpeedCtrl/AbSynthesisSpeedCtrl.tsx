import SpeedIcon from '@mui/icons-material/Speed';

import AbSlider from '@/components/AbSlider';
import { useSynthesisSpeed, useSynthesisVoiceIndex } from '@/store/synthesis/voiceOptions';

const AbSynthesisSpeedCtrl = () => {
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();

  return synthesisVoiceIndex !== -1 ? (
    <AbSlider
      min={0.5}
      value={synthesisSpeed}
      max={1.5}
      handleSliderChange={(e) =>
        setSynthesisSpeed(parseFloat((e.target as HTMLInputElement).value))
      }
      step={0.1}
      icon={SpeedIcon}
      control="speed"
      color="secondary.main"
    />
  ) : null;
};

export default AbSynthesisSpeedCtrl;
