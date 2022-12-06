import { useTranslation } from 'react-i18next';

import { AbTabs } from 'abair-components';

import { useFrontPageTabs } from '@/store/tabs';

const Tabs = () => {
  const { frontPageTabs, setFrontPageTabs } = useFrontPageTabs();
  const { t } = useTranslation();

  return (
    <AbTabs
      label="frontpage tabs"
      color="secondary"
      value={frontPageTabs}
      setter={setFrontPageTabs}
      items={[t('pages.home.speak'), t('pages.home.listen')]}
    />
  );
};

export default Tabs;
