export const CONTROL_TYPE = {
  DROPDOWN: 1,
  SEARCHBAR: 2
};

export const API_KEY = '7c6e6662cccf4d41b757847de1e9ccde';

export const HEADLINE_TYPES = [
  { value: 'top-headlines', name: 'Top Headlines', text: 'Top Headlines' },
  { value: 'everything', name: 'Everything', text: 'Everything' }
];

export const COUNTRY_LIST = [
  { value: 'ph', name: 'Philippines', text: 'Philippines' },
  { value: 'us', name: 'USA', text: 'USA' },
  { value: 'ru', name: 'Russia', text: 'Russia' },
  { value: 'ch', name: 'China', text: 'China' }
];

export const CONTROL = [
  {
    controlType: CONTROL_TYPE.DROPDOWN,
    placeholder: 'Select a country',
    options: COUNTRY_LIST,
    stateKey: 'country',
  },
  {
    controlType: CONTROL_TYPE.DROPDOWN,
    placeholder: 'Headline Type',
    options: HEADLINE_TYPES,
    stateKey: 'sourceType',
  },
  {
    controlType: CONTROL_TYPE.SEARCHBAR,
    placeholder: 'Search article...',
    stateKey: 'searchKey',
  }
];