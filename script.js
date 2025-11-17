// IntersectionObserver でフェードインを制御します
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('visible'));
  }
});