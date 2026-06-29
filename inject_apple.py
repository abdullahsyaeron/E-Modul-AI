import os
import glob
import re

files = glob.glob('*.html')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 1. Inject apple-theme.css
    if 'apple-theme.css' not in content:
        content = content.replace('</head>', '    <link rel="stylesheet" href="assets/css/apple-theme.css">\n</head>')
    
    # 2. Hide Mobile Navbar Tabbar by adding style="display:none;"
    # Instead of deleting, just safely hide it to preserve any potential JS ties
    content = re.sub(r'(<div class="navbar-mobile"[^>]*>)', r'\1\n    <style>#navbar-mobile { display: none !important; }</style>', content)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print(f"Processed {f}")
