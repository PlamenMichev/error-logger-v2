import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
// components
import Logo from '../components/Logo';
import LanguagePopover from 'src/components/nav-section/vertical/LanguagePopover';

// ----------------------------------------------------------------------

export const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 7, 0),
  },
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  return (
    <>
      <HeaderStyle>
        <Logo />
        <LanguagePopover />
      </HeaderStyle>
      <Outlet />
    </>
  );
}
