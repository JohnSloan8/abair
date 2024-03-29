import { useTranslation } from 'react-i18next';

import { AbPopup } from 'abair-components';

import { FullSizeCenteredFlexBox } from '@/display/utils/flex';
import { useConsent, useShowConsent } from '@/store/consent';

const RecognitionConsentPopup = () => {
  const { t } = useTranslation();
  const { showConsent, setShowConsent } = useShowConsent();
  const { setConsent } = useConsent();
  const onClickConsent = (agree: boolean) => {
    setConsent(agree);
    setShowConsent(false);
  };

  return showConsent ? (
    <FullSizeCenteredFlexBox
      sx={{ zIndex: 9999, position: 'fixed', top: '0', backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <AbPopup
        title={t('pages.recognition.privacyTitle')}
        description={t('pages.recognition.privacyRecordings')}
        condition1={t('pages.recognition.over16')}
        buttons={[
          { text: 'disagree', color: 'warning' },
          { text: 'agree', color: 'primary' },
        ]}
        borderColor="warning.main"
        onClick={onClickConsent}
      />
    </FullSizeCenteredFlexBox>
  ) : null;
};

export default RecognitionConsentPopup;
