import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import AbApplicationCard from '@/components/AbApplicationCard';
import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/components/styled';
import { ApplicationModel } from '@/models/application';
import { getApplications } from '@/services/supabase/applications';
import getCategories from '@/services/supabase/applications/getCategories';
import {
  filteredApplicationsState,
  useApplicationCategoryFilter,
  useApplications,
  useCategories,
} from '@/store/applications';

function Applications() {
  const { t, i18n } = useTranslation();
  const [tab, setTab] = useState(0);
  const { applications, setApplications } = useApplications();
  const { categories, setCategories } = useCategories();
  const filteredApplications = useRecoilValue(filteredApplicationsState);
  const navigate = useNavigate();
  const { setApplicationCategoryFilter } = useApplicationCategoryFilter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const newIndex = categories[newValue].id;
    setApplicationCategoryFilter(newIndex);
    setTab(newValue);
  };

  useEffect(() => {
    console.log('in useEffect on Applications');
    if (applications.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getApplications().then((res: any) => {
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
    if (url[0] === '/') {
      navigate(url);
    } else {
      window.location.replace(url);
    }
  };

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Meta title={t('pageTitles.applications')} />
        <CenteredFlexBox>
          <Box sx={{ maxWidth: 'md', width: '100%' }}>
            <AbInfoHeader title={t('pageTitles.applications')} variant="front" />
          </Box>
        </CenteredFlexBox>
        <CenteredFlexBox>
          {categories ? (
            <Tabs value={tab} onChange={handleChange} aria-label="disabled tabs example">
              {categories.map((c, i) => (
                <Tab key={i} label={i18n.language === 'en' ? c.name_en : c.name_ga} />
              ))}
            </Tabs>
          ) : null}
        </CenteredFlexBox>
        <CenteredFlexBox mt={2}>
          <Box sx={{ maxWidth: 'md', width: '100%' }}>
            {filteredApplications.map((a: ApplicationModel, i: number) => (
              <AbApplicationCard
                key={i}
                handleClick={() => handleClick(a.url)}
                name={a.name}
                description={i18n.language === 'en' ? a.description_en : a.description_ga}
                image={a.image}
              />
            ))}
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Applications;
