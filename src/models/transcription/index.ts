interface transcriptionModel {
  id?: number | undefined;
  created_at?: string;
  user: string | null;
  session_start: string;
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

export type { transcriptionModel };
