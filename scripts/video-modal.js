// public/scripts/video-modal.js
// Handles the add/edit video modal

function initModal(supabase, onSave) {
  const modal = document.getElementById('modal');
  const form = document.getElementById('form');
  const addBtn = document.getElementById('add');
  const closeBtn = document.getElementById('close');
  const extractBtn = document.getElementById('extract-btn');

  // Show/hide modal
  function showModal(show) {
    modal.classList.toggle('active', show);
  }

  // Open for new video
  addBtn.onclick = () => {
    form.reset();
    document.getElementById('modal-title').textContent = 'Add Video';
    document.getElementById('id').value = '';
    document.getElementById('published').checked = true;
    document.getElementById('display_order').value = 0;
    showModal(true);
  };

  // Close modal
  closeBtn.onclick = () => showModal(false);
  modal.onclick = (e) => {
    if (e.target === modal) showModal(false);
  };

  // Hero variant toggle
  document.getElementById('placement').onchange = () => {
    const isHero = document.getElementById('placement').value === 'hero';
    document.getElementById('hero-variant-wrap').style.display = isHero ? 'block' : 'none';
  };

  // YouTube extraction
  extractBtn.onclick = async () => {
    const url = document.getElementById('href').value;
    if (!url) {
      alert('Please enter a YouTube URL first');
      return;
    }

    const videoId = extractYouTubeId(url);
    if (!videoId) {
      alert('Invalid YouTube URL');
      return;
    }

    extractBtn.textContent = '⏳ Extracting...';
    extractBtn.disabled = true;

    try {
      const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
      const response = await fetch(oembedUrl);
      const data = await response.json();

      if (data.title && !document.getElementById('title').value) {
        document.getElementById('title').value = data.title;
      }
      
      if (data.author_name && !document.getElementById('byline').value) {
        document.getElementById('byline').value = data.author_name;
      }

      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      if (!document.getElementById('thumbnail').value) {
        document.getElementById('thumbnail').value = thumbnailUrl;
      }

      try {
        const noembedUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;
        const noembedResponse = await fetch(noembedUrl);
        const noembedData = await noembedResponse.json();
        
        if (noembedData.duration && !document.getElementById('runtime').value) {
          document.getElementById('runtime').value = formatDuration(noembedData.duration);
        }
      } catch (e) {
        console.log('Could not fetch duration');
      }

      if (!document.getElementById('date').value) {
        const now = new Date();
        document.getElementById('date').value = now.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        });
      }

      alert('✅ Info extracted successfully!');
    } catch (error) {
      console.error(error);
      alert('❌ Could not extract video info. Please fill manually.');
    } finally {
      extractBtn.textContent = '🔍 Extract Info from YouTube';
      extractBtn.disabled = false;
    }
  };

  // Image upload
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('file-input');
  const thumbInput = document.getElementById('thumbnail');

  uploadArea.onclick = () => fileInput.click();

  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => thumbInput.value = reader.result;
      reader.readAsDataURL(file);
    }
  };

  uploadArea.ondragover = (e) => e.preventDefault();
  uploadArea.ondrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => thumbInput.value = reader.result;
      reader.readAsDataURL(file);
    }
  };

  // Form submission
  form.onsubmit = async (e) => {
    e.preventDefault();

    const placement = document.getElementById('placement').value;
    const section = document.getElementById('section').value;

    const payload = {
      section: section,
      placement: placement,
      title: document.getElementById('title').value,
      href: document.getElementById('href').value,
      thumbnail: document.getElementById('thumbnail').value || null,
      dek: document.getElementById('dek').value || null,
      byline: document.getElementById('byline').value || null,
      category: section, // category = section
      runtime: document.getElementById('runtime').value || null,
      date: document.getElementById('date').value || null,
      display_order: Number(document.getElementById('display_order').value) || 0,
      published: document.getElementById('published').checked,
      hero_variant: placement === 'hero' ? document.getElementById('hero_variant').value : null,
      show_in_catalog: true
    };

    console.log('Saving video with data:', payload);

    const id = document.getElementById('id').value;

    try {
      let result;
      if (id) {
        result = await supabase.from('videos').update(payload).eq('id', id).select();
      } else {
        result = await supabase.from('videos').insert(payload).select();
      }

      if (result.error) {
        console.error('Supabase error:', result.error);
        alert('Error saving video: ' + result.error.message);
        return;
      }

      console.log('Video saved successfully:', result.data);
      showModal(false);
      onSave();
    } catch (error) {
      console.error('Error saving video:', error);
      alert('Error saving video: ' + error.message);
    }
  };
}

function extractYouTubeId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
    /youtube\.com\/shorts\/([^&\?\/]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

window.initModal = initModal;