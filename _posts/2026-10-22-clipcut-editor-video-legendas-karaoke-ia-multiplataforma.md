---
layout: post
title: "ClipCut Studio: Editor de Vídeo Multiplataforma com Legendas Karaokê Palavra por Palavra e IA Local"
date: 2026-10-22 15:00:00 -0300
categories: [Mídia, Vídeo, Inteligência Artificial]
tags: [clipcut, editor-de-video, capcut, legendas-karaoke, whisper-ia, corte-de-silencios, reels, tiktok, pwa, rust, 4uiabr]
author: "Fabiano Braga // 4U.IA.BR"
excerpt: "Editor de vídeo multiplataforma (Linux, Windows, macOS, Android, iOS e WebApp PWA) com legendas Karaokê palavra por palavra via Whisper IA local, corte automático de silêncios, zoom dinâmico e presets visuais estilo CapCut."
title_en: "ClipCut Studio: Multiplatform Video Editor with Word-by-Word Karaoke Captions and Local AI"
excerpt_en: "A multiplatform video editor (Linux, Windows, macOS, Android, iOS and PWA WebApp) featuring local Whisper AI word-by-word Karaoke captions, auto silence cutter, dynamic punch-in zoom and CapCut-style visual presets."
image: /assets/images/clipcut-banner.png
---

<div data-lang="pt" markdown="1">

Criar vídeos dinâmicos com legendas sincronizadas palavra por palavra, cortes rápidos de respiração e enquadramento vertical para Reels, TikTok e YouTube Shorts não deveria exigir assinaturas caras na nuvem nem o envio dos seus arquivos brutos para servidores de terceiros. O **ClipCut Studio**, desenvolvido e mantido pela **4U.IA.BR**, entrega uma estação completa de edição de vídeo multiplataforma com processamento 100% local.

Disponível tanto em versões nativas de altíssima performance (escritas em **Rust + Slint + FFmpeg + Whisper.cpp** para **Linux, Windows, macOS, Android e iOS**) quanto como **WebApp Instalável (PWA)** para tablets, iPads e Chromebooks, o ClipCut traz os recursos mais pedidos do CapCut direto para o seu dispositivo.

![ClipCut Studio — Editor de Vídeo & Legendas Karaokê IA](/assets/images/clipcut-banner.png)

### 🎤 Legendas Karaokê Palavra por Palavra (Whisper IA Local)

O grande diferencial do ClipCut Studio é o seu motor tipográfico e de transcrição neural **Whisper.cpp** rodando 100% offline na sua máquina:

- **Karaokê Palavra por Palavra Real:** a frase de 3 a 4 palavras permanece firme e perfeitamente alinhada na tela em branco com contorno preto e sombra projetada, enquanto **apenas a palavra que está sendo dita naquele exato milissegundo muda de cor** para amarelo vibrante (`#FFDE00`) ou verde neon (`#00FF88`), sem deslocar o texto.
- **Três Modos de Ritmo:** escolha em 1 clique entre **Padrão** (frases completas), **Dinâmico** (blocos curtos de impacto) ou **Karaokê** (destaque ativo palavra por palavra acompanhando a voz).
- **Importação e Exportação `.SRT`:** suporte completo a arquivos SubRip para integração com qualquer fluxo profissional.

### 🎨 Presets Visuais Estilo CapCut e Animação Pop Elástico

No painel **Texto** do inspetor lateral, você estiliza todas as legendas da timeline de uma só vez com botões nativos de 1 clique:

- **Hormozi:** tipografia pesada em caixa alta, preenchimento branco puro, borda preta espessa e destaque amarelo na palavra falada.
- **TikTok Box:** fundo escuro semitransparente arredondado com alto contraste para leitura rápida no celular.
- **Amarelo Pop & Neon Clean:** variações vibrantes que ajustam automaticamente a cor de destaque da palavra ativa para manter o contraste máximo.
- **✨ Pop Elástico:** aplica curvas de escala com efeito mola (`76% → 108% → 100%`) na entrada de cada nova frase.

### ✂️ Corte Automático de Silêncios, Zoom Dinâmico e Formato 9:16

Na janela de **Legendas**, três ferramentas de retenção automatizam horas de trabalho manual em um único clique:

- **✂️ Cortar Silêncios:** analisa os picos da onda sonora (1.000 amostras por segundo) do vídeo, detecta pausas silenciosas abaixo de `-32 dB` por mais de `0,40s`, preserva `60ms` de respiração natural e remove todas as pausas fechando os espaços magneticamente (*Ripple Delete*) em um único passo de *Desfazer* (`Ctrl+Z`).
- **🎯 Zoom Dinâmico (Punch-In):** insere automaticamente keyframes suaves de escala (`100% ↔ 114%`) ao longo do clipe principal para manter a atenção visual sem cortes bruscos.
- **📱 Formato 9:16:** converte o projeto instantaneamente para `1080×1920` vertical e ajusta os clipes de vídeo para preencher a tela inteira (*Fill*).

### 🌐 Instalação Multiplataforma: PWA, Linux, Windows, macOS, Android e iOS

