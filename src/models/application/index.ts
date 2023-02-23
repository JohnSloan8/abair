interface ApplicationCategoryModel {
  id: number;
  name_en: string;
  name_ga: string;
}

interface ApplicationModel {
  name: string;
  url: string;
  image: string;
  description_en: string;
  description_ga: string;
  category?: number;
}
export type { ApplicationModel, ApplicationCategoryModel };
