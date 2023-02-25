import { atom, useRecoilState } from 'recoil';

import { Database } from '../../../types/supabase';

const consentState = atom<Database['public']['Tables']['consent']['Row']>({
  key: 'consent',
  default: {
    agree: false,
    contact: false,
    created_at: null,
    data: false,
    leave: false,
    read_info: false,
    user_id: '',
    voluntary: false,
  },
});

const useConsent = () => {
  const [consent, setConsent] = useRecoilState(consentState);
  return { consent, setConsent };
};

const tempConsentState = atom<boolean>({
  key: 'tempConsent',
  default: false,
});

const useTempConsent = () => {
  const [tempConsent, setTempConsent] = useRecoilState(tempConsentState);
  return { tempConsent, setTempConsent };
};

const showTempConsentState = atom<boolean>({
  key: 'show-tempConsent',
  default: false,
});

const useShowTempConsent = () => {
  const [showTempConsent, setShowTempConsent] = useRecoilState(showTempConsentState);
  return { showTempConsent, setShowTempConsent };
};

export { useTempConsent, useShowTempConsent, useConsent };
