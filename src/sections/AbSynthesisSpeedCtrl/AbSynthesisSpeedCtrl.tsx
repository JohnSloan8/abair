import SpeedIcon from '@mui/icons-material/Speed';

import { AbSlider } from 'abair-components';

import { useSynthesisSpeed, useSynthesisVoiceIndex } from '@/store/synthesis/voiceOptions';

const AbSynthesisSpeedCtrl = () => {
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const { synthesisVoiceIndex } = useSynthesisVoiceIndex();

  return synthesisVoiceIndex !== -1 ? (
    <AbSlider
      min={0.5}
      value={synthesisSpeed}
      defaultValue={1}
      max={1.5}
      onChange={(e) => setSynthesisSpeed(parseFloat((e.target as HTMLInputElement).value))}
      step={0.1}
      icon={SpeedIcon}
    />
  ) : null;
};

export default AbSynthesisSpeedCtrl;
