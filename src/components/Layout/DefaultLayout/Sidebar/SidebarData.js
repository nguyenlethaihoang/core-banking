import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "User",
        path: "users",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Revenue",
        path: "overview/revenue",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  // Second

  {
    title: "Report",
    path: "/report",
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
    title: "Product",
    path: "/products",
    icon: <FaIcons.FaCartPlus />
  },

  // Four
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />
  }
];
