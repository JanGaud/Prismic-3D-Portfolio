import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="w-2/3 z-50 mx-auto sticky top-4 bg-[#ffffffa8] text-raisin-black backdrop-blur-lg rounded-md shadow-lg p-2">
      <nav className="flex items-center justify-between">
        <span>
          <PrismicNextLink field={settings.data.brand_link}>
            {settings.data.brand_label}
          </PrismicNextLink>
        </span>
        <ul className="flex items-center gap-10 uppercase">
          {settings.data.nav_item.map(({ link, label }, index) => (
            <li key={index}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
