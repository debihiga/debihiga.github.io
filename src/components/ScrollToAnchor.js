export const scrollToAnchor = (anchorName) => {
  console.log(anchorName);
  const anchor = document.querySelector('#' + anchorName);
  // Scroll to anchor
  if(anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } 
  // Scroll to top
  else {
    window.scrollTo({top: 0, behavior: 'smooth', block: 'center' });
  }
};