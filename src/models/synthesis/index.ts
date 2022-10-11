interface synthesisRequestModel {
  id?: number;
  user_id: string | null;
  session_ID: string;
  duration?: number;
  text: string;
}

export type { synthesisRequestModel };
