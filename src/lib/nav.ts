// Single source of truth for navigation (used by ProfileRail and MobileTabBar).
export const navItems = [
  { href: "/", label: "Home", icon: "house" },
  { href: "/projects", label: "Projects", icon: "folder" },
  { href: "/about", label: "About", icon: "user" },
  { href: "/resume", label: "Resume", icon: "file" },
  { href: "/contact", label: "Contact", icon: "envelope" },
] as const;

export type NavItem = (typeof navItems)[number];
export type NavIcon = NavItem["icon"];

export const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);
