import { ReactNode } from 'react';
// hooks
import useLocales from '../hooks/useLocales';

//@mui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// ----------------------------------------------------------------------

type LocalizationProviderProps = {
  children: ReactNode;
};

export default function CustomLocalizationProvider({ children }: LocalizationProviderProps) {
  const { currentLang } = useLocales();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={currentLang.locale}>
      {children}
    </LocalizationProvider>
  );
}
