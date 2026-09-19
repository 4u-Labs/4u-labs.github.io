---
layout: post
title: "Sound Meter Pro: Decibelímetro Digital em Tempo Real com Analisador RTA e Normas ABNT"
date: 2026-09-04 11:30:00 -0300
categories: [Engenharia]
tags: [soundmeter, audio, decibelimetro, abnt, webaudio]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "Sound Meter Pro: Real-Time Digital Decibel Meter with RTA Spectrum Analyzer"
excerpt_en: "Accurate acoustic measurement using the Web Audio API, A/C weighting curves, and FFT frequency filters."
---


A medição de níveis de pressão sonora para conformidade com normas técnicas de conforto acústico (ABNT NBR 10151) e segurança do trabalho (NR-15) normalmente exige equipamentos dedicados com calibração em laboratório.

O **Sound Meter Pro** aproveita a avançada **Web Audio API** dos navegadores modernos para transformar qualquer notebook ou smartphone em um decibelímetro digital de alta precisão com analisador de espectro em tempo real (RTA).

---

## 1. Curvas de Ponderação Acústica: Ponderação A e C

O ouvido humano não percebe todas as frequências sonoras com a mesma intensidade. Sons graves abaixo de 100 Hz parecem muito mais baixos do que frequências médias na faixa de 1 kHz a 4 kHz.

No Sound Meter Pro:
- **Ponderação A (dBA):** Simula a resposta do ouvido humano em níveis moderados, sendo a curva oficial exigida pela legislação brasileira para ruído ambiental e urbano.
- **Ponderação C (dBC):** Curva quase plana utilizada para medição de picos de pressão acústica e maquinário pesado.
- **Filtro FFT de Oitavas e Terços de Oitava:** Visualização em barras de frequência de 20 Hz a 20.000 Hz com taxa de atualização de 60 Hz.

Meça o ruído ambiente em tempo real:  
👉 [https://4u.ia.br/app/soundmeter/](https://4u.ia.br/app/soundmeter/)
