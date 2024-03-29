// assets
import { IconDashboard, IconSettings, IconLanguage, IconMessageChatbot } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconSettings, IconLanguage, IconMessageChatbot };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'translate_certificate',
      title: 'Translate Certificate',
      type: 'item',
      url: '/translate-certificate',
      icon: icons.IconLanguage,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.IconSettings,
      breadcrumbs: false
    },
    {
      id: 'support',
      title: 'Support',
      type: 'item',
      url: '/support',
      icon: icons.IconMessageChatbot,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
