interface correctionModel {
  id: number | null;
  start: number;
  end: number;
  correction_text: string;
  transcription_id: number;
}

interface transcriptionModel {
  id: number;
  name: string;
  text: string;
  correct: boolean | null;
}

export type { transcriptionModel, correctionModel };
