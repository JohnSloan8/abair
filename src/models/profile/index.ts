interface DialectModel {
  id: number;
  name: string;
}

interface GenderModel {
  id: number;
  name: string;
}

interface ProfileModel {
  username: string;
  dialect?: string;
  gender?: string;
  year?: number;
}

export type { ProfileModel, DialectModel, GenderModel };
