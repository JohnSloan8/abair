import { atom, useRecoilState } from 'recoil';

const alertState = atom<boolean>({
  key: 'alert',
  default: true,
});

const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  return { alert, setAlert };
};

export { useAlert };
