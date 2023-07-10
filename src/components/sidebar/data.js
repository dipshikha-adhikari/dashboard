import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PeopleIcon from "@mui/icons-material/People";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import GradingIcon from "@mui/icons-material/Grading";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportIcon from "@mui/icons-material/Report";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MessageIcon from "@mui/icons-material/Message";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RedeemIcon from '@mui/icons-material/Redeem';

export const datas = [
  {
    title: "dashboard",
    sublinks: [
      {
        icon: <HomeIcon />,
        name: "Home",
        link: "/",
        id: 111,
      },
     
      {
        icon:<PersonAddIcon/>,
        name:"New Student",
        link:'/students/new',
        id:113
      },
      {
        icon:<AddCircleIcon/>,
        name:"New Teacher",
        link:'/teachers/new',
        id:114
      },
      // {
      //   icon: <ShowChartIcon />,
      //   name: "Sales",
      //   link: "/sales",
      //   id: 115,
      // },
    ],
  },
  {
    title: "quickmenu",
    sublinks: [
      {
        icon: <PeopleIcon />,
        name: "Students",
        link: "/students",
        id: 131,
      },
      {
        icon: <ProductionQuantityLimitsIcon />,
        name: "Teachers",
        link: "/teachers",
        id: 132,
      },
      {
        icon: <RedeemIcon />,
        name: "Transactions",
        link: "/transactions",
        id: 133,
      },
    ],
  },
  // {
  //   title: "notifications",
  //   sublinks: [
  //     {
  //       icon: <LocalPostOfficeIcon />,
  //       name: "Mail",
  //       link: "/mail",
  //       id: 141,
  //     },
  //     {
  //       icon: <GradingIcon />,
  //       name: "Feedback",
  //       link: "/feedback",
  //       id: 142,
  //     },
  //     {
  //       icon: <MessageIcon />,
  //       name: "Messages",
  //       link: "/messages",
  //       id: 143,
  //     },
  //   ],
  // },
  // {
  //   title: "staff",
  //   sublinks: [
  //     {
  //       icon: <ManageAccountsIcon />,
  //       name: "Manage",
  //       link: "/manage",
  //       id: 151,
  //     },
  //     {
  //       icon: <AutoGraphIcon />,
  //       name: "Analytics",
  //       link: "/analytics",
  //       id: 152,
  //     },
  //     {
  //       icon: <ReportIcon />,
  //       name: "Reports",
  //       link: "/reports",
  //       id: 153,
  //     },
  //   ],
  // },
];
