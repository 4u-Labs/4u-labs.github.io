---
layout: post
title: "DocScanner Pro: Digitalização de Documentos com Correção de Perspectiva em 4 Pontos e OCR"
date: 2026-09-11 14:00:00 -0300
categories: [Produtividade]
tags: [scanner, ocr, visaocomputacional, pdf, produtividade]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "DocScanner Pro: 4-Point Perspective Homography Correction and OCR in the Browser"
excerpt_en: "Document scanning via webcam or smartphone with adaptive thresholding, perspective rectification, and multipage PDF export."
---


Aplicativos de scanner para smartphones geralmente vêm acompanhados de assinaturas agressivas, anúncios invasivos e marcas d'água irritantes nos documentos digitalizados.

O **DocScanner Pro** foi concebido para devolver o controle ao usuário: **uma estação completa de escaneamento de folhas, recibos e contratos diretamente na câmera do navegador**, com retificação geométrica em 4 pontos, filtros de realce de texto e OCR (Reconhecimento Óptico de Caracteres) 100% no cliente.

---

## 1. Transformação Homográfica em 4 Pontos (Perspective Transform)

Quando uma folha de papel é fotografada sobre uma mesa, a lente cria uma distorção trapezoidal de perspectiva. Para transformar esse trapézio em um retângulo perfeitamente alinhado, aplicamos uma matriz de homografia 3x3:

$$egin{bmatrix} x' \ y' \ 1 \end{bmatrix} \sim \mathbf{H} egin{bmatrix} x \ y \ 1 \end{bmatrix}$$

O usuário ajusta 4 vértices interativos com lupas de ampliação de canto, e o motor recalcula o mapeamento bilinear de pixels em tempo real via Canvas 2D.

---

## 2. Filtros de Processamento de Imagem

Para transformar uma foto comum com sombras de luz em uma página limpa e nítida para impressão:
- **Binarização Adaptativa (Otsu Threshold):** Separa o texto da folha eliminando gradientes de sombra.
- **Filtro Mágico de Realce de Cores:** Destaca assinaturas com caneta azul e carimbos vermelhos preservando o fundo branco.
- **Exportação Multipage em PDF:** Agrupamento de várias páginas em um único arquivo PDF compactado.

Digitalize seus documentos agora:  
👉 [https://4u.ia.br/app/scanner/](https://4u.ia.br/app/scanner/)
