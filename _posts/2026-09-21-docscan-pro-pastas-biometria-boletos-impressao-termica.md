---
layout: post
title: "DocScan Pro 2.0: Pastas com Biometria, Leitor de Boletos Febraban e Impressão Térmica"
date: 2026-09-21 16:00:00 -0300
categories: [Produtividade]
tags: [scanner, ocr, biometria, webauthn, febraban, impressaotermica, pwa, produtividade]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "DocScan Pro 2.0: Biometric Folders, Febraban Bank Slips & Direct Thermal Printing"
excerpt_en: "The major evolution of our open-source scanner PWA: native fingerprint unlock via WebAuthn, 47-digit bank slip decoding, and ESC/POS thermal printing."
---

<div data-lang="pt">
O **DocScan Pro** acaba de passar pela sua maior evolução desde o lançamento. O projeto, concebido como uma alternativa leve, de código aberto e focada em privacidade aos aplicativos tradicionais de scanner (como CamScanner e Adobe Scan), agora integra recursos de segurança biométrica, automação bancária e conexão direta com hardware físico de impressão.

Tudo isso funcionando **100% no navegador**, sem anúncios, sem marcas d'água forçadas e com arquitetura *Client-Side First* (seus documentos nunca ficam salvos em servidores de terceiros).

Abaixo, destacamos as principais novidades da versão 2.0:

---

### 1. Pastas Seguras com Biometria Nativa & PIN (WebAuthn)
A privacidade documental subiu de nível. Usuários frequentemente digitalizam exames médicos, holerites, contratos de confidencialidade e certidões que não devem ficar expostos a olhares curiosos na tela do celular.

* **Cofre por PIN de 4 dígitos:** Proteja qualquer pasta individual com uma senha numérica rápida.
* **Desbloqueio por Impressão Digital ou Face ID:** Utilizando a API padrão da W3C **WebAuthn** (*PublicKeyCredential*), o DocScan Pro comunica-se diretamente com o sensor biométrico do smartphone. Você encosta o dedo no leitor e a pasta é desbloqueada instantaneamente.
* **Gerenciamento e Exclusão Segura:** Menu dedicado de 3 pontinhos (⋮) em cada pasta com proteção contra perda de dados — ao excluir uma pasta, os documentos são preservados e movidos de volta para a raiz.

---

### 2. Leitor e Decodificador de Boletos Febraban (47 Dígitos)
Pagar contas no Brasil é uma rotina que envolve digitar longas linhas numéricas ou lidar com leitores de código de barras lentos.

* O DocScan Pro incorpora um decodificador de código de barras 1D de alta precisão calibrado para o padrão **Febraban**.
* Aponte a câmera para boletos de cobrança, água, luz, internet ou tributos: o app decodifica na hora a **linha digitável completa de 47 dígitos**, permitindo copiar o código com 1 toque para colar no aplicativo do seu banco.

---

### 3. Impressão Térmica Direta ESC/POS (80mm e 58mm)
Para pequenos comércios, prestadores de serviço e escritórios, transformar fotos e comprovantes em recibos físicos sempre foi um gargalo.

* **Suporte a Mini Impressoras Térmicas:** Compatível com modelos USB e Bluetooth de 58mm e 80mm (como a consagrada Bematech MP-4200 TH e terminais POS).
* **Dithering Floyd-Steinberg:** Algoritmo avançado de pontilhismo térmico que converte fotos em preto e branco puro de alta nitidez, eliminando borrões escuros no papel térmico e acionando o corte automático de guilhotina.

---

### 4. Som de Obturador de Alta Fidelidade & Tela Cheia Dinâmica (`100dvh`)
A experiência de uso foi polida ao nível de aplicativos nativos de ponta:

* **Resposta Acústica Instantânea:** Som autêntico de obturador de câmera gravado e tratado com 0ms de latência, com opção de ativação/desativação nas Configurações.
* **Ajuste Dinâmico de Tela:** Utilização de unidades `100dvh` (Dynamic Viewport Height) para garantir que barras de navegação móveis retráteis nunca cortem o botão de captura ou as ferramentas de edição.

---

### 5. PWA Instalável & Funcionamento 100% Offline
O DocScan Pro pode ser instalado em 1 clique pelo novo botão **"Instalar App"** no topo da tela, comportando-se como um aplicativo nativo no Android, iOS e computadores, operando perfeitamente sem sinal de internet e com sincronização opcional com o Google Drive pessoal.

---

🔗 **Acesse e teste gratuitamente:**  
👉 [https://4u.ia.br/app/scanner/](https://4u.ia.br/app/scanner/)  
📖 [Manual e Tutorial Completo](https://4u.ia.br/app/scanner/tutorial.html)  
⭐ [Código Aberto no GitHub](https://github.com/4u-Labs/scanner)
</div>

<div data-lang="en">
**DocScan Pro** has just received its biggest update since launch. Designed as a lightweight, open-source, and privacy-focused alternative to traditional bloated scanner apps (such as CamScanner and Adobe Scan), it now brings native biometric security, banking automation, and direct thermal hardware printing.

All of this operates **100% inside your browser**, with zero ads, no forced watermarks, and a *Client-Side First* architecture where your documents are never uploaded or retained on remote servers.

Here are the key highlights of version 2.0:

---

### 1. Secure Folders with Native Biometrics & PIN (WebAuthn)
Document privacy taken to the next level. Users regularly scan medical records, payslips, non-disclosure agreements, and tax filings that require strict confidentiality.

* **4-Digit PIN Vault:** Lock any individual folder with a quick security PIN.
* **Fingerprint & Face ID Unlock:** Leveraging the official W3C **WebAuthn** API (*PublicKeyCredential*), DocScan Pro communicates directly with your device's native biometric sensor for instant fingerprint authentication.
* **Safe Folder Management:** A dedicated 3-dots menu (⋮) on folder cards includes safe deletion — deleting a folder moves its documents back to root without data loss.

---

### 2. Banking Barcode Reader & Febraban Decoder (47 Digits)
* Features a high-precision 1D barcode decoder calibrated for banking slips and utility invoices.
* Point the camera at any invoice barcode: the app instantly decodes the **complete 47-digit banking line**, ready to be copied with 1 tap into your banking app.

---

### 3. Direct ESC/POS Thermal Printing (80mm & 58mm)
* **Mini Thermal Printer Support:** Fully compatible with USB and Bluetooth 58mm and 80mm thermal receipt printers (such as Bematech MP-4200 TH and POS hardware).
* **Floyd-Steinberg Dithering:** Converts grayscale images and photos into crisp, high-contrast pure black dots, avoiding thermal paper blotches while triggering automatic paper cutting.

---

### 4. High-Fidelity Shutter Sound & Dynamic Fullscreen (`100dvh`)
* **Instant Acoustic Feedback:** Authentic mechanical camera sound with zero playback latency, customizable in Settings.
* **Dynamic Viewport:** Scaled with `100dvh` units so retractable mobile browser address bars never cut off the capture button or editing tools.

---

### 5. 1-Tap PWA Install & 100% Offline Capability
DocScan Pro can be installed with one tap via the **"Install App"** header button, operating as a standalone app on Android, iOS, and desktop with complete offline reliability and optional 2-Way Google Drive sync.

---

🔗 **Try it online for free:**  
👉 [https://4u.ia.br/app/scanner/](https://4u.ia.br/app/scanner/)  
📖 [User Guide & Tutorial](https://4u.ia.br/app/scanner/tutorial.html)  
⭐ [Open Source on GitHub](https://github.com/4u-Labs/scanner)
</div>
