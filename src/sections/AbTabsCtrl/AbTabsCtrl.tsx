import Box from '@mui/material/Box';

import AbTabs from '@/components/AbTabs';
import { useFrontPageTabs } from '@/store/tabs';

interface AbTabsCtrlProps {
  variation: 'frontpage';
}

const AbTabsCtrl = ({ variation = 'frontpage' }: AbTabsCtrlProps) => {
  const { frontPageTabs, setFrontPageTabs } = useFrontPageTabs();

  if (variation === 'frontpage') {
    return (
      <Box>
        <AbTabs
          label="frontpage tabs"
          color="secondary"
          getter={frontPageTabs}
          setter={setFrontPageTabs}
          items={['abair', 'éist']}
        />
      </Box>
    );
  }

  return null;
};

export default AbTabsCtrl;
