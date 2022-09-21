import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import AbApplicationCard from '@/components/AbApplicationCard';
import { ApplicationModel } from '@/components/AbApplicationCard/types';
import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { getApplications } from '@/services/supabase/applications';
import getCategories from '@/services/supabase/applications/getCategories';
import {
  filteredApplicationsState,
  useApplicationCategoryFilter,
  useApplications,
  useCategories,
} from '@/store/applications';

function Applications() {
  const [tab, setTab] = useState(0);
  const { applications, setApplications } = useApplications();
  const { categories, setCategories } = useCategories();
  const filteredApplications = useRecoilValue(filteredApplicationsState);
  const { setApplicationCategoryFilter } = useApplicationCategoryFilter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const newIndex = categories[newValue].id;
    setApplicationCategoryFilter(newIndex);
    setTab(newValue);
  };

  useEffect(() => {
    applications.length === 0 ? getApplications(setApplications) : null;
    categories.length === 0 ? getCategories(setCategories) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Meta title="applications" />
      <AbInfoHeader title="Applications" />

      <CenteredFlexBox>
        {categories ? (
          <Tabs value={tab} onChange={handleChange} aria-label="disabled tabs example">
            {categories.map((c, i) => (
              <Tab key={i} label={c.name} />
            ))}
          </Tabs>
        ) : null}
      </CenteredFlexBox>
      <CenteredFlexBox mt={2}>
        <Box sx={{ maxWidth: 'md', width: '100%' }}>
          {filteredApplications.map((a: ApplicationModel, i: number) => (
            <AbApplicationCard
              key={i}
              url={a.url}
              name={a.name}
              description={a.description}
              image={a.image}
              category={a.category}
            />
          ))}
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default Applications;
