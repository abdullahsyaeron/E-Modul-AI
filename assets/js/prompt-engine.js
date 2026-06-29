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
          <div class="prompt-card" data-category="${p.category}" onclick="document.querySelector('.btn-open-modal[data-id=\\'${p.id}\\']').click()">
            <div class="prompt-card-badge">
              <i class="ph ${icon}"></i>
              <span>${catName}</span>
            </div>
            <div class="prompt-card-body">
              <h3 class="prompt-card-title">${p.title}</h3>
              <p class="prompt-card-desc">${p.description || 'Prompt untuk membantu Anda merancang media pembelajaran secara efektif.'}</p>
            </div>
            <div class="prompt-card-footer-meta">
              <div class="meta-left">
                <i class="ph ph-check-circle text-success" style="color: var(--color-success);"></i>
                <span>Siap Pakai</span>
              </div>
              <div class="meta-right">
                <span>Lihat Detail <i class="ph ph-arrow-right"></i></span>
              </div>
            </div>
            <button class="btn-open-modal" data-id="${p.id}" style="display: none;"></button>
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
        
        let contentHtml = '';
        
        if (p.guide) {
          contentHtml += `
            <div style="background: rgba(14, 165, 233, 0.05); border-left: 4px solid var(--color-primary); padding: 15px; margin-bottom: 20px; border-radius: 4px; color: #1D1D1F;">
              <h4 style="color: var(--color-primary-dark); margin-bottom: 10px; font-weight: bold;"><i class="fas fa-info-circle"></i> Panduan Penggunaan</h4>
              <div style="font-size: 0.9rem; line-height: 1.5; color: #1D1D1F;">${formatPromptHTML(p.guide)}</div>
            </div>
          `;
        }

        contentHtml += `
          <h4 style="margin-bottom: 10px; font-weight: bold; color: #1D1D1F;"><i class="fas fa-terminal text-muted"></i> Prompt Utama <span style="font-size: 0.8rem; font-weight: normal; color: #6E6E73;">(Klik Salin di bawah untuk menyalin bagian ini saja)</span></h4>
          <div style="background: #F1F5F9; color: #0F172A; padding: 16px; border-radius: 8px; border: 1px solid #CBD5E1; margin-bottom: 20px; font-family: monospace; font-size: 0.92rem; line-height: 1.65;">${formatPromptHTML(p.prompt)}</div>
        `;

        if (p.exampleInput) {
          contentHtml += `
            <h4 style="margin-bottom: 10px; font-weight: bold; color: #1D1D1F;"><i class="fas fa-keyboard text-muted"></i> Contoh Input Data Anda</h4>
            <div style="background: white; color: #334155; padding: 15px; border-radius: 8px; border: 1px dashed #CBD5E1; margin-bottom: 20px; font-size: 0.9rem; line-height: 1.6;">${formatPromptHTML(p.exampleInput)}</div>
          `;
        }

        if (p.exampleOutput) {
          contentHtml += `
            <h4 style="margin-bottom: 10px; font-weight: bold; color: #1D1D1F;"><i class="fas fa-robot text-muted"></i> Contoh Hasil dari AI</h4>
            <div style="background: #f8fafc; color: #334155; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.9rem; line-height: 1.6; border-left: 4px solid #10b981;">${formatPromptHTML(p.exampleOutput)}</div>
          `;
        }

        document.getElementById('modal-prompt-box').innerHTML = contentHtml;
        document.getElementById('modal-prompt-box').style.background = 'transparent';
        document.getElementById('modal-prompt-box').style.border = 'none';
        document.getElementById('modal-prompt-box').style.padding = '0';

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

