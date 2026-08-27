// Simple search button placeholder
document.querySelector('.search-btn').addEventListener('click', () => {
  alert('Search coming soon! For now, use the navigation to browse categories.');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
  });
});