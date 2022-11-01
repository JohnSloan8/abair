import { atom, selector, useRecoilState } from 'recoil';

import { ApplicationCategoryModel, ApplicationModel } from '@/models/application';

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
      return l.filter((item) => item.category === categoryState);
    };

    const filteredApplications = filterCategory(list).sort((a, b) => {
      console.log('a.category:', a.category);
      console.log('b.category:', b.category);
      if (a.url > b.url) {
        return -1;
      }
      if (a.url < b.url) {
        return 1;
      }
      return 0;
    });
    console.log('filteredApplications:', filteredApplications);
    return filteredApplications;
  },
});

export { useApplications, useApplicationCategoryFilter, filteredApplicationsState, useCategories };
