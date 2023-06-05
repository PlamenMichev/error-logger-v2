/* eslint-disable import/no-duplicates */
import { useTranslation } from 'react-i18next';
// @mui
import { enUS, daDK } from '@mui/material/locale';
import enLocale from 'date-fns/locale/en-US';
import dkLocale from 'date-fns/locale/da';
// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
    locale: enLocale,
  },
  {
    label: 'Dansk',
    value: 'dk',
    systemValue: daDK,
    icon: 'https://flagcdn.com/w20/dk.png',
    locale: dkLocale,
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
