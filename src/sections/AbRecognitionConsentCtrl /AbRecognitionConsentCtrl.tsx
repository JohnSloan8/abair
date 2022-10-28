import { useTranslation } from 'react-i18next';

import AbConsent from '@/components/AbConsent';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { useConsent, useShowConsent } from '@/store/consent';

const AbRecognitionConsentCtrl = () => {
  const { t } = useTranslation();
  const { showConsent, setShowConsent } = useShowConsent();
  const { setConsent } = useConsent();
  const onClickConsent = (agree: boolean) => {
    setConsent(agree);
    setShowConsent(false);
  };

  return (
    showConsent && (
      <FullSizeCenteredFlexBox
        sx={{ zIndex: 9999, position: 'absolute', top: '0', backgroundColor: 'rgba(0,0,0,0.3)' }}
      >
        <AbConsent
          title={t('pages.recognition.privacyTitle')}
          description={t('pages.recognition.privacyRecordings')}
          condition1={t('pages.recognition.over16')}
          handleClick={onClickConsent}
        />
      </FullSizeCenteredFlexBox>
    )
  );
};

export default AbRecognitionConsentCtrl;
