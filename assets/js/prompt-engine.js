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
      if (p.category === 'perencanaan') icon = 'fa-file-alt';
      else if (p.category === 'materi') icon = 'fa-book-open';
      else if (p.category === 'evaluasi') icon = 'fa-clipboard-check';
      else if (p.category === 'interaksi') icon = 'fa-users';

      html += `
        <div class="prompt-card" data-category="${p.category}">
          <div class="prompt-header">
            <div class="prompt-icon"><i class="fas ${icon}"></i></div>
            <h3 class="prompt-title">${p.title}</h3>
          </div>
          <p class="prompt-desc">${p.description}</p>
          <div class="prompt-body">
            ${formatPromptHTML(p.prompt)}
          </div>
          <div class="prompt-footer">
            <button class="btn btn-sm btn-secondary btn-copy" data-text="${encodeURIComponent(p.prompt)}">
              <i class="fas fa-copy"></i> Salin Prompt
            </button>
          </div>
        </div>
      `;
    });

    promptGrid.innerHTML = html;

    // Attach copy events
    const copyBtns = promptGrid.querySelectorAll('.btn-copy');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const textToCopy = decodeURIComponent(this.getAttribute('data-text'));
        
        if (window.copyToClipboard) {
          window.copyToClipboard(textToCopy, 'Prompt disalin ke clipboard!');
        }
        
        // Visual feedback on button
        const originalHtml = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Disalin';
        this.classList.remove('btn-secondary');
        this.classList.add('btn-primary');
        
        setTimeout(() => {
          this.innerHTML = originalHtml;
          this.classList.remove('btn-primary');
          this.classList.add('btn-secondary');
        }, 2000);
      });
    });
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
