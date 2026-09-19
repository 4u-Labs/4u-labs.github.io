// 4U.IA.BR Tech Blog Client Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Add copy button to code blocks
  document.querySelectorAll('pre').forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.innerHTML = '<i class="fas fa-copy"></i>';
    button.title = 'Copiar código';
    
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.background = 'rgba(255, 255, 255, 0.1)';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.color = '#94a3b8';
    button.style.padding = '4px 8px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '12px';

    block.style.position = 'relative';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<i class="fas fa-check" style="color:#10b981"></i>';
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
      });
    });
  });
});
