export const scrollToAnchor = (anchorName) => {
    console.log(anchorName);
    const anchor = document.querySelector('#' + anchorName);
    if(anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };