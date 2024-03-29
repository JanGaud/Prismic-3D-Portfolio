'use client'

import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    );

    const icon = resolvedTheme === 'dark' ? "ph:moon-bold" : "ph:sun-bold";
    const iconColorClass = resolvedTheme === 'dark' ? 'text-raisin-black' : 'text-yellow-600';
    const themeChangeHandler = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

    return (
        <button
            className="fixed z-20 bottom-4 right-4 md:top-4 rounded-full md:bottom-[auto] bg-[#ffffff8c] backdrop-blur-lg p-2 shadow-lg cursor-pointer"
            onClick={themeChangeHandler}
        >
            <Icon icon={icon} className={`${iconColorClass} w-8 h-8`} />
        </button>
    );
}