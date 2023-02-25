import { useTranslation } from 'react-i18next';

import { AbPopup } from 'abair-components';

import { FullSizeCenteredFlexBox } from '@/display/utils/flex';
import { useShowTempConsent, useTempConsent } from '@/store/tempConsent';

const RecognitionTempConsentPopup = () => {
  const { t } = useTranslation();
  const { showTempConsent, setShowTempConsent } = useShowTempConsent();
  const { setTempConsent } = useTempConsent();
  const onClickTempConsent = (agree: boolean) => {
    setTempConsent(agree);
    setShowTempConsent(false);
  };

  return showTempConsent ? (
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
        onClick={onClickTempConsent}
      />
    </FullSizeCenteredFlexBox>
  ) : null;
};

export default RecognitionTempConsentPopup;
