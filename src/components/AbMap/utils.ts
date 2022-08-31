const localeToCounty = (l: string) => {
  if (l === 'Ulster') {
    return 'Donegal';
  } else if (l === 'Connemara') {
    return 'Galway';
  } else if (l === 'Munster') {
    return 'Kerry';
  } else {
    return 'all';
  }
};

export default localeToCounty;
