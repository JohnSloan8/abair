interface transcriptionModel {
  id?: number;
  created_at?: string;
  user_id: string | null;
  session_ID: string;
  correct?: boolean | null;
  correction?: string | null | undefined;
  corrected?: boolean;
  audio_file_path: string;
  duration: number;
  recognition_response: hypothesesModel[];
}

interface hypothesesModel {
  utterance: string;
}

export type { transcriptionModel, hypothesesModel };
