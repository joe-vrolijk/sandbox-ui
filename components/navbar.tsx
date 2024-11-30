import React from "react";
import Link from "next/link";
import { Package2 } from "lucide-react";

type NavBarItem = {
  href: string;
  name: string;
  icon: React.ElementType;
  badgeCount?: number; // Optional badge count
};

type NavBarProps = {
  items: NavBarItem[];
  title: string;
  navClassName?: string; // Class name for the <nav> element
  linkClassName?: string; // Class name for the <Link> elements
  badgeClassName?: string; // Class name for the badge <span> elements
};

const NavBar: React.FC<NavBarProps> = ({
  items,
  title = "",
  navClassName = "grid items-start px-2 text-sm font-medium lg:px-4",
  linkClassName = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
  badgeClassName = "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted",
}) => {
  return (
    <nav className={navClassName}>
      {/* Dropdown-specific Link, visible only on small screens */}
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold sm:hidden "
      >
        <Package2 className="h-6 w-6" />
        <span>{title}</span>
      </Link>

      {/* Regular NavBar items */}

      {items.map(({ href, name, icon: Icon, badgeCount }) => (
        <Link key={name} href={href} className={linkClassName}>
          <Icon className="h-4 w-4" />
          <span>{name}</span>
          {badgeCount !== undefined && (
            <span className={badgeClassName}>{badgeCount}</span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
