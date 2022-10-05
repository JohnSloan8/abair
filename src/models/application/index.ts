interface ApplicationCategoryModel {
  id: number;
  name: string;
}

interface ApplicationModel {
  name: string;
  url: string;
  image: string;
  description: string;
  category: number;
}
export type { ApplicationModel, ApplicationCategoryModel };
