// Composable for scroll-reveal animations
export function useScrollReveal() {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all reveal elements
    const selectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale', '.reveal-stagger']
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => observer.observe(el))
    })

    // Cleanup
    onUnmounted(() => observer.disconnect())
  })
}
