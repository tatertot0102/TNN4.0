// VideoRow.js - Reusable video row component for admin dashboard

export function createVideoRow(video, handlers) {
  const { onEdit, onDelete } = handlers;
  
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
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

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
      <td>
        ${statusBadge}
      </td>
      <td class="row-actions">
        <button class="btn" onclick="event.stopPropagation();" data-edit="${video.id}">✏️ Edit</button>
        <button class="btn danger" onclick="event.stopPropagation();" data-del="${video.id}">🗑️</button>
      </td>
    </tr>
  `;
}

export function attachVideoRowHandlers(container, handlers) {
  const { onEdit, onDelete, onRowClick } = handlers;

  // Row click to edit
  container.querySelectorAll('tbody tr').forEach(row => {
    row.onclick = () => {
      if (onRowClick) onRowClick(row.dataset.id);
    };
  });

  // Edit button
  container.querySelectorAll('[data-edit]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      if (onEdit) onEdit(btn.dataset.edit);
    };
  });

  // Delete button
  container.querySelectorAll('[data-del]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      if (onDelete) onDelete(btn.dataset.del);
    };
  });
}

// Styles for video rows (import this CSS into your dashboard)
export const videoRowStyles = `
  .video-cell {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .thumb-preview {
    width: 100px;
    height: 56px;
    object-fit: cover;
    border-radius: 6px;
    border: 2px solid var(--text);
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    flex-shrink: 0;
    transition: transform 0.2s;
  }

  .thumb-preview:hover {
    transform: scale(1.08);
  }

  .thumb-placeholder {
    width: 100px;
    height: 56px;
    border-radius: 6px;
    border: 2px dashed #94a3b8;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-size: 24px;
    flex-shrink: 0;
  }

  .video-info {
    flex: 1;
    min-width: 0;
  }

  .title {
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 8px;
    color: #0f172a;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .sub {
    font-size: 13px;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1.4;
  }

  .link-icon {
    color: var(--blue);
    font-size: 16px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .badge-hero { 
    background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
    color: #6b21a8; 
    border: 2px solid #a855f7;
  }
  
  .badge-mix { 
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #92400e; 
    border: 2px solid #f59e0b;
  }
  
  .badge-featured { 
    background: linear-gradient(135deg, #dbeafe, #bfdbfe);
    color: #1e40af; 
    border: 2px solid #3b82f6;
  }
  
  .badge-item { 
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
    color: #374151; 
    border: 2px solid #9ca3af;
  }

  .badge-published {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
    border: 2px solid #10b981;
  }

  .badge-draft {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #991b1b;
    border: 2px solid #ef4444;
  }

  .section-badge {
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
    color: #3730a3;
    padding: 8px 14px;
    border-radius: 8px;
    font-weight: 900;
    font-size: 13px;
    border: 2px solid #6366f1;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .order-badge {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #78350f;
    padding: 8px 14px;
    border-radius: 8px;
    font-weight: 900;
    font-size: 14px;
    border: 2px solid #f59e0b;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .row-actions {
    white-space: nowrap;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .row-actions .btn {
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 800;
    transition: all 0.2s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .row-actions .btn:not(.danger) {
    background: linear-gradient(135deg, var(--blue), #3b82f6);
    color: white;
    border: 2px solid var(--blue);
  }

  .row-actions .btn:not(.danger):hover {
    background: linear-gradient(135deg, var(--blue2), var(--blue));
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
  }

  .row-actions .btn.danger {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #991b1b;
    border: 2px solid #ef4444;
  }

  .row-actions .btn.danger:hover {
    background: linear-gradient(135deg, #fecaca, #fca5a5);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(239, 68, 68, 0.3);
  }
`;