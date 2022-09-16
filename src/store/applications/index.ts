import { atom, selector, useRecoilState } from 'recoil';

import { ApplicationCategoryModel, ApplicationModel } from '@/components/AbApplicationCard/types';

const applicationsState = atom<ApplicationModel[]>({
  key: 'applications',
  default: [],
});

const useApplications = () => {
  const [applications, setApplications] = useRecoilState(applicationsState);
  return { applications, setApplications };
};

const categoriesState = atom<ApplicationCategoryModel[]>({
  key: 'categories',
  default: [],
});

const useCategories = () => {
  const [categories, setCategories] = useRecoilState(categoriesState);
  return { categories, setCategories };
};

const applicationCategoryFilterState = atom<number>({
  key: 'application-category-filter',
  default: 1,
});

const useApplicationCategoryFilter = () => {
  const [applicationCategoryFilter, setApplicationCategoryFilter] = useRecoilState(
    applicationCategoryFilterState,
  );
  return { applicationCategoryFilter, setApplicationCategoryFilter };
};

const filteredApplicationsState = selector({
  key: 'filtered-application',
  get: ({ get }) => {
    const list = get(applicationsState);
    const categoryState = get(applicationCategoryFilterState);

    const filterCategory = (l: ApplicationModel[]) => {
      switch (categoryState) {
        case 1:
          return l.filter((item) => item.category === 1);
        case 2:
          return l.filter((item) => item.category === 2);
        default:
          return l;
      }
    };

    const filteredApplications = filterCategory(list);
    return filteredApplications;
  },
});

export { useApplications, useApplicationCategoryFilter, filteredApplicationsState, useCategories };
