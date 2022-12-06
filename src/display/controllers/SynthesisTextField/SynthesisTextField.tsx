// import AbTextField from '@/components/AbTextField';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { AbTextField } from 'abair-components';

import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { useAwaitingSynthesis, useSynthesisText } from '@/store/synthesis';
import { useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';

interface SynthesisTextFieldProps {
  rows: number;
}

const SynthesisTextField = ({ rows = 4 }: SynthesisTextFieldProps) => {
  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { awaitingSynthesis } = useAwaitingSynthesis();
  const { t } = useTranslation();

  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();

  useEffect(() => {
    if (synthesisVoiceOptions.length === 0) {
      getSynthesisMetadata().then((res: any) => {
        setSynthesisVoiceOptions(res);
        console.log('voices:', res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AbTextField
      label={t('pages.home.writeHere')}
      rows={rows}
      disabled={awaitingSynthesis ? true : false}
      autoFocus={false}
      value={synthesisText}
      onChange={(text) => {
        setSynthesisText(text);
      }}
    />
  );
};

export default SynthesisTextField;
