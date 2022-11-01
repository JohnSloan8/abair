interface synthesisRequestModel {
  id?: number;
  user_id: string | null;
  session_ID: string;
  duration?: number;
  text: string;
}

interface synthesisAudios {
  voice: string;
  model: string;
  speed: string;
  pitch: string;
  audioData: string;
  text: string;
}

export type { synthesisRequestModel, synthesisAudios };
