import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/components/styled';

const AbSynthesisVoiceInfoCtrl = () => {
  return (
    <CenteredFlexBox>
      <Typography px={1} variant="body1" align="center" color="default">
        Select dialect and gender &nbsp;{'>'}&nbsp; Type &nbsp;{'>'}&nbsp; Synthesise voice
      </Typography>
    </CenteredFlexBox>
  );
};

export default AbSynthesisVoiceInfoCtrl;
