'use client';
import { KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";

type ButtonProps = {
  linkField: LinkField;
  label: KeyTextField;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  return (
    <PrismicNextLink
      field={linkField}
      className={clsx(
        "group relative flex w-fit intem-center justify-center overflow-hidden rounded-md border-2 border-raisin-black dark:border-raisin-white shadow-lg px-4 py-2 font-bold transition-transform ease-out hover:scale-105, className"
      )}
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-aero transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
      <span className="relative">
        {label}
        {showIcon && <Icon icon="line-md:downloading-loop" className="inline-block w-6 h-6 ml-4"/>}
      </span>
    </PrismicNextLink>
  );
}
