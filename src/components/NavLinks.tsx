"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav";
import Icon from "./Icon";

// Shared by ProfileRail (variant="rail") and MobileTabBar (variant="tabs").
export default function NavLinks({ className, activeClass }: { className: string; activeClass: string }) {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${className} ${active ? activeClass : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}
