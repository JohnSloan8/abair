import { atom, useRecoilState } from 'recoil';

const consentState = atom<boolean>({
  key: 'consent',
  default: false,
});

const useConsent = () => {
  const [consent, setConsent] = useRecoilState(consentState);
  return { consent, setConsent };
};

const showConsentState = atom<boolean>({
  key: 'show-consent',
  default: false,
});

const useShowConsent = () => {
  const [showConsent, setShowConsent] = useRecoilState(showConsentState);
  return { showConsent, setShowConsent };
};

export { useConsent, useShowConsent };
