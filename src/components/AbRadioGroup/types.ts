import { SetterOrUpdater } from 'recoil';

interface AbRadioGroupModel {
  name: string;
  getter: string;
  setter: SetterOrUpdater<string>;
  options: string[];
}

export type { AbRadioGroupModel };
