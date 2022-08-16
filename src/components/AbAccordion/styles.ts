import {
  useSynthesisAccordion,
  useSynthesisGender,
  useSynthesisMode,
  useSynthesisPitch,
  useSynthesisSpeed,
} from '@/store/synthesis';

import { AccordionItem } from './types';

const CreateItem = () => {
  // Synthesis
  const { synthesisAccordion, setSynthesisAccordion } = useSynthesisAccordion();
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();
  const { synthesisMode, setSynthesisMode } = useSynthesisMode();
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();

  const styles: { [name: string]: AccordionItem } = {
    synthesis: {
      title: 'Advanced Options',
      getter: synthesisAccordion,
      setter: setSynthesisAccordion,
      items: [
        {
          name: 'gender',
          getter: synthesisGender,
          setter: setSynthesisGender,
          options: ['male', 'female'],
        },
        {
          name: 'mode',
          getter: synthesisMode,
          setter: setSynthesisMode,
          options: ['DNN', 'HTS'],
        },
        {
          name: 'pitch',
          getter: synthesisPitch,
          setter: setSynthesisPitch,
          options: ['very low', 'low', 'normal', 'high', 'very high'],
        },
        {
          name: 'speed',
          getter: synthesisSpeed,
          setter: setSynthesisSpeed,
          options: ['very slow', 'slow', 'normal', 'fast', 'very fast'],
        },
      ],
    },
  };

  return styles;
};

export default CreateItem;
