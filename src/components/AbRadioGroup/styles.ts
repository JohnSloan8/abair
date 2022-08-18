interface RadioGroupStyles {
  options: string[];
}

const styles: { [name: string]: RadioGroupStyles } = {
  gender: {
    options: ['male', 'female'],
  },
  pitch: {
    options: ['very low', 'low', 'normal', 'high', 'very high'],
  },
  speed: {
    options: ['very slow', 'slow', 'normal', 'fast', 'very fast'],
  },
  mode: {
    options: ['DNN', 'HTS'],
  },
};

export default styles;
