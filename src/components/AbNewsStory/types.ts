interface ImageDataModel {
  url: string;
}

interface AbNewsStoryModel {
  id: number;
  date: Date;
  title: string;
  blurb: string;
  body: string;
  images: ImageDataModel[];
}

export type { AbNewsStoryModel };
