---
layout: post
title: "PrintScreen Capture: Captura de Tela Completa, Anotações Visuais e Gravação sob o Padrão Manifest V3"
date: 2026-09-01 10:00:00 -0300
categories: [Extensões]
tags: [chrome, extensao, mv3, printscreencapture, produtividade]
author: "Fabiano Braga // 4U.IA.BR"
---

A migração obrigatória do ecossistema de extensões do Google Chrome para o **Manifest V3 (MV3)** quebrou centenas de utilitários populares de captura de tela que dependiam de páginas de fundo persistentes (persistent background pages).

Desenvolvemos o **PrintScreen Capture** como uma referência de arquitetura sob o MV3: uma extensão ultraleve, publicada na Chrome Web Store, que permite captura de página inteira com scroll automático, anotações vetoriais imediatas, gravação de vídeo e envio direto sem servidores intermediários.

---

## 1. Captura com Rolagem Automática (Full Page Scrolling)

Para capturar uma página web comprida sem quebras de layout:
- O Service Worker do MV3 envia comandos programados para o Content Script injetado na aba ativa.
- O script realiza rolagem incremental, aguarda a estabilização do DOM e captura a viewport visível através de `chrome.tabs.captureVisibleTab`.
- As fatias verticais são costuradas matematicamente em um canvas contínuo, compensando barras de navegação fixas (`position: sticky` e `position: fixed`).

Instale gratuitamente na Chrome Web Store:  
👉 [https://chromewebstore.google.com/search/4u.ia.br](https://chromewebstore.google.com/search/4u.ia.br)
