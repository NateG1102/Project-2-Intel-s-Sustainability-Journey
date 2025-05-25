// Smooth Scroll Snapping for Enhanced UX
document.querySelectorAll('.timeline').forEach(timeline => {
    timeline.addEventListener('scroll', () => {
      const children = [...timeline.children];
      const centerIndex = children.findIndex(child => {
        const rect = child.getBoundingClientRect();
        return rect.left >= 0 && rect.right <= window.innerWidth;
      });
      children.forEach((child, index) => {
        if (index === centerIndex) {
          child.classList.add('active');
        } else {
          child.classList.remove('active');
        }
      });
    });
  });
  