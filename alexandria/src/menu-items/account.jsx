// assets
import {
  CreditCardOutlined,
  TeamOutlined,
  UserOutlined,
  NotificationOutlined
} from '@ant-design/icons';

// icons
const icons = {
  CreditCardOutlined,
  TeamOutlined,
  UserOutlined,
  NotificationOutlined
};

// ==============================|| MENU - CUENTA ||============================== //

const account = {
  id: 'group-account',
  title: 'Mi cuenta',
  type: 'group',
  children: [
    {
      id: 'subscription',
      title: 'Suscripción',
      type: 'item',
      url: '/app/suscripcion',
      icon: icons.CreditCardOutlined
    },
    {
      id: 'referrals',
      title: 'Referidos',
      type: 'item',
      url: '/app/referidos',
      icon: icons.TeamOutlined
    },
    {
      id: 'announcements',
      title: 'Anuncios',
      type: 'item',
      url: '/app/anuncios',
      icon: icons.NotificationOutlined
    }
  ]
};

export default account;
