export let divVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export let containerAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
export let childrensAnimate = {
  // hidden: ,
  // visible:
};
