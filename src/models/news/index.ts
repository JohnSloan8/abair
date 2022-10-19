interface ImageDataModel {
  url: string;
}

interface AbNewsStoryModel {
  id: number;
  date: string;
  title_en: string;
  blurb_en: string;
  body_en: string;
  title_ga: string;
  blurb_ga: string;
  body_ga: string;
  images: ImageDataModel[];
}

export type { AbNewsStoryModel };
