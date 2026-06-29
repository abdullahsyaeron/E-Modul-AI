import os
import re
import glob

files = [
    'index.html',
    'prompt.html',
    'evaluasi.html',
    'tentang.html',
    'materi.html',
    'materi-bab1.html',
    'materi-bab2.html',
    'materi-bab3.html',
    'materi-bab4.html',
    'materi-bab5.html'
]

navbar_html = """
    <!-- TOP NAVBAR -->
    <nav class="navbar-glass">
        <div class="navbar-brand">
            <div class="logo-icon">
                <i data-lucide="bot" size="20"></i>
            </div>
            E-Modul AI
        </div>
        <div class="navbar-nav">
            <a href="index.html">Dashboard</a>
            <a href="materi.html">Materi</a>
            <a href="prompt.html">Prompt Library</a>
            <a href="evaluasi.html">Evaluasi</a>
            <a href="tentang.html">Tentang</a>
        </div>
        <button id="navbar-toggle" class="hamburger-btn">
            <i data-lucide="menu" size="24"></i>
        </button>
    </nav>

    <!-- MOBILE MENU -->
    <div id="mobile-menu" class="mobile-menu">
        <a href="index.html" class="nav-item">Dashboard</a>
        <a href="materi.html" class="nav-item">Materi</a>
        <a href="prompt.html" class="nav-item">Prompt Library</a>
        <a href="evaluasi.html" class="nav-item">Evaluasi</a>
        <a href="tentang.html" class="nav-item">Tentang</a>
    </div>
"""

footer_html = """
    <!-- FOOTER -->
    <footer class="apple-footer">
        <p>&copy; 2026 E-Modul Skripsi AI. Dirancang untuk Pendidikan Vokasi.</p>
        <p><a href="tentang.html">Tentang Modul</a></p>
    </footer>
"""

materi_sidebar = """
            <!-- MATERI SIDEBAR -->
            <aside class="materi-sidebar">
                <h4>Daftar Bab</h4>
                <div class="materi-nav-list">
                    <a href="materi.html">Pengantar Materi</a>
                    <a href="materi-bab1.html">Bab 1: Pengenalan AI</a>
                    <a href="materi-bab2.html">Bab 2: Dasar Prompting</a>
                    <a href="materi-bab3.html">Bab 3: Analisis Instruksional</a>
                    <a href="materi-bab4.html">Bab 4: Produksi Media</a>
                    <a href="materi-bab5.html">Bab 5: Etika & Evaluasi</a>
                </div>
            </aside>
"""

def process_file(filepath):
    filepath = os.path.join(r"d:\APPS\xampp\htdocs\E-Modul Skripsi", filepath)
    if not os.path.exists(filepath):
        print(f"Not found: {filepath}")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace CSS Links
    content = content.replace('assets/css/main.css', 'assets/css/apple-main.css')
    content = content.replace('assets/css/components.css', 'assets/css/apple-components.css')
    content = content.replace('assets/css/pages.css', 'assets/css/apple-pages.css')
        
    # Remove old navbar and tabbar
    content = re.sub(r'<aside class="app-sidebar">.*?</aside>', '', content, flags=re.DOTALL)
    content = re.sub(r'<nav class="app-tabbar">.*?</nav>', '', content, flags=re.DOTALL)
    
    # Remove old top navbar if it exists
    content = re.sub(r'<nav class="navbar"[^>]*>.*?</nav>', '', content, flags=re.DOTALL)
    
    # Remove old mobile bottom tabbar if it exists
    content = re.sub(r'<!-- Mobile Bottom Tabbar -->', '', content)
    
    # Remove app-layout wrapper
    content = re.sub(r'<div class="app-layout">', '', content)
    
    # Remove app-content-wrapper and app-content-card
    content = re.sub(r'<main class="app-content-wrapper">', '<main class="container-center">', content)
    content = re.sub(r'<div class="app-content-card">', '', content)
    
    # Replace <body class="..."> with standard body and insert navbar
    body_pattern = r'(<body[^>]*>)'
    content = re.sub(body_pattern, r'\1\n' + navbar_html, content)
    
    # Insert footer before closing body
    content = re.sub(r'</body>', footer_html + '\n</body>', content)
    
    # For materi pages, we need to wrap the container-center in materi-layout
    if 'materi' in filepath:
        content = content.replace('<main class="container-center">', '<div class="materi-layout">\n' + materi_sidebar + '\n<main class="materi-content">')
        
    # Some manual fixes for extra closing divs at the end
    content = re.sub(r'(</div>\s*)+<script', r'</main>\n<script' if 'materi' not in filepath else r'</main>\n</div>\n<script', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {filepath}")

for f in files:
    process_file(f)
