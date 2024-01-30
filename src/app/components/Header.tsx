// Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/prismicio";
import NavBar from "./NavBar";

interface NavItem {
  link: any; 
  label: string;
}

interface SettingsData {
  brand_link: any; 
  brand_label: string;
  nav_item: NavItem[];
}

interface SettingsDocument {
  data: SettingsData;
}

const Header = () => {
  const [settings, setSettings] = useState<SettingsDocument | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const client = createClient();
      const settingsData = await client.getSingle("settings");
      setSettings(settingsData as SettingsDocument);
    };

    fetchSettings();
  }, []);

  if (!settings) return null;

  return (
    <header className="w-2/3 z-50 mx-auto sticky top-4">
      <NavBar
        brandLink={settings.data.brand_link}
        brandLabel={settings.data.brand_label}
        navItems={settings.data.nav_item}
      />
    </header>
  );
};

export default Header;
