import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Contact() {
  return (
    <>
      <Meta title="contact" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Contact</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Contact;
