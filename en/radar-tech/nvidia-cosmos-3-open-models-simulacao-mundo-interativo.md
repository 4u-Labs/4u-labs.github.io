---
layout: radar-post
radar: true
title: 'Análise e novidades: Novos modelos NVIDIA Cosmos 3 para simulação interativa de mundos e direção autônoma'
title_en: 'Analysis and News: New NVIDIA Cosmos 3 Open Models for Interactive World Simulation and Autonomous Driving'
excerpt: Descubra os quatro novos pesos abertos da família Cosmos 3 da NVIDIA voltados para simulação de mundos
  interativos, direção autônoma e robótica bimanual.
excerpt_en: Explore the four new open-weight checkpoints from NVIDIA's Cosmos 3 family built for interactive world
  simulation, autonomous driving, and bimanual robotics.
date: 2026-11-11 09:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/nvidia-cosmos-3-open-models-simulacao-mundo-interativo.webp
translation_pt: /radar-tech/nvidia-cosmos-3-open-models-simulacao-mundo-interativo/
translation_en: /en/radar-tech/nvidia-cosmos-3-open-models-simulacao-mundo-interativo/
topic_id: f25b9201ad6bdcc6fc966e82
related:
- url: /2026/10/31/3dcad-studio-modelagem-3d-pwa-exportacao/
  title: '3DCad Studio 1.3: Arquitetura Dual-Engine CAD, Open CASCADE BRep, Solver 2D e MCP'
  title_en: '3DCad Studio 1.3: Dual-Engine CAD Architecture, Open CASCADE BRep, 2D Solver and MCP'
- url: /radar-tech/analise-apps-open-source-linux-jopdf-drift-invoke/
  title: 'Análise de Aplicativos Open Source para Linux: JOPDF, CutWire Drift, Invoke AI e Ferramentas Independentes'
  title_en: 'Analysis of Open Source Linux Apps: JOPDF, CutWire Drift, Invoke AI and Independent Tools'
lang: en
permalink: /en/radar-tech/nvidia-cosmos-3-open-models-simulacao-mundo-interativo/
image_alt: 'Radar Tech editorial illustration: Analysis and News: New NVIDIA Cosmos 3 Open Models for Interactive
  World Simulation and Autonomous Driving'
---

The continuous expansion of NVIDIA's world model development platform introduces four new open-weight checkpoints to the Cosmos 3 model family. Designed to address highly sophisticated technical demands in interactive simulation and complex multi-sensor, multi-view driving scenarios, these models operate under the terms of the OpenMDW1.1 license, permitting both commercial and non-commercial use. This ambitious initiative aims to provide a robust and shared open foundation, enabling academic researchers and systems engineers to build considerably more responsive simulated environments adapted to diverse sensor rigs and specialized robotic domains.

The newly announced model release consists of post-trained variations built directly upon Cosmos 3 Nano, with each feature boasting an impressive 16 billion trainable parameters. The Cosmos3-Nano-Transfer-Auto model specifically functions as a bidirectional checkpoint targeted at offline synthetic driving data generation, offering robust support for up to 11 synchronized camera views—including fisheye lenses—alongside joint RGB and LiDAR data generation. This mechanism is tightly guided by per-camera World Scenario Map controls and plain text prompts to dictate appearance. Meanwhile, Cosmos3-Nano-Sim-Auto serves as the causally distilled streaming variant of Transfer-Auto, generating successive blocks of camera video and LiDAR in minimal denoising steps to facilitate long interactive simulations. In parallel, Cosmos3-Nano-Sim-Transfer accurately translates physics simulator controls and text prompts into photorealistic RGB observations, encompassing critical elements such as relative depth, segmentation, and edges. Finally, Cosmos3-Nano-Sim-Bimanual simulates environment evolution in direct response to bimanual robot actions, integrating native support for embodiments like YAM and AgiBot.

For robotics engineers, autonomous systems developers, and artificial intelligence researchers, these new checkpoints provide fundamental complementary pathways for policy development and adaptation. The underlying architecture relies on an advanced Mixture-of-Transformers backbone that connects dedicated text-processing and visual-generation networks through temporal causal attention mechanisms. The training cycle spans four distinct stages—ranging from initial bidirectional adaptation and teacher forcing to consistency distillation and advanced self-forcing—specifically engineered to mitigate the accumulation and propagation of errors across iteratively generated frames. Developers can post-train these weights using local data from their own sensor rigs or robotic embodiments, tuning complex camera layouts and control domains via standardized open recipes.

Despite the immense technical flexibility and promising generalization capabilities demonstrated, significant challenges and points of attention remain in the field of world simulation. Ongoing community work requires accurately measuring where the models faithfully support agent policy learning and evaluation, rigorously identifying operational failures and limits prior to large-scale deployments. The required computational infrastructure also proves extremely demanding, depending on Linux-based operating environments, dedicated NVIDIA GPUs, Docker, and the NVIDIA Container Toolkit. vLLM-Omni server tests, for instance, were conducted on ultra-high-performance hardware architectures like the GB200, highlighting that such validations do not constitute a minimum hardware floor for routine utilization.

Anticipated evolutions for the ecosystem involve expanding rigorous empirical testing of policy fidelity on held-out episodes, deeper validations of the provided post-training recipes, and the ongoing expansion of community contributions utilizing the open weights. As more engineering teams adopt the inference scripts and adaptation notebooks to customize sensor rigs, collaborative research is expected to refine self-forcing techniques to definitively mitigate context degradation during extended rollouts. This trajectory will solidify more predictable foundations for validating autonomous vehicles and complex robotic cells, aligning virtual simulations and real-world data with greater precision.

## Sources for this edition

- [New NVIDIA Cosmos 3 Open Models for Interactive World Simulation](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation).
