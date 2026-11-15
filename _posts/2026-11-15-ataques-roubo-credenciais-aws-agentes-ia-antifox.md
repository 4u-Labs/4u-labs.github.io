---
layout: radar-post
radar: true
title: 'Ataques de roubo de credenciais na AWS usando agentes de IA AntiFox: Análise técnica e impactos'
title_en: 'AWS Credential Theft Attacks Using AntiFox AI Agents: Technical Analysis and Impact'
excerpt: Entenda como agentes autônomos AntiFox hospedados no Alibaba Cloud têm sido empregados em campanhas maliciosas
  para explorar serviços web e coletar credenciais de ambientes AWS.
excerpt_en: Understand how autonomous AntiFox agents hosted on Alibaba Cloud have been used in malicious campaigns
  to exploit web services and harvest credentials from AWS environments.
date: 2026-11-15 18:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/ataques-roubo-credenciais-aws-agentes-ia-antifox.webp
translation_pt: /radar-tech/ataques-roubo-credenciais-aws-agentes-ia-antifox/
translation_en: /en/radar-tech/ataques-roubo-credenciais-aws-agentes-ia-antifox/
topic_id: 5e323827c0692e3d7550560a
related:
- url: /radar-tech/perfilagem-torchneuron-aws-trainium-otimizacao-inferencia/
  title: 'Perfilagem de TorchNeuron no AWS Trainium: Análise de Desempenho e Fusão de Kernels'
  title_en: 'TorchNeuron Profiling on AWS Trainium: Performance Analysis and Kernel Fusion'
- url: /radar-tech/analise-agente-ia-autonomo-escapou-sandbox-workos/
  title: 'Análise: Como um agente de IA autônomo escapou do sandbox e invadiu o WorkOS'
  title_en: 'Analysis: How a Runaway Autonomous AI Agent Escaped Sandbox and Breached WorkOS'
lang: pt
permalink: /radar-tech/ataques-roubo-credenciais-aws-agentes-ia-antifox/
image_alt: 'Ilustração editorial Radar Tech: Ataques de roubo de credenciais na AWS usando agentes de IA AntiFox:
  Análise técnica e impactos'
---

A crescente automação de ataques cibernéticos por meio de inteligência artificial ganhou um novo capítulo com a identificação de campanhas que utilizam o AntiFox, uma plataforma de teste de intrusão baseada em agentes autônomos. Derivado inicialmente de um fork do ARTEX 0.1.1 e dotado de uma interface em chinês, o AntiFox tem sido hospedado em instâncias autogerenciadas no Alibaba Cloud para executar varreduras de portas, mapear serviços expostos e automatizar tarefas complexas de exploração contra infraestruturas na nuvem. A evolução dessas ferramentas reflete uma tendência preocupante em que operadores maliciosos coordenam múltiplos agentes de forma automatizada para atingir alvos na web e ambientes corporativos na Amazon Web Services (AWS).

## O que mudou e novidades

O uso de estruturas de agentes autônomos como o AntiFox e o ARTEX marca uma transição nas táticas de intrusão, passando de ações manuais isoladas para o direcionamento orquestrado de múltiplos agentes de IA. No caso recente monitorado em ambientes AWS, os atacantes utilizaram instâncias no Alibaba Cloud para conduzir um leque de atividades maliciosas, que incluem a exploração de vulnerabilidades, implantação de webshells ASPX em servidores IIS expostos, validação de credenciais e a coleta massiva de segredos corporativos. A flexibilidade do framework permite que os agentes descubram configurações incorretas e adaptem rotas de ataque de acordo com as respostas obtidas dos endpoints corporativos.

Durante as investigações conduzidas por pesquisadores de segurança, identificou-se que os agentes realizaram milhares de requisições a APIs da AWS em rajadas rápidas, utilizando identidades IAM legítimas e funções EC2 assumidas. Embora grande parte das tentativas tenha sido bloqueada por mecanismos de controle, os agentes conseguiram obter dados sensíveis de produção e, em alguns episódios, ler, copiar e excluir objetos em buckets S3. Fontes oficiais da AWS esclarecem que a infraestrutura da nuvem em si operou conforme o esperado e não sofreu comprometimento direto, ressaltando que os incidentes decorrem do aproveitamento de credenciais obtidas previamente em aplicações comprometidas dos próprios clientes.

## Impacto prático para desenvolvedores

Para desenvolvedores, engenheiros de confiabilidade e equipes de operações de segurança (SecOps), a proliferação de agentes de IA ofensivos exige uma revisão rigorosa na governança de identidade e gestão de segredos. O cenário demonstra que credenciais estáticas de longa duração e chaves de acesso armazenadas incorretamente em arquivos de configuração de aplicativos continuam sendo os vetores primários que alimentam ataques automatizados em larga escala.

Profissionais de engenharia devem adotar práticas estritas de privilégio mínimo, garantindo que usuários IAM e perfis de instâncias possuam apenas as permissões estritamente necessárias para suas funções operacionais. Além disso, a implementação obrigatória do IMDSv2 em instâncias EC2 e a ativação contínua de ferramentas de monitoramento em tempo real, como o Amazon GuardDuty, tornam-se requisitos fundamentais para detectar comportamentos anômalos em chamadas de API logo no início das rajadas de requisições.

## Limitações e o que avaliar

Apesar da alta velocidade de execução proporcionada por plataformas baseadas em agentes, ferramentas como o AntiFox e o ARTEX possuem limitações operacionais inerentes à complexidade dos ambientes corporativos modernos. Os frameworks muitas vezes geram um tráfego volumoso e ruidoso durante a exploração desordenada, o que facilita a identificação por soluções de detecção baseadas em correlação de eventos, como analisar picos de chamadas de API logo após falhas de autenticação.

As organizações devem avaliar criticamente seus fluxos de auditoria, correlacionando imediatamente evidências de comprometimento em servidores web locais (como webshells em IIS) com acessos atípicos a recursos de infraestrutura em nuvem. É indispensável revisar o histórico de chamadas de API bem-sucedidas associadas a blocos de negações e estabelecer protocolos ágeis para a revogação imediata de sessões e chaves expostas.

## O que esperar a seguir

A tendência aponta para o contínuo refinamento de plataformas de pentest baseadas em agentes de código aberto e proprietários, exigindo que defensores automatizem também suas respostas defensivas. À medida que versões atualizadas dessas ferramentas emergem no ecossistema de desenvolvimento, a segurança cibernética precisará contar com defesas baseadas em IA generativa e adaptativa para identificar intenções maliciosas em tempo hábil, mitigando o risco de explorações autônomas em ambientes de nuvem híbrida e multi-nuvem.

## Fontes desta edição

- [Hackers use AntiFox AI agents in AWS credential-theft attacks](https://www.bleepingcomputer.com/news/security/hackers-use-antifox-ai-agents-in-aws-credential-theft-attacks).
- [Chinese hackers use ARTEX AI in automated attacks against 200 orgs](https://www.bleepingcomputer.com/news/security/chinese-hackers-use-artex-ai-in-automated-attacks-against-200-orgs).
