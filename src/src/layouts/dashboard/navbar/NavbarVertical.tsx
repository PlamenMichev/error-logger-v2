import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Drawer } from '@mui/material';
// hooks
import useCollapseDrawer from '../../../hooks/useCollapseDrawer';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Scrollbar from '../../../components/Scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './NavConfig';
import NavbarAccount from './NavbarAccount';
import useLocales from 'src/hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
};

export default function NavbarVertical({ isOpenSidebar, onCloseSidebar }: Props) {
  const theme = useTheme();
  const { translate } = useLocales();

  const { pathname } = useLocation();
  const { isCollapse, collapseClick, collapseHover, onHoverEnter, onHoverLeave } =
    useCollapseDrawer();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: 'center' }),
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Logo />
        </Stack>

        <NavbarAccount isCollapse={isCollapse} />
      </Stack>

      <NavSectionVertical navConfig={navConfig(translate)} isCollapse={isCollapse} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      <Drawer
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
      >
        {renderContent}
      </Drawer>

      <Drawer
        open
        variant="persistent"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        PaperProps={{
          sx: {
            width: NAVBAR.DASHBOARD_WIDTH,
            borderRightStyle: 'dashed',
            bgcolor: 'background.default',
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.standard,
              }),
            ...(isCollapse && {
              width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
            }),
            ...(collapseHover && {
              ...cssStyles(theme).bgBlur(),
              boxShadow: (theme) => theme.customShadows.z24,
            }),
          },
        }}
      >
        {renderContent}
      </Drawer>
    </RootStyle>
  );
}
