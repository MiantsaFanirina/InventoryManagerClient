import { Icon } from '@iconify/react'

import { SideNavItem } from '@/types'

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Acceuil',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Produits',
    path: '/products',
    icon: <Icon icon="lucide:box" width="24" height="24" />,
  },
  
  {
    title: 'Caisses',
    path: '/cash-register',
    icon: <Icon icon="ph:money-wavy" width="24" height="24" />,
  },
  {
    title: 'Stocks',
    path: '/stocks',
    icon: <Icon icon="material-symbols:inventory-rounded" width="24" height="24" />,
  },
  {
    title: 'Fournisseurs',
    path: '/suppliers',
    icon: <Icon icon="mage:shop" width="24" height="24" />,
  },
  {
    title: 'Paramètres',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Comptes', path: '/settings/account' },
      { title: 'Confidentialité', path: '/settings/privacy' },
    ],
  },
]