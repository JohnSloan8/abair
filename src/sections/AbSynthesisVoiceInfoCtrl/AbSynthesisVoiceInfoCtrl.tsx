import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/components/styled';

const AbSynthesisVoiceInfoCtrl = () => {
  return (
    <CenteredFlexBox>
      <Typography px={1} variant="body2" align="center" color="default">
        Dialect {'&'} Gender &nbsp;{'>'}&nbsp; Type &nbsp;{'>'}&nbsp; Synthesise
      </Typography>
    </CenteredFlexBox>
  );
};

export default AbSynthesisVoiceInfoCtrl;
