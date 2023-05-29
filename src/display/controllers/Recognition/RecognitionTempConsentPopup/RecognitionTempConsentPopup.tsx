import { useTranslation } from 'react-i18next';

import { AbPopup } from 'abair-components';

import { CenteredFlexBox } from '@/display/utils/flex';
import { useShowTempConsent, useTempConsent } from '@/store/consent';
import { useBreakpointSize } from '@/store/viewDimensions';

const RecognitionTempConsentPopup = () => {
  const { t } = useTranslation();
  const { showTempConsent, setShowTempConsent } = useShowTempConsent();
  const { setTempConsent } = useTempConsent();
  const onClickTempConsent = (agree: boolean) => {
    setTempConsent(agree);
    setShowTempConsent(false);
  };
  const { breakpointSize } = useBreakpointSize();

  return showTempConsent ? (
    <CenteredFlexBox
      sx={{
        zIndex: 9999,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: ['xs', 'sm'].includes(breakpointSize) ? '100%' : '50%',
        height: ['xs', 'sm'].includes(breakpointSize) ? '50%' : '100%',
      }}
      p={1}
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
    </CenteredFlexBox>
  ) : null;
};

export default RecognitionTempConsentPopup;
