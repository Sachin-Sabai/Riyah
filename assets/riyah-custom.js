/* RIYAH THEME CUSTOM JS */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Shrink Effect
  const headerWrapper = document.querySelector('.header-wrapper');
  if (headerWrapper) {
    headerWrapper.classList.add('header-wrapper--sticky');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerWrapper.classList.add('is-scrolled');
      } else {
        headerWrapper.classList.remove('is-scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // 2. Intersection Observer for Text Staggering
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-triggered');
        // Unobserve after triggering if we only want it once
        // staggerObserver.unobserve(entry.target); 
      }
    });
  }, { rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate--stagger-words').forEach((el) => {
    staggerObserver.observe(el);
  });
});
