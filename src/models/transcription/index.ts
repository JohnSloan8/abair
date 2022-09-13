interface transcriptionModel {
  id: number;
  name: string;
  text: string;
  correct: boolean | null;
  correction: string;
}

export type { transcriptionModel };
