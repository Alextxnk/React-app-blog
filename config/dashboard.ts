import { DashboardConfig } from 'types';

export const dashboardConfig: DashboardConfig = {
   mainNav: [
      {
         title: 'Блог',
         href: '/blog',
      },
      /* {
         title: 'Документация',
         href: '/docs'
      }, */
      {
         title: 'Чат',
         href: '/chat'
      }
      /* {
      title: "Support",
      href: "/support",
      disabled: true,
    }, */
   ],
   sidebarNav: [
      {
         title: 'Статьи',
         href: '/dashboard',
         icon: 'post'
      },
      /* {
         title: 'Billing',
         href: '/dashboard/billing',
         icon: 'billing'
      }, */
      {
         title: 'Настройки',
         href: '/dashboard/settings',
         icon: 'settings'
      }
   ]
};
