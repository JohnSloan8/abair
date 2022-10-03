import { useRecoilValue } from 'recoil';

import SpeedIcon from '@mui/icons-material/Speed';

import AbSlider from '@/components/AbSlider';
import { synthesisVoiceSelected, useSynthesisSpeed } from '@/store/synthesis/voiceOptions';

const AbSynthesisSpeedCtrl = () => {
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);

  return (
    <AbSlider
      min={synthesisVoiceSelectedValue.speedRange[0]}
      value={synthesisSpeed}
      max={synthesisVoiceSelectedValue.speedRange[1]}
      handleSliderChange={(e) =>
        setSynthesisSpeed(parseFloat((e.target as HTMLInputElement).value))
      }
      step={0.1}
      icon={SpeedIcon}
      control="speed"
      color="primary.main"
    />
  );
};

export default AbSynthesisSpeedCtrl;
