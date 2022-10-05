interface ApplicationCategoryModel {
  id: number;
  name: string;
}

interface ApplicationModel {
  name: string;
  url: string;
  image: string;
  description: string;
}
export type { ApplicationModel, ApplicationCategoryModel };
