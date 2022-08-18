import { SetterOrUpdater } from 'recoil';

interface TextFieldItem {
  label: string;
  rows: number;
  disabled: boolean;
  autoFocus: boolean;
  getter: string;
  setter: SetterOrUpdater<string>;
}

export type { TextFieldItem };
