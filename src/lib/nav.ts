// Single source of truth for navigation (used by ProfileRail and MobileTabBar).
export const navItems = [
  { href: "/", label: "Home", icon: "house" },
  { href: "/projects", label: "Projects", icon: "folder" },
  { href: "/about", label: "About", icon: "user" },
  { href: "/contact", label: "Contact", icon: "envelope" },
] as const;

export type NavIcon = (typeof navItems)[number]["icon"];
