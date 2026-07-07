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
            <i class="ph ph-magnifying-glass text-muted" style="font-size: 3rem; margin-bottom: 1rem;"></i>
            <h3 class="text-xl">Tidak ada prompt yang ditemukan</h3>
            <p class="text-muted">Coba gunakan kata kunci lain.</p>
          </div>
        `;
        return;
      }
  
      let html = '';
      data.forEach(p => {
        // Icon logic based on category
        let icon = 'ph-magic-wand';
        let catName = 'Template AI';
        
        if (p.category === 'analisis') {
          icon = 'ph-magnifying-glass';
          catName = 'Analisis Instruksional';
        } else if (p.category === 'produksi') {
          icon = 'ph-video-camera';
          catName = 'Produksi Media';
        }
  
        html += `
          <div class="prompt-card" data-id="${p.id}" data-category="${p.category}">
            <div class="prompt-card-badge">
              <i class="ph ${icon}"></i>
              <span>${catName}</span>
            </div>
            <div class="prompt-card-body">
              <h3 class="prompt-card-title">${p.title}</h3>
              <p class="prompt-card-desc">${p.description || 'Prompt untuk membantu Anda merancang media pembelajaran secara efektif.'}</p>
            </div>
            <div class="prompt-card-footer">
              <div class="meta-left">
                <i class="ph ph-check-circle text-success" style="color: var(--color-success);"></i>
                <span>Siap Pakai</span>
              </div>
              <div class="meta-right">
                <span>Lihat Detail <i class="ph ph-arrow-right"></i></span>
              </div>
            </div>
          </div>
        `;
      });
  
      promptGrid.innerHTML = html;

    // Attach Modal Events
    const cards = promptGrid.querySelectorAll('.prompt-card');
    const modal = document.getElementById('prompt-modal');
    const btnClose = document.getElementById('btn-close-modal');
    const btnCopyModal = document.getElementById('modal-btn-copy');

    if (!modal) return;

    cards.forEach(card => {
      card.addEventListener('click', function(e) {
        const id = this.getAttribute('data-id');
        const p = window.promptDatabase.find(x => x.id === id);
        if (!p) return;

        const iconEl = document.getElementById('modal-icon');
        if (iconEl) {
          let icon = 'ph-magic-wand';
          if (p.category === 'analisis') icon = 'ph-magnifying-glass-plus';
          else if (p.category === 'produksi') icon = 'ph-image';
          iconEl.innerHTML = `<i class="ph ${icon}" style="font-size: 24px; color: var(--color-primary);"></i>`;
        }
        document.getElementById('modal-title').innerText = p.title;
        document.getElementById('modal-desc').innerText = p.description;
        
        let contentHtml = '';
        
        if (p.guide) {
          contentHtml += `
            <div class="prompt-modal-guide-box">
              <h4 class="prompt-modal-guide-title"><i class="ph ph-info"></i> Panduan Penggunaan</h4>
              <div style="font-size: 0.95rem; line-height: 1.6;">${formatPromptHTML(p.guide)}</div>
            </div>
          `;
        }

        contentHtml += `
          <h4 class="prompt-modal-section-title"><i class="ph ph-terminal text-muted"></i> Prompt Utama <span>(Klik Salin di bawah untuk menyalin bagian ini saja)</span></h4>
          <div class="prompt-modal-main-box">${formatPromptHTML(p.prompt)}</div>
        `;

        if (p.exampleInput) {
          contentHtml += `
            <h4 class="prompt-modal-section-title"><i class="ph ph-keyboard text-muted"></i> Contoh Input Data Anda</h4>
            <div class="prompt-modal-input-box">${formatPromptHTML(p.exampleInput)}</div>
          `;
        }

        if (p.exampleOutput) {
          contentHtml += `
            <h4 class="prompt-modal-section-title"><i class="ph ph-robot text-muted"></i> Contoh Hasil dari AI</h4>
            <div class="prompt-modal-output-box">${formatPromptHTML(p.exampleOutput)}</div>
          `;
        }

        document.getElementById('modal-prompt-box').innerHTML = contentHtml;
        document.getElementById('modal-prompt-box').style.background = 'transparent';
        document.getElementById('modal-prompt-box').style.border = 'none';
        document.getElementById('modal-prompt-box').style.padding = '0';

        const liveCopyBtn = document.getElementById('modal-btn-copy');
        if (liveCopyBtn) {
          liveCopyBtn.setAttribute('data-text', encodeURIComponent(p.prompt));
        }

        modal.classList.add('active');
      });
    });

    // Close Modal Events
    const closeModal = () => { modal.classList.remove('active'); };
    if (!modal.dataset.boundClose) {
      modal.dataset.boundClose = 'true';
      if (btnClose) btnClose.addEventListener('click', closeModal);
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
      });
    }

    // Copy Event in Modal
    const currentCopyBtn = document.getElementById('modal-btn-copy');
    if (currentCopyBtn && !currentCopyBtn.dataset.boundCopy) {
      currentCopyBtn.dataset.boundCopy = 'true';
      currentCopyBtn.addEventListener('click', function() {
        const rawText = this.getAttribute('data-text');
        if (!rawText) return;
        const textToCopy = decodeURIComponent(rawText);
        if (window.copyToClipboard) {
          window.copyToClipboard(textToCopy, 'Prompt berhasil disalin!');
        }
        
        const originalHtml = this.innerHTML;
        this.innerHTML = '<i class="ph ph-check" style="font-size: 18px;"></i> Disalin';
        
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

