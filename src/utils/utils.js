const lerp = (a, b, n) => (1 - n) * a + n * b;

const getSiblings = (element) => {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!element.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = element.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

export { lerp, getSiblings };
