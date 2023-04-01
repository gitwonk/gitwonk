import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

// TODO: Add a max-width to this container and try using it in multiple places
const SectionContainer = ({ children, className }: Props) => (
  <div
    className={clsx(
      `sm:py-18 container mx-auto max-w-screen-xl py-16 px-4 sm:px-6 md:py-24 lg:py-24 lg:px-8`,
      className,
    )}>
    {children}
  </div>
);

export default SectionContainer;
