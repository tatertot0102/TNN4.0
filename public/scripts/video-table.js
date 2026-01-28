// public/scripts/video-table.js
// Handles rendering the video table

const sectionLabels = {
  hardnews: 'Hard News',
  features: 'Features',
  breaking: 'Breaking',
  docs: 'Docs',
  opinion: 'Opinion',
  heartwarming: 'Heartwarming',
  promo: 'Promo',
  catalog: 'Catalog'
};

const placementLabels = {
  hero: '🎬 Hero',
  'todays-mix': '⭐ Mix',
  'section-featured': '📌 Featured',
  'section-item': '📄 Item'
};

const placementBadgeClass = {
  hero: 'badge-hero',
  'todays-mix': 'badge-mix',
  'section-featured': 'badge-featured',
  'section-item': 'badge-item'
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function createVideoRow(video) {
  const thumbnailHtml = video.thumbnail
    ? `<img src="${video.thumbnail}" class="thumb-preview" alt="Thumbnail" />`
    : '<div class="thumb-placeholder">📹</div>';

  const titleText = escapeHtml(video.title || 'Untitled');
  const linkText = escapeHtml((video.href || '').slice(0, 70));
  const linkDisplay = (video.href || '').length > 70 ? linkText + '...' : linkText;

  const sectionLabel = sectionLabels[video.section] || video.section || '-';
  const placementLabel = placementLabels[video.placement] || video.placement || '-';
  const badgeClass = placementBadgeClass[video.placement] || 'badge-item';

  const statusBadge = video.published
    ? '<span class="badge badge-published">✓ Published</span>'
    : '<span class="badge badge-draft">✗ Draft</span>';

  return `
    <tr data-id="${video.id}">
      <td>
        <div class="video-cell">
          ${thumbnailHtml}
          <div class="video-info">
            <div class="title">${titleText}</div>
            <div class="sub">
              <span class="link-icon">🔗</span>
              ${linkDisplay}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span class="section-badge">${sectionLabel}</span>
      </td>
      <td>
        <span class="badge ${badgeClass}">${placementLabel}</span>
      </td>
      <td>
        <span class="order-badge">#${video.display_order || 0}</span>
      </td>
      <td>${statusBadge}</td>
      <td class="row-actions">
        <button class="btn" data-edit="${video.id}">✏️ Edit</button>
        <button class="btn danger" data-del="${video.id}">🗑️</button>
      </td>
    </tr>
  `;
}

export function renderVideoTable(videos, container, handlers) {
  if (!videos || videos.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <div class="empty-icon">📭</div>
        <div>No videos found</div>
      </div>
    `;
    return;
  }

  const rows = videos.map(v => createVideoRow(v)).join('');

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th style="width:40%">VIDEO</th>
          <th style="width:12%">SECTION</th>
          <th style="width:14%">PLACEMENT</th>
          <th style="width:8%">ORDER</th>
          <th style="width:12%">STATUS</th>
          <th style="width:14%">ACTIONS</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  // Attach event handlers
  container.querySelectorAll('tbody tr').forEach(row => {
    row.onclick = () => handlers.onEdit(row.dataset.id);
  });

  container.querySelectorAll('[data-edit]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      handlers.onEdit(btn.dataset.edit);
    };
  });

  container.querySelectorAll('[data-del]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      handlers.onDelete(btn.dataset.del);
    };
  });
}