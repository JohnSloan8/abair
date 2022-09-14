interface transcriptionModel {
  id: number;
  name: string;
  text: string;
  correct: boolean | null;
  correction: string | null;
  corrected: boolean;
}

export type { transcriptionModel };
