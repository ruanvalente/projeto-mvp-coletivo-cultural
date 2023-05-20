"use client";

import { List, ListItem } from "@chakra-ui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineShoppingBag,
  MdMailOutline,
  MdOutlineFlag,
  MdCalendarToday,
  MdOutlineSupervisorAccount,
  MdOutlineSettingsInputComposite,
  MdOutlineChatBubbleOutline,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { NavItem } from "./NavItem";

export const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    path: "/dashboard",
  },
  {
    type: "link",
    label: "Products",
    icon: MdOutlineShoppingBag,
    path: "/products",
  },
  {
    type: "link",
    label: "Mail",
    icon: MdMailOutline,
    path: "/",
  },
  {
    type: "link",
    label: "Campaings",
    icon: MdOutlineFlag,
    path: "/",
  },
  {
    type: "link",
    label: "Calendar",
    icon: MdCalendarToday,
    path: "/",
  },
  {
    type: "link",
    label: "Contacts",
    icon: MdOutlineSupervisorAccount,
    path: "/",
  },

  {
    type: "header",
    label: "Account",
  },

  {
    type: "link",
    label: "Notifications",
    icon: MdOutlineNotificationsActive,
    path: "/",
    notifications: 24,
  },
  {
    type: "link",
    label: "Chat",
    icon: MdOutlineChatBubbleOutline,
    path: "/",
    messages: 8,
  },
  {
    type: "link",
    label: "Settings",
    icon: MdOutlineSettingsInputComposite,
    path: "/",
  },
];

export function Navigation({ collapse = false }) {
  return (
    <List w="full" my={8}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem item={item} isActive={index === 0} collapse={collapse} />
        </ListItem>
      ))}
    </List>
  );
}
