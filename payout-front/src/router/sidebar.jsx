/** Icons are imported separatly to reduce build time */
import { ArrowRightCircleIcon, ArrowTrendingUpIcon, ArrowUturnLeftIcon, BanknotesIcon, BuildingLibraryIcon, CheckBadgeIcon, CurrencyDollarIcon, GlobeAltIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import { CreditCardIcon, UsersIcon } from '@heroicons/react/24/outline'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [
  // {
  //   path: '/app/dashboard',
  //   icon: <Squares2X2Icon className={iconClasses} />,
  //   name: 'Dashboard',
  // },
  // {
  //   path: '',
  //   icon: <CurrencyDollarIcon className={`${iconClasses} inline`} />, // icon component
  //   name: 'Deposit', // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: '/app/deposit/progress',
  //       icon: <ArrowTrendingUpIcon className={submenuIconClasses} />,
  //       name: 'In Progress',
  //     },
  //     {
  //       path: '/app/deposit/completed',
  //       icon: <CheckBadgeIcon className={submenuIconClasses} />,
  //       name: 'Completed',
  //     },
  //     {
  //       path: '/app/deposit/dropped',
  //       icon: <TrashIcon className={submenuIconClasses} />,
  //       name: 'Dropped',
  //     },
  //     {
  //       path: '/app/deposit/all',
  //       icon: <GlobeAltIcon className={submenuIconClasses} />,
  //       name: 'All',
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   icon: <ArrowRightCircleIcon className={`${iconClasses} inline`} />, // icon component
  //   name: 'Withdrawals', // name that appear in Sidebar
  //   submenu: [

  //     {
  //       path: '/app/withdrawal/progress', //url
  //       icon: <ArrowTrendingUpIcon className={submenuIconClasses} />, // icon component
  //       name: 'In Progress', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/withdrawal/completed',
  //       icon: <CheckBadgeIcon className={submenuIconClasses} />,
  //       name: 'Completed',
  //     }
  //   ]
  // },
 
  {
    path: '',
    icon: <BanknotesIcon className={`${iconClasses} inline`} />, // icon component
    name: 'Settlements', // name that appear in Sidebar
    submenu: [

      {
        path: '/app/settlements/transaction',
        icon: <CurrencyDollarIcon className={submenuIconClasses} />, // icon component
        name: 'Transactions', // name that appear in Sidebar
      },
      {
        path: '/app/settlements/account',
        icon: <UserCircleIcon className={submenuIconClasses} />,
        name: 'Account',
      }
    ]
  },
  // {
  //   path: '/app/chargeback',
  //   icon: <ArrowUturnLeftIcon className={iconClasses} />,
  //   name: 'Chargebacks',
  // },
  // {
  //   path: '/app/merchant',
  //   icon: <CreditCardIcon className={iconClasses} />,
  //   name: 'Merchant',
  // },
  // {
  //   path: '/app/bank/accounts',
  //   icon: <BuildingLibraryIcon className={iconClasses} />,
  //   name: 'Bank Accounts',
  // },
  // {
  //   path: '',
  //   icon: <UsersIcon className={`${iconClasses} inline`} />, // icon component
  //   name: 'User', // name that appear in Sidebar
  //   submenu: [

  //     {
  //       path: '/app/settlements/transaction',
  //       icon: <CurrencyDollarIcon className={submenuIconClasses} />, // icon component
  //       name: 'Transactions', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/app/settlements/account',
  //       icon: <UserCircleIcon className={submenuIconClasses} />,
  //       name: 'Account',
  //     }
  //   ]
  // },


]

export default routes


