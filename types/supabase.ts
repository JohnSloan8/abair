export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type TranscriptionUtteranceModel = { utterance: string }[];

export interface Database {
  public: {
    Tables: {
      aac_profiles: {
        Row: {
          created_at: string | null;
          id: number;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
        };
        Update: {
          created_at?: string | null;
          id?: number;
        };
      };
      ab_consent: {
        Row: {
          created_at: string | null;
          id: number;
          short_name: string;
          text: string;
          consent_group: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          short_name: string;
          text: string;
          consent_group: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          short_name: string;
          text: string;
          consent_group: string;
        };
      };
      publications: {
        Row: {
          abstract: string | null;
          authors: Json | null;
          created_at: string | null;
          id: number;
          pdf_url: string | null;
          title: string | null;
          year_published: number | null;
        };
        Insert: {
          abstract?: string | null;
          authors?: Json | null;
          created_at?: string | null;
          id?: number;
          pdf_url?: string | null;
          title?: string | null;
          year_published?: number | null;
        };
        Update: {
          abstract?: string | null;
          authors?: Json | null;
          created_at?: string | null;
          id?: number;
          pdf_url?: string | null;
          title?: string | null;
          year_published?: number | null;
        };
      };
      application_categories: {
        Row: {
          created_at: string | null;
          id: number;
          name_en: string | null;
          name_ga: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name_en?: string | null;
          name_ga?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name_en?: string | null;
          name_ga?: string | null;
        };
      };
      applications: {
        Row: {
          category: number | null;
          created_at: string | null;
          description_en: string | null;
          description_ga: string | null;
          id: number;
          image: string | null;
          name: string | null;
          url: string | null;
        };
        Insert: {
          category?: number | null;
          created_at?: string | null;
          description_en?: string | null;
          description_ga?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
          url?: string | null;
        };
        Update: {
          category?: number | null;
          created_at?: string | null;
          description_en?: string | null;
          description_ga?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
          url?: string | null;
        };
      };
      bat_forms: {
        Row: {
          created_at: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
      };
      bat_messages: {
        Row: {
          bat_response: string | null;
          correct: boolean | null;
          created_at: string | null;
          id: number;
          question_id: number | null;
          retry_attempt: number | null;
          text: string | null;
          user_id: string | null;
        };
        Insert: {
          bat_response?: string | null;
          correct?: boolean | null;
          created_at?: string | null;
          id?: number;
          question_id?: number | null;
          retry_attempt?: number | null;
          text?: string | null;
          user_id?: string | null;
        };
        Update: {
          bat_response?: string | null;
          correct?: boolean | null;
          created_at?: string | null;
          id?: number;
          question_id?: number | null;
          retry_attempt?: number | null;
          text?: string | null;
          user_id?: string | null;
        };
      };
      bat_questions: {
        Row: {
          answer: string | null;
          created_at: string | null;
          form_id: number | null;
          hints: Json | null;
          id: number;
          question_text: string | null;
          tense_id: number | null;
          verb_id: number | null;
        };
        Insert: {
          answer?: string | null;
          created_at?: string | null;
          form_id?: number | null;
          hints?: Json | null;
          id?: number;
          question_text?: string | null;
          tense_id?: number | null;
          verb_id?: number | null;
        };
        Update: {
          answer?: string | null;
          created_at?: string | null;
          form_id?: number | null;
          hints?: Json | null;
          id?: number;
          question_text?: string | null;
          tense_id?: number | null;
          verb_id?: number | null;
        };
      };
      bat_tenses: {
        Row: {
          created_at: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
      };
      bat_verbs: {
        Row: {
          created_at: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
      };
      dialects: {
        Row: {
          created_at: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
      };
      genders: {
        Row: {
          created_at: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name?: string | null;
        };
      };
      news_stories: {
        Row: {
          blurb_en: string | null;
          blurb_ga: string | null;
          body_en: string | null;
          body_ga: string | null;
          created_at: string | null;
          date: string | null;
          id: number;
          images: Json | null;
          title_en: string | null;
          title_ga: string | null;
          video: string | null;
        };
        Insert: {
          blurb_en?: string | null;
          blurb_ga?: string | null;
          body_en?: string | null;
          body_ga?: string | null;
          created_at?: string | null;
          date?: string | null;
          id?: number;
          images?: Json | null;
          title_en?: string | null;
          title_ga?: string | null;
          video?: string | null;
        };
        Update: {
          blurb_en?: string | null;
          blurb_ga?: string | null;
          body_en?: string | null;
          body_ga?: string | null;
          created_at?: string | null;
          date?: string | null;
          id?: number;
          images?: Json | null;
          title_en?: string | null;
          title_ga?: string | null;
          video?: string | null;
        };
      };
      profiles: {
        Row: {
          dialect?: number | null;
          gender?: number | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          year?: number | null;
          over_16?: boolean;
          parent_caregiver_name?: string | null;
          parent_caregiver_email?: string | null;
          avatar?: string | null;
        };
        Insert: {
          dialect?: number | null;
          gender?: number | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          year?: number | null;
          over_16?: boolean;
          parent_caregiver_name?: string | null;
          parent_caregiver_email?: string | null;
          avatar?: string | null;
        };
        Update: {
          dialect?: number | null;
          gender?: number | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          year?: number | null;
          over_16?: boolean;
          parent_caregiver_name?: string | null;
          parent_caregiver_email?: string | null;
          avatar?: string | null;
        };
      };
      synthesis_requests: {
        Row: {
          created_at: string | null;
          duration: number | null;
          id: number;
          session_ID: string | null;
          text: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          duration?: number | null;
          id?: number;
          session_ID?: string | null;
          text: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          duration?: number | null;
          id?: number;
          session_ID?: string | null;
          text?: string;
          user_id?: string | null;
        };
      };
      transcriptions: {
        Row: {
          audio_file_path: string | null;
          correct: boolean | null;
          corrected: boolean;
          correction: string;
          created_at: string | null;
          duration: number | null;
          id: number;
          recognition_response: TranscriptionUtteranceModel;
          session_ID: string | null;
          user_id: string | null;
        };
        Insert: {
          audio_file_path?: string | null;
          correct?: boolean | null;
          corrected?: boolean;
          correction?: string;
          created_at?: string | null;
          duration?: number | null;
          id?: number;
          recognition_response?: TranscriptionUtteranceModel;
          session_ID?: string | null;
          user_id?: string | null;
        };
        Update: {
          audio_file_path?: string | null;
          correct?: boolean | null;
          corrected?: boolean;
          correction?: string;
          created_at?: string | null;
          duration?: number | null;
          id?: number;
          recognition_response?: TranscriptionUtteranceModel;
          session_ID?: string | null;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      getforms:
        | {
            Args: Record<PropertyKey, never>;
            Returns: number;
          }
        | {
            Args: { v_id: number; t_id: number };
            Returns: number;
          };
      gettenses: {
        Args: { v_id: number };
        Returns: number;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
