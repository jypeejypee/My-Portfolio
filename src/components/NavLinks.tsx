"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, isActive } from "@/lib/nav";
import Icon from "./Icon";

// Sidebar navigation on desktop.
export default function NavLinks({
  className,
  activeClass,
}: {
  className: string;
  activeClass: string;
}) {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => {
        const active = isActive(item.href, pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${className} ${active ? activeClass : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon name={item.icon} size={20} weight={active ? "fill" : "regular"} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}
