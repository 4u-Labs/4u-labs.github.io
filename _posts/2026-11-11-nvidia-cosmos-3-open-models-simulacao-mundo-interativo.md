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
lang: pt
permalink: /radar-tech/nvidia-cosmos-3-open-models-simulacao-mundo-interativo/
image_alt: 'Ilustração editorial Radar Tech: Análise e novidades: Novos modelos NVIDIA Cosmos 3 para simulação interativa
  de mundos e direção autônoma'
---

A expansão contínua da plataforma de desenvolvimento de modelos de mundo da NVIDIA traz quatro novos checkpoints de pesos abertos sob a família Cosmos 3. Projetados para atender demandas técnicas altamente sofisticadas de simulação interativa e cenários complexos de direção multi-sensor e multi-visão, os modelos operam sob os termos da licença OpenMDW1.1, permitindo tanto o uso comercial quanto o não comercial. Esta iniciativa ambiciosa busca fornecer uma fundação aberta robusta e compartilhada, permitindo que pesquisadores acadêmicos e engenheiros de sistemas criem ambientes simulados consideravelmente mais responsivos e adaptados a diferentes configurações de sensores e domínios robóticos especializados.

A nova safra de modelos anunciada é composta por variações pós-treinadas desenvolvidas diretamente a partir do Cosmos 3 Nano, sendo que cada uma conta com impressionantes 16 bilhões de parâmetros treináveis. O modelo Cosmos3-Nano-Transfer-Auto atua especificamente como um modelo bidirecional focado na geração offline de dados sintéticos de direção, oferecendo suporte robusto para até 11 visões de câmera simultâneas — incluindo lentes do tipo fisheye — e geração conjunta de dados RGB e LiDAR. Esse mecanismo é rigorosamente guiado por mapas de cenário de mundo aplicados por câmera e comandos em texto puro para estipular a aparência. Já o Cosmos3-Nano-Sim-Auto consiste na variante de streaming destilada de forma causal a partir do Transfer-Auto, gerando blocos sucessivos de vídeo e LiDAR em poucas etapas de desenoisação para viabilizar simulações interativas de longa duração. Em paralelo, o Cosmos3-Nano-Sim-Transfer converte com precisão controles de simuladores de física e prompts textuais em observações fotorrealistas em RGB, englobando elementos críticos como profundidade, segmentação e arestas. Por fim, o Cosmos3-Nano-Sim-Bimanual simula a evolução de ambientes em resposta direta às ações de robôs bimanuais, integrando suporte nativo a sistemas como YAM e AgiBot.

Para engenheiros de robótica, desenvolvedores de sistemas autônomos e pesquisadores de inteligência artificial, esses novos checkpoints oferecem caminhos complementares fundamentais de desenvolvimento e adaptação de políticas. A arquitetura subjacente baseia-se em uma espinha dorsal avançada de Mistura de Transformadores que conecta redes dedicadas de processamento de texto e geração visual por meio de mecanismos de atenção causal temporal. O ciclo de treinamento abrange quatro estágios distintos — variando desde a adaptação bidirecional inicial e o uso de 'teacher forcing' até a destilação de consistência e o 'self-forcing' avançado — projetados especificamente para mitigar o acúmulo e a propagação de erros em quadros gerados iterativamente. Desenvolvedores podem realizar o pós-treinamento desses pesos utilizando dados locais de seus próprios rigs de sensores ou robôs, ajustando estruturas complexas de câmera e domínios de controle por meio de receitas abertas padronizadas.

Apesar da enorme flexibilidade técnica e das promissoras capacidades de generalização demonstradas, desafios significativos e pontos de atenção permanecem na área de simulação de mundos. O trabalho contínuo da comunidade exige mensurar com precisão onde os modelos dão suporte fiel ao aprendizado e à avaliação de políticas de controle de agentes, identificando rigorosamente falhas e limites operacionais antes de implementações em larga escala. A infraestrutura computacional necessária também se mostra extremamente exigente, dependendo de ambientes operacionais baseados em Linux, GPUs NVIDIA dedicadas, Docker e o kit de ferramentas de contêineres da NVIDIA. Testes de servidores vLLM-Omni, por exemplo, foram conduzidos em arquiteturas de hardware de altíssimo desempenho como o GB200, ressaltando que tais validações não configuram um piso mínimo de hardware para o uso cotidiano.

A evolução esperada para o ecossistema envolve a expansão de testes empíricos rigorosos de fidelidade de política em episódios reservados, validações mais profundas das receitas de pós-treinamento disponibilizadas e a ampliação contínua das contribuições da comunidade sobre os pesos abertos. À medida que mais equipes de engenharia adotarem os scripts de inferência e os notebooks de adaptação para customizar rigs de sensores, a pesquisa conjunta deverá refinar as técnicas de auto-forçamento para mitigar de vez o problema da degradação de contexto em rollouts estendidos. Essa trajetória consolidará bases mais previsíveis para a validação de veículos autônomos e células robóticas complexas, alinhando simulações virtuais e dados do mundo real com maior precisão.

## Fontes desta edição

- [New NVIDIA Cosmos 3 Open Models for Interactive World Simulation](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation).
