// NavBar.tsx
"use-client";
import clsx from "clsx";
import React, { useState } from "react";
import { asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";

interface NavBarProps {
  brandLink: any;
  brandLabel: string;
  navItems: {
    link: any;
    label: string;
  }[];
}

const NavBar: React.FC<NavBarProps> = ({ brandLink, brandLabel, navItems }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
  return (
    <nav className="flex items-center text-base font-bold text-raisin-black justify-between bg-[#ffffff8c] backdrop-blur-lg py-2 px-4 shadow-lg rounded-full">
      <PrismicNextLink
        className="text-xl font-extrabold tracking-tighter"
        field={brandLink}
      >
        {brandLabel}
      </PrismicNextLink>
      <ul className="flex items-center gap-10 uppercase">
        {navItems.map(({ link, label }) => (
          <li>
            <PrismicNextLink
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1"
              )}
              field={link}
              aria-current={
                pathname.includes(asLink(link) as string) ? "page" : undefined
              }
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-aero transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  pathname.includes(asLink(link) as string)
                    ? "translate-y-7"
                    : "translate-y-8"
                )}
              />
              <span className="relative">{label}</span>
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
