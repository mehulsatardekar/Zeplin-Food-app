export const cardScroller = (node, scroll) => {
  node.current.scrollTo({
    left: scroll,
    behavior: "smooth",
  });
};
