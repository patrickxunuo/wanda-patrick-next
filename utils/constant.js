export const defaultVariantProps = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

export const homeDelayVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2,
    },
  },
};
