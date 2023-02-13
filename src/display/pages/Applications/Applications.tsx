import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { AbInfoLinkCard } from 'abair-components';
import { AbInfoHeader } from 'abair-components';

import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { ApplicationModel } from '@/models/application';
import { getApplications } from '@/services/supabase/applications';
import getCategories from '@/services/supabase/applications/getCategories';
import {
  filteredApplicationsState,
  useApplicationCategoryFilter,
  useApplications,
  useCategories,
} from '@/store/applications';
import { useAppTabs } from '@/store/tabs';
import { useBreakpointSize } from '@/store/viewDimensions';

function Applications() {
  const { t, i18n } = useTranslation();
  const { appTabs, setAppTabs } = useAppTabs();
  const { applications, setApplications } = useApplications();
  const { categories, setCategories } = useCategories();
  const filteredApplications = useRecoilValue(filteredApplicationsState);
  const { setApplicationCategoryFilter } = useApplicationCategoryFilter();
  const { breakpointSize } = useBreakpointSize();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const newIndex = categories[newValue].id;
    setApplicationCategoryFilter(newIndex);
    setAppTabs(newValue);
  };

  useEffect(() => {
    console.log('in useEffect on Applications');
    if (applications.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getApplications().then((res: any) => {
        console.log('res:', res);
        setApplications(res);
      });
    }
    if (categories.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getCategories().then((res: any) => {
        setCategories(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (url: string) => {
    window.location.replace(url);
  };

  return (
    <HorizontallyCenteredFlexBox pb={8}>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.applications')} />
        <CenteredFlexBox>
          <Box sx={{ maxWidth: 'md', width: '100%' }} py={{ sm: 4, xs: 2 }}>
            <AbInfoHeader title={t('pageTitles.applications')} />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox>
          {categories ? (
            <Tabs value={appTabs} onChange={handleChange} aria-label="disabled tabs example">
              {categories.map((c, i) => (
                <Tab key={i} label={i18n.language === 'en' ? c.name_en : c.name_ga} />
              ))}
            </Tabs>
          ) : null}
        </CenteredFlexBox>
        <CenteredFlexBox mt={2}>
          <Box sx={{ maxWidth: 'md', width: '100%' }}>
            {filteredApplications.map((a: ApplicationModel, i: number) => (
              <AbInfoLinkCard
                key={i}
                onClick={() =>
                  a.name === 'An Bat Mírialta'
                    ? handleClick('/applications/bat-mirialta')
                    : handleClick(a.url)
                }
                name={a.name}
                description={i18n.language === 'en' ? a.description_en : a.description_ga}
                image={a.image}
                message={
                  a.url === '#' && a.name !== 'An Bat Mírialta'
                    ? t('pages.applications.comingSoon')
                    : ''
                }
                breakpointSize={breakpointSize}
              />
            ))}
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Applications;
