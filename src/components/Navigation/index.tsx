"use client";

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
import { List, ListItem } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { useState } from "react";

export const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    path: "/",
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
    path: "/email",
  },
  {
    type: "link",
    label: "Campaings",
    icon: MdOutlineFlag,
    path: "/campaings",
  },
  {
    type: "link",
    label: "Calendar",
    icon: MdCalendarToday,
    path: "/calendar",
  },
  {
    type: "link",
    label: "Contacts",
    icon: MdOutlineSupervisorAccount,
    path: "/contacts",
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
    path: "/settings",
  },
];

export function Navigation({ collapse = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleItemClick(index: number) {
    console.log(index);
    setActiveIndex(index);
  }

  return (
    <List w="full" my={8}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem
            item={item}
            isActive={index === activeIndex}
            collapse={collapse}
            handleItemClick={() => handleItemClick(index)}
          />
        </ListItem>
      ))}
    </List>
  );
}