O ClipCut Studio oferece pacotes dedicados para todos os dispositivos na nossa central oficial:

- **WebApp PWA (Tablets, iPad e Chromebook):** ao abrir a central web, você instala o WebApp na tela inicial em 1 clique para usar o estúdio em janela dedicada e offline.
- **Instaladores Nativos:** pacotes `.deb` / `.AppImage` para Linux, `.exe` / `.msi` para Windows, `.dmg` para macOS (Apple Silicon e Intel), `.apk` para Android e `.ipa` para iOS.

### 🚀 Experimente o ClipCut Studio

- [**Acessar ClipCut Studio (WebApp PWA & Central de Downloads)**](https://4u.ia.br/app/clipcut/)
- [**Código-Fonte e Releases Nativas no GitHub**](https://github.com/4u-Labs/clipcut)
- [**Ver na Loja 4u-Labs**](https://4u.ia.br/loja/)
- [**Ecossistema 4u-Labs no GitHub**](https://github.com/4u-Labs)
- [**Apoiar o projeto com PayPal**](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>

<div data-lang="en" markdown="1">

Creating high-retention videos with word-by-word synced captions, fast breath cuts and vertical framing for Reels, TikTok and YouTube Shorts shouldn't require expensive cloud subscriptions or uploading your raw footage to third-party servers. **ClipCut Studio**, built and maintained by **4U.IA.BR**, delivers a full multiplatform video editing workstation with 100% local processing.

Available both as ultra-fast native binaries (written in **Rust + Slint + FFmpeg + Whisper.cpp** for **Linux, Windows, macOS, Android and iOS**) and as an **Installable WebApp (PWA)** for tablets, iPads and Chromebooks, ClipCut brings the most requested CapCut workflows straight to your device.

![ClipCut Studio — Video Editor & AI Karaoke Captions](/assets/images/clipcut-banner.png)

### 🎤 Word-by-Word Karaoke Captions (Local Whisper AI)

At the heart of ClipCut Studio is its neural transcription engine (**Whisper.cpp**) and custom glyph highlighter running 100% offline on your hardware:

- **True Word-by-Word Karaoke:** each 3–4 word phrase stays rock-solid on screen in crisp white with a bold black stroke and drop shadow, while **only the currently spoken word changes color** to vibrant yellow (`#FFDE00`) or neon green (`#00FF88`) at the exact millisecond it is spoken—with zero layout jitter.
- **Three Rhythm Modes:** switch in one click between **Standard** (full sentences), **Dynamic** (punchy 2–3 word blocks) and **Karaoke** (word-by-word active highlight).
- **`.SRT` Import & Export:** full SubRip support for seamless interoperability.

### 🎨 1-Click CapCut Visual Presets & Elastic Pop Animation

Inside the **Text** inspector panel, you can restyle every caption on your timeline at once with native 1-click preset buttons:

- **Hormozi:** bold uppercase typography, pure white fill, thick black outline and yellow active-word highlight.
- **TikTok Box:** rounded semi-transparent dark pill background for effortless mobile readability.
- **Yellow Pop & Neon Clean:** high-contrast styles that automatically adapt the active word highlight color.
- **✨ Elastic Pop:** applies spring-physics scale keyframes (`76% → 108% → 100%`) at the start of each new phrase.

### ✂️ Auto Silence Cutter, Dynamic Punch-In Zoom & 9:16 Vertical Format

Inside the **Captions** dialog, three retention tools automate hours of manual editing in a single click:

- **✂️ Cut Silences:** scans the 1,000 Hz audio waveform peaks, detects silent pauses below `-32 dB` lasting `0.40s` or longer, keeps `60ms` of natural breath padding and ripple-deletes every pause in a single undoable (`Ctrl+Z`) batch.
- **🎯 Punch-In Zoom:** automatically keyframes smooth `100% ↔ 114%` scale changes across your main video clip to keep visual engagement high.
- **📱 9:16 Vertical Format:** converts the timeline to `1080×1920` vertical and frames all video clips to fill the screen.

### 🌐 Multiplatform Installation: PWA, Linux, Windows, macOS, Android & iOS

ClipCut Studio provides dedicated packages for every device from our official hub:

- **Installable PWA WebApp (Tablets, iPad & Chromebook):** prompts you on launch to install the WebApp to your home screen for standalone offline editing.
- **Native Installers:** `.deb` / `.AppImage` for Linux, `.exe` / `.msi` for Windows, `.dmg` for macOS (Apple Silicon & Intel), `.apk` for Android and `.ipa` for iOS.

### 🚀 Try ClipCut Studio

- [**Open ClipCut Studio (PWA WebApp & Download Hub)**](https://4u.ia.br/app/clipcut/)
- [**Source Code & Native Releases on GitHub**](https://github.com/4u-Labs/clipcut)
- [**Explore the 4u-Labs Store**](https://4u.ia.br/loja/)
- [**4u-Labs Ecosystem on GitHub**](https://github.com/4u-Labs)
- [**Support the project on PayPal**](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>
