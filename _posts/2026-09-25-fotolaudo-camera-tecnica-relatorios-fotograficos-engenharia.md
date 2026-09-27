---
layout: post
title: "FotoLaudo: Câmera Técnica, Georreferenciamento e Emissão de Laudos de Engenharia no Navegador"
date: 2026-09-25 11:30:00 -0300
categories: [Engenharia]
tags: [engenharia, fotolaudo, vistoria, pericia, gps, exif, pdf, pwa]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "FotoLaudo: In-Browser Field Inspection Camera & Technical PDF Report Generator"
excerpt_en: "Turn any smartphone or tablet into a professional surveying camera: real-time GPS telemetry, UTM projection, CAD dimensioning, and client-side PDF dossier generation."
---

<div data-lang="pt" markdown="1">

Engenheiros civis, peritos judiciais, arquitetos e equipes de fiscalização de obras compartilham uma rotina exaustiva no trabalho de campo: tirar dezenas de fotos com smartphones ou câmeras digitais, anotar estaqueamentos e coordenadas em cadernos de campo, e depois passar horas em frente ao computador descarregando arquivos, renomeando fotos, montando tabelas e colando imagens em editores de texto para emitir um laudo fotográfico.

Para eliminar esse retrabalho, desenvolvemos o **FotoLaudo**, uma estação de campo fotogramétrica completa que opera diretamente no navegador como PWA, carimbando telemetria técnica indelével na imagem e gerando laudos padronizados em PDF com apenas um clique.

---

### 1. Telemetria Geotécnica em Tempo Real

Ao acionar a câmera no FotoLaudo, o navegador integra-se aos sensores de hardware do dispositivo via Web APIs nativas:

* **Georreferenciamento WGS84 & Projeção UTM:** Captura instantânea de Latitude, Longitude, precisão métrica do sinal e cálculo analítico em tempo real do fuso UTM (*Easting* e *Northing*).
* **Azimute & Bússola Digital:** Orientação angular precisa do vetor de visada (0° a 360°) através da `DeviceOrientation API`.
* **Nível de Bolha Virtual 3D:** Inclinômetro giroscópico com indicação visual de prumo (*Pitch* e *Roll*), garantindo enquadramentos perfeitamente nivelados para auditorias.
* **Estaqueamento Rodoviário:** Campos dedicados para inserção contínua de km e estaca em obras lineares de rodovias, ferrovias e saneamento.

---

### 2. Carimbo Pericial Indelével & Ferramentas CAD

As fotos capturadas recebem um carimbo de alto contraste contendo todas as informações periciais, dados do responsável técnico (CREA/CAU), data/hora atômica e logotipo da empresa:

* **Cotas Técnicas Estilo CAD (`<--->`):** Inserção de linhas de testemunho perpendiculares com setas direcionais e valores de medição calibrados para trincas e fissuras (`0.5 mm` a `5.0 mm`) ou armaduras expostas e vãos (`10 cm` a `2.0 m`).
* **Desfoque de Privacidade (Blur Tool):** Censura ágil em 1 toque de rostos, documentos de terceiros e placas veiculares, garantindo conformidade rigorosa com a LGPD e GDPR antes da emissão pública do relatório.
* **Marcações Textuais Rápidas:** Carimbos pré-definidos de patologias construtivas (*Infiltração*, *Armadura Exposta*, *Desaprumo*, *RNC / Falha Crítica*).

---

### 3. Geração Instantânea de Relatórios Fotográficos em PDF

O maior diferencial do FotoLaudo está na eliminação do processamento em servidores de nuvem. Utilizando **jsPDF** rodando 100% no motor JavaScript do cliente:

* O laudo pericial é compilado na hora no formato A4, com cabeçalho de engenharia, numeração sequencial de pranchas e sumário.
* **Layouts Flexíveis:** Escolha entre **2 fotos por página** (modo detalhado com ficha técnica individual completa) ou **4 fotos por página** (vistoria rápida de grande volume).
* **Operação em Campo sem Internet:** Todas as fotos e laudos ficam salvos localmente no banco de dados **IndexedDB** do navegador. O profissional pode trabalhar dentro de túneis, subsolos ou rodovias isoladas sem qualquer conexão de dados.

---

🔗 **Acesse o FotoLaudo online:**  
👉 [https://4u.ia.br/app/fotolaudo/](https://4u.ia.br/app/fotolaudo/)  
⭐ [Código Aberto no GitHub](https://github.com/4u-Labs/fotolaudo)

</div>

<div data-lang="en" markdown="1">

Civil engineers, forensic inspectors, architects, and construction supervisors often face an exhausting manual routine in the field: capturing dozens of inspection photos, logging chainage and GPS coordinates on paper notebooks, and subsequently spending hours manually formatting tables and pasting photos into desktop word processors.

To eliminate this operational friction, we created **FotoLaudo**, an in-browser photogrammetric field workstation running as a PWA that stamps immutable surveying telemetry directly onto photos and compiles standardized PDF inspection dossiers in seconds.

---

### 1. Real-Time Geotechnical Telemetry

Upon activating the camera, FotoLaudo directly communicates with device hardware sensors using native Web APIs:

* **WGS84 Coordinates & UTM Projection:** Real-time capture of Latitude, Longitude, horizontal accuracy, and automatic conversion into UTM zone coordinates (*Easting* and *Northing*).
* **Azimuth & Digital Compass:** Precise visual sight orientation (0° to 360°) via the `DeviceOrientation API`.
* **3D Virtual Bubble Level:** Gyroscopic inclinometer displaying *Pitch* and *Roll*, ensuring plumb and level photo alignments essential for forensic documentation.
* **Highway Chainage Tracking:** Built-in station and kilometer logging optimized for linear infrastructure inspections (highways, rail, energy, and water networks).

---

### 2. High-Contrast Forensic Stamping & CAD Dimensioning

Captured images are embedded with a high-contrast telemetry bar containing surveyor identification (CREA/CAU), atomic timestamps, and company branding:

* **CAD-Style Dimensioning (`<--->`):** Draw engineering dimension lines with perpendicular witness lines and measurement labels for crack monitoring (`0.5 mm` to `5.0 mm`) or structural spans (`10 cm` to `2.0 m`).
* **Privacy Blur Tool:** 1-tap local blur tool to redact faces, license plates, and sensitive documents, ensuring full compliance with GDPR and LGPD regulations.
* **Quick Defect Annotation:** Fast annotation chips for common structural pathologies (*Water Ingress*, *Exposed Rebar*, *Structural Settlement*, *Non-Conformance*).

---

### 3. Client-Side Instant PDF Dossier Generation

FotoLaudo's core innovation is eliminating slow server-side rendering pipelines. Leveraging **jsPDF** running 100% inside client memory:

* Complete A4 technical inspection dossiers are compiled instantly with formal cover pages, company headers, and sequential plate numbers.
* **Multiple Grid Layouts:** Choose between **2 photos per page** (deep dive with detailed telemetry tables) or **4 photos per page** (high-density rapid site survey).
* **100% Offline Capability:** All project data and photo galleries are stored securely in the browser's **IndexedDB**. Field teams can inspect tunnels, basements, and remote rural sites with zero network reception.

---

🔗 **Try FotoLaudo online:**  
👉 [https://4u.ia.br/app/fotolaudo/](https://4u.ia.br/app/fotolaudo/)  
⭐ [Open Source on GitHub](https://github.com/4u-Labs/fotolaudo)

</div>
