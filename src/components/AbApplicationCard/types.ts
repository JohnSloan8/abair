interface ApplicationModel {
  name: string;
  url: string;
  image: string;
  category: number;
  description: string;
}

interface ApplicationCategoryModel {
  id: number;
  name: string;
}

export type { ApplicationModel, ApplicationCategoryModel };
