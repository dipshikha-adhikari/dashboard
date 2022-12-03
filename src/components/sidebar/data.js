import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleIcon from '@mui/icons-material/People';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GradingIcon from '@mui/icons-material/Grading';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MessageIcon from '@mui/icons-material/Message';
import User from "../../pages/user/User";

export const datas = [
 {
  dashboard:  [{
    icon: <HomeIcon />,
    name: "Home",
    link: '/'
  },
  {
    icon: <AutoGraphIcon/>,
    name:'Analytics',
    link: '/analytics'
  },
{
  icon: <ShowChartIcon/>,
  name: 'Sales',
  link: '/sales'
}],
  quickmenu: [
    {
      icon: <PeopleIcon/>,
      name: 'Users',
  link: "/users",

    },
    {
      icon: <ProductionQuantityLimitsIcon/>,
      name: 'Products',
  link: '/products'

    },
    {
      icon: <MonetizationOnIcon/>,
      name: 'Transaction',
  link: '/transction'

    },
    {

    }
  ],
  notifications: [
    {
      icon: <LocalPostOfficeIcon/>,
      name: 'Mail',
      link:'/mail'
    },
    {
      icon: <GradingIcon/>,
      name: 'Feedback',
      link:'/feedback'

    },
    {
      icon: <MessageIcon/>,
      name: 'Messages',
      link:'/messages'

    }
  ],
  staff: [
    {
      icon: <ManageAccountsIcon/>,
      name: 'Manage',
      link:'/manage'

    },
    {
      icon: <AutoGraphIcon/>,
      name:'Analytics',
      link:'/analytics'

    },
    {
      icon: <ReportIcon/>,
      name: 'Reports',
      link:'/reports'
    }
  ]
 }
];
