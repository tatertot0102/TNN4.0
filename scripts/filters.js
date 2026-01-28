// public/scripts/filters.js
// Handles filtering logic for the video catalog

function initFilters(videos, elements) {
  const { search, section, placement, status } = elements;

  const searchTerm = (search.value || '').toLowerCase();
  const sectionValue = section.value;
  const placementValue = placement.value;
  const statusValue = status.value;

  return videos.filter(video => {
    // Search filter
    const matchesSearch = !searchTerm ||
      (video.title || '').toLowerCase().includes(searchTerm) ||
      (video.href || '').toLowerCase().includes(searchTerm) ||
      (video.byline || '').toLowerCase().includes(searchTerm);

    // Section filter
    const matchesSection = !sectionValue || video.section === sectionValue;

    // Placement filter
    const matchesPlacement = !placementValue || video.placement === placementValue;

    // Status filter
    const isPublished = !!video.published;
    const matchesStatus = !statusValue ||
      (statusValue === 'published' && isPublished) ||
      (statusValue === 'draft' && !isPublished);

    return matchesSearch && matchesSection && matchesPlacement && matchesStatus;
  });
}
window.initFilters = initFilters;