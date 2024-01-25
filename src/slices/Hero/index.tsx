import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  const renderLetters = (name:KeyTextField, key:string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className={`name-animation name-animation-${key} inline-block opacity-0`}>{letter}</span>
    ))
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh]">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
              slice.primary.first_name + " " + slice.primary.last_name
            }
          >
            <span className="block text-aero">{renderLetters(slice.primary.first_name, "first")}</span>
            <span className="-mt-[.2em] block text-aero">
              {renderLetters(slice.primary.last_name, "last")}
            </span>
          </h1>
          <span className="block bg-gradient-to-tr dark:from-gray-400 dark:via-gray-200 dark:to-gray-400 from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl">
            {slice.primary.tag_line}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
