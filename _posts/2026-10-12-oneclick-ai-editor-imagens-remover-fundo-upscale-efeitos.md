---
layout: post
title: "OneClick AI: Remova Fundos, Amplie Imagens 4× e Aplique Efeitos em um Estúdio Web Bilíngue"
date: 2026-10-12 10:00:00 -0300
categories: [Design, Inteligência Artificial, Utilitários]
tags: [oneclick-ai, editor-imagens, remover-fundo, u2net, real-esrgan, upscale, efeitos, retoque, pwa, privacidade, 4uiabr]
author: "Fabiano Braga // 4U.IA.BR"
excerpt: "Um estúdio PT/EN para remover fundos, ampliar imagens, preparar produtos e adesivos, retocar detalhes e exportar em lote, sem APIs de IA pagas."
title_en: "OneClick AI: Remove Backgrounds, Upscale Images 4× and Apply Effects in a Bilingual Web Studio"
excerpt_en: "A PT/EN image studio for background removal, upscaling, product layouts, stickers, selective retouching and batch export, without paid AI APIs."
image: /assets/images/oneclick-ai.png
---

<div data-lang="pt" markdown="1">

Preparar uma foto de produto, recortar um logotipo ou transformar uma imagem em preto e branco não deveria exigir várias ferramentas diferentes. O **OneClick AI**, desenvolvido pela **4U.IA.BR**, reúne essas tarefas em um estúdio web com interface em português e inglês, comparação visual e exportação direta.

A ideia nasceu de duas funções que se mostraram úteis no VectorAI: remoção de fundo e ampliação com IA. No OneClick AI, elas ganharam um espaço próprio, acompanhado de efeitos, ajustes, composição para produtos, adesivos e retoques por região.

![OneClick AI — estúdio de imagens](/assets/images/oneclick-ai-studio.png)

### ✂️ Remoção de fundo com escolha de método

O aplicativo oferece **U²-Net** para segmentação neural e recorte por cor conectado às bordas para artes sobre fundos uniformes. O modo automático usa uma análise dos cantos para escolher o método; você também pode escolher manualmente.

Essa distinção ajuda em logotipos e ilustrações com molduras: uma rede treinada para destacar objetos pode interpretar partes da arte como fundo. Para esses casos, o recorte por cor e os pincéis de recuperação oferecem mais controle. Resultados difíceis podem exigir ajuste manual.

Depois do recorte, use transparência, uma cor sólida, um degradê ou uma imagem de fundo. O quadriculado com contraste facilita identificar regiões transparentes.

### 🔍 Ampliação 4× com Real-ESRGAN

O **Real-ESRGAN general x4v3** amplia a imagem quatro vezes em cada eixo. O backend processa blocos e redimensiona o canal alfa separadamente, preservando transparência na saída.

A ferramenta aceita entradas de até **1,5 megapixel** para upscale. É uma melhoria estimada pelo modelo: não há promessa de recuperar fielmente textos pequenos, rostos ou detalhes ausentes do arquivo original.

### 🎛️ Efeitos e ajustes rápidos

- Preto e branco, sépia, vintage, negativo, duotone, pôster e lápis.
- Brilho, contraste, saturação e temperatura.
- Nitidez e redução simples de ruído por filtro espacial.
- Corte, redimensionamento proporcional, rotação e espelhamento.
- Marca-d’água em texto com ajustes de posição, tamanho, cor e opacidade.

As prévias permitem avaliar o resultado antes de aplicar. O divisor interativo e a visualização lado a lado ajudam a comparar original e edição, com zoom e histórico de desfazer/refazer.

### 🛍️ Produtos, adesivos e processamento em lote

A composição para produtos centraliza a imagem em um quadro quadrado com margem e sombra. Para adesivos, combine recorte, contorno e transparência e exporte em PNG.

O processamento em lote aceita até **20 imagens e 100 MB de entrada**, executa as tarefas sequencialmente e reúne os resultados em um ZIP. A exportação individual oferece PNG, JPG e WebP; JPG compõe regiões transparentes sobre branco.

### 🖌️ Retoques por região

O OneClick AI inclui pincéis para apagar e recuperar partes do recorte, clonagem e seleção pintável. A seleção permite aplicar desfoque, preto e branco ou sépia apenas em uma região.

A correção de pequenas manchas usa **interpolação local**, indicada para áreas simples. Não é preenchimento generativo para remover qualquer objeto de uma cena. LaMa e GFPGAN foram considerados para avaliação futura, mas não estão integrados nesta versão.

### 🔒 Onde as imagens são processadas

O frontend usa **HTML, CSS, JavaScript, Canvas e Web Workers**, sem etapa de build. Efeitos e retoques comuns rodam no navegador.

