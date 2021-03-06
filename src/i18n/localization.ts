import i18n from 'i18n-js';
import * as en from './en.json';

i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en };
const Translate = (key: string, args?: {}) => {
  if (!key) {
    return '';
  }
  return i18n.t(key, args);
};
export { i18n, Translate }; 