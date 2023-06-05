// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  error: getIcon('ic_kanban'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = (translate: Function) => [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'General',
    items: [
      { title: translate('navigation.dashboard'), path: '/dashboard/index', icon: ICONS.dashboard },
      { title: translate('navigation.errors'), path: '/dashboard/errors-list', icon: ICONS.error },
      {
        title: translate('navigation.statistics'),
        path: '/dashboard/statistics',
        icon: ICONS.analytics,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      {
        title: 'Log out',
        path: translate('navigation.logout'),
        icon: ICONS.user,
      },
    ],
  },
];

export default navConfig;