Ao usar remoção neural de fundo ou upscale, a imagem atual é enviada ao **backend da própria aplicação**, que executa os modelos em Python com ONNX Runtime. Na versão pública, esse backend está na VPS da 4U.IA.BR; na instalação local, pode rodar no seu computador. Não há uso de APIs externas de IA pagas. Os temporários de processamento são removidos ao concluir cada requisição.

### 📱 PWA e uso offline

O app pode ser instalado em navegadores compatíveis. Após o primeiro carregamento completo, o editor e os efeitos ficam disponíveis offline. **A IA continua exigindo acesso ao backend configurado.**

O cache do PWA inclui o editor e os ícones, sem guardar imagens do usuário, modelos ou respostas da API. O histórico de edição fica em memória: exporte seu trabalho antes de fechar ou atualizar a página.

### 🌐 Experimente e conheça o código

- [**Abrir OneClick AI**](https://4u.ia.br/app/oneclick/)
- [**Código e documentação no GitHub**](https://github.com/4u-Labs/oneclick)
- [**Modelos e release v1.0.0**](https://github.com/4u-Labs/oneclick/releases/tag/v1.0.0)
- [**Ecossistema 4u-Labs**](https://github.com/4u-Labs)
- [**Apoiar o projeto**](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>

<div data-lang="en" markdown="1">

Preparing a product photo, cutting out a logo or turning an image black and white should not require several separate tools. **OneClick AI**, developed by **4U.IA.BR**, brings these tasks into a bilingual Portuguese/English web studio with visual comparisons and direct export.

It builds on two useful VectorAI features—background removal and AI upscaling—and adds effects, adjustments, product layouts, stickers and selective retouching.

![OneClick AI — image studio](/assets/images/oneclick-ai-studio.png)

### ✂️ Background removal with a choice of methods

Use **U²-Net** for neural segmentation or border-connected color cutout for artwork on uniform backgrounds. Automatic mode uses a corner-based heuristic to choose a method; manual selection remains available.

This matters for framed logos and illustrations, where a segmentation model may remove meaningful artwork. Color cutout and recovery brushes provide additional control. Difficult images may need manual refinement.

Keep transparency or add a solid color, gradient or custom background image. A contrasting checkerboard makes transparent areas easier to identify.

### 🔍 Real-ESRGAN 4× upscaling

**Real-ESRGAN general x4v3** scales each dimension by four. The backend processes tiles and resizes alpha separately to preserve output transparency.

Upscaling accepts inputs up to **1.5 megapixels**. The model estimates detail; it does not guarantee faithful reconstruction of small text, faces or information missing from the original.

### 🎛️ Quick effects and adjustments

- Black and white, sepia, vintage, negative, duotone, poster and pencil effects.
- Brightness, contrast, saturation and temperature.
- Sharpening and simple spatial noise reduction.
- Cropping, proportional resizing, rotation and mirroring.
- Text watermarks with position, size, color and opacity controls.

Preview changes before applying them. Use the interactive divider or side-by-side view to compare the original and edited versions, with zoom and undo/redo history.

### 🛍️ Product layouts, stickers and batch export

Product composition centers the subject on a square canvas with margin and shadow. Create stickers with cutouts, outlines and transparency, then export PNG.

Batch processing supports up to **20 images and 100 MB of input**, runs tasks sequentially and packages results in ZIP. Individual export supports PNG, JPG and WebP; JPG fills transparent areas with white.

### 🖌️ Selective retouching

Erase/recover brushes, cloning and a paintable selection help refine details. Apply blur, black and white or sepia to selected regions.

Small-spot healing uses **local interpolation** for simple areas. It is not generative inpainting for removing arbitrary scene objects. LaMa and GFPGAN are not integrated in this release.

### 🔒 Processing and privacy

The frontend uses **HTML, CSS, JavaScript, Canvas and Web Workers**, without a build step. Standard effects and retouching run in the browser.

AI background removal and upscaling send the current image to the **application's own backend**, which runs Python models through ONNX Runtime. The public app uses the 4U.IA.BR VPS; a local installation can use your own computer. No paid external AI APIs are required. Temporary processing files are removed after each request.

### 📱 PWA and offline use

Install the app in a compatible browser. After the first complete load, the editor and browser effects are available offline. **AI tools still require a reachable backend.**

The PWA caches the editor and icons, excluding user images, models and API responses. Editing history is held in memory, so export your work before closing or updating the page.

### 🌐 Try it and explore the source

- [**Launch OneClick AI**](https://4u.ia.br/app/oneclick/)
- [**Source and documentation**](https://github.com/4u-Labs/oneclick)
- [**Models and v1.0.0 release**](https://github.com/4u-Labs/oneclick/releases/tag/v1.0.0)
- [**4u-Labs ecosystem**](https://github.com/4u-Labs)
- [**Support the project**](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>
