import { SetterOrUpdater } from 'recoil';

interface RadioGroupItem {
  name: string;
  getter: string;
  setter: SetterOrUpdater<string>;
  options: string[];
}

export type { RadioGroupItem };
