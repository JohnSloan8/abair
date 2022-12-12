import { atom, useRecoilState } from 'recoil';

const awaitingSynthesisState = atom<boolean>({
  key: 'awaiting-synthesis-state',
  default: false,
});

const useAwaitingSynthesis = () => {
  const [awaitingSynthesis, setAwaitingSynthesis] = useRecoilState(awaitingSynthesisState);

  return { awaitingSynthesis, setAwaitingSynthesis };
};

export { useAwaitingSynthesis };
