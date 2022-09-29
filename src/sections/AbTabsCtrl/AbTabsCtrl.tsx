import AbTabs from '@/components/AbTabs';
import { useFrontPageTabs } from '@/store/tabs';

interface AbTabsCtrlProps {
  variation: 'frontpage';
}

const AbTabsCtrl = ({ variation = 'frontpage' }: AbTabsCtrlProps) => {
  const { frontPageTabs, setFrontPageTabs } = useFrontPageTabs();

  if (variation === 'frontpage') {
    return (
      <AbTabs
        label="frontpage tabs"
        color="secondary"
        getter={frontPageTabs}
        setter={setFrontPageTabs}
        items={['abair', 'éist']}
      />
    );
  }

  return null;
};

export default AbTabsCtrl;
