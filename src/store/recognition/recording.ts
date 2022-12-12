import { atom, useRecoilState } from 'recoil';

const voiceRecordingState = atom<boolean>({
  key: 'voice-recording-state',
  default: false,
});

const useVoiceRecording = () => {
  const [voiceRecording, setVoiceRecording] = useRecoilState(voiceRecordingState);

  return { voiceRecording, setVoiceRecording };
};

export { useVoiceRecording };
