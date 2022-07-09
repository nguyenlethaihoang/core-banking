import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Teller Operation",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Customer Management",
        path: "/customer_management",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Signature Management",
        path: "/signature_management",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Account Management",
        path: "/account_management",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Foreign Exchange",
        path: "/foreign_exchange",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  // Second

  {
    title: "Transfer Operation",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Reports 1",
        path: "reports/reports1",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Reports 2",
        path: "reports/reports2",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Reports 3",
        path: "reports/reports3",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  // Third
  {
    title: "Credit Operation",
    path: "/",
    icon: <FaIcons.FaCartPlus />
  },

  // Four
  {
    title: "Trade Finance Operation",
    path: "/",
    icon: <IoIcons.IoMdPeople />
  }
];
