import { SetterOrUpdater } from 'recoil';

import { RadioGroupItem } from '../AbRadioGroup/types';

interface AccordionItem {
  title: string;
  getter: boolean;
  setter: SetterOrUpdater<boolean>;
  items: RadioGroupItem[];
}

export type { AccordionItem };
