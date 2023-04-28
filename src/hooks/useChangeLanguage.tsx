import { useTranslation } from 'react-i18next';

import { updateProfileLanguage } from '@/services/supabase/profile';
import { useProfile } from '@/store/profile';

const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const { profile, setProfile } = useProfile();

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ga');
      if (profile) {
        updateProfileLanguage(profile.id as string, 'ga').then((p) => {
          setProfile({ ...p, language_preference: 'ga' });
        });
      }
    } else {
      i18n.changeLanguage('en');
      if (profile) {
        updateProfileLanguage(profile.id as string, 'en').then((p) => {
          setProfile({ ...p, language_preference: 'ga' });
        });
      }
    }
  };

  return changeLanguage;
};

export default useChangeLanguage;
