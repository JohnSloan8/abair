import { atom, useRecoilState } from 'recoil';

const progressBarRunningState = atom<string>({
  key: 'progress-bar-running-state',
  default: '',
});

const useProgressBarRunning = () => {
  const [progressBarRunning, setProgressBarRunning] = useRecoilState(progressBarRunningState);

  return { progressBarRunning, setProgressBarRunning };
};

export { useProgressBarRunning };
