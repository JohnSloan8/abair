import { useRecoilValue } from 'recoil';

import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import AbSlider from '@/components/AbSlider';
import { synthesisVoiceSelected, useSynthesisPitch } from '@/store/synthesis/voiceOptions';

const AbSynthesisPitchCtrl = () => {
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);

  return (
    <AbSlider
      min={synthesisVoiceSelectedValue.pitchRange[0]}
      value={synthesisPitch}
      max={synthesisVoiceSelectedValue.pitchRange[1]}
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
