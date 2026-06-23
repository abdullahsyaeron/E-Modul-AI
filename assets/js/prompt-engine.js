/**
 * prompt-engine.js
 * Handles rendering, filtering, and copying of prompts from prompt-data.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const promptGrid = document.getElementById('prompt-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('prompt-search');
  
  if (!promptGrid || !window.promptDatabase) return;

  const prompts = window.promptDatabase;

  // Format prompt text (highlight brackets)
  function formatPromptHTML(text) {
    // Replace newlines with <br>
    let html = text.replace(/\n/g, '<br>');
    // Highlight variables in brackets like [Topik Materi]
    html = html.replace(/\[(.*?)\]/g, '<span class="prompt-var">[$1]</span>');
    return html;
  }

  // Render prompts
  function renderPrompts(data) {
    if (data.length === 0) {
      promptGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 1rem;">
          <i class="fas fa-search text-muted" style="font-size: 3rem; margin-bottom: 1rem;"></i>
          <h3 class="text-xl">Tidak ada prompt yang ditemukan</h3>
          <p class="text-muted">Coba gunakan kata kunci lain.</p>
        </div>
      `;
      return;
    }

    let html = '';
    data.forEach(p => {
      // Icon logic based on category
      let icon = 'fa-magic';
      if (p.category === 'analisis') icon = 'fa-search-plus';
      else if (p.category === 'produksi') icon = 'fa-photo-video';

      html += `
        <div class="prompt-card" data-category="${p.category}">
          <div class="prompt-card-body" style="cursor: pointer;" onclick="document.querySelector('.btn-open-modal[data-id=\\'${p.id}\\']').click()">
            <div class="prompt-card-meta">
              <div class="prompt-icon" style="color: var(--color-accent); font-size: 1.5rem;"><i class="fas ${icon}"></i></div>
            </div>
            <h3 class="prompt-card-title">${p.title}</h3>
          </div>
          <div class="prompt-card-footer">
            <button class="btn btn-sm btn-outline btn-open-modal" data-id="${p.id}" style="width: 100%;">
              Lihat Detail
            </button>
          </div>
        </div>
      `;
    });

    promptGrid.innerHTML = html;

    // Attach Modal Events
    const openBtns = promptGrid.querySelectorAll('.btn-open-modal');
    const modal = document.getElementById('prompt-modal');
    const btnClose = document.getElementById('btn-close-modal');
    const btnCopyModal = document.getElementById('modal-btn-copy');

    if (!modal) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const id = this.getAttribute('data-id');
        const p = window.promptDatabase.find(x => x.id === id);
        if (!p) return;

        // Determine icon
        let icon = 'fa-magic';
        if (p.category === 'analisis') icon = 'fa-search-plus';
        else if (p.category === 'produksi') icon = 'fa-photo-video';

        document.getElementById('modal-icon').innerHTML = `<i class="fas ${icon}"></i>`;
        document.getElementById('modal-title').innerText = p.title;
        document.getElementById('modal-desc').innerText = p.description;
        document.getElementById('modal-prompt-box').innerHTML = formatPromptHTML(p.prompt);
        btnCopyModal.setAttribute('data-text', encodeURIComponent(p.prompt));

        modal.style.display = 'flex';
      });
    });

    // Close Modal Events
    const closeModal = () => { modal.style.display = 'none'; };
    if (btnClose) btnClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });

    // Copy Event in Modal
    if (btnCopyModal) {
      // remove old listener to avoid duplicate bindings
      const newCopyBtn = btnCopyModal.cloneNode(true);
      btnCopyModal.parentNode.replaceChild(newCopyBtn, btnCopyModal);
      
      newCopyBtn.addEventListener('click', function() {
        const textToCopy = decodeURIComponent(this.getAttribute('data-text'));
        if (window.copyToClipboard) {
          window.copyToClipboard(textToCopy, 'Prompt disalin ke clipboard!');
        }
        
        const originalHtml = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Disalin';
        
        setTimeout(() => {
          this.innerHTML = originalHtml;
        }, 2000);
      });
    }
  }

  // Filter and Search Logic
  function applyFilters() {
    // 1. Get active category
    const activeBtn = document.querySelector('.filter-btn.active');
    const activeCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    
    // 2. Get search query
    const query = (searchInput ? searchInput.value.toLowerCase() : '');

    // 3. Filter data
    const filtered = prompts.filter(p => {
      const matchCategory = (activeCategory === 'all' || p.category === activeCategory);
      const matchSearch = p.title.toLowerCase().includes(query) || 
                          p.description.toLowerCase().includes(query) ||
                          p.prompt.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });

    // 4. Render
    renderPrompts(filtered);
  }

  // Bind Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      applyFilters();
    });
  });

  // Bind Search Input
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // Initial Render
  renderPrompts(prompts);
});
