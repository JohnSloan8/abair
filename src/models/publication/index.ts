interface publicationModel {
  id?: number;
  created_at?: string;
  title: string;
  abstract: string;
  authors: string[];
  pdf_url: string;
  year_published: number;
}

export type { publicationModel };
