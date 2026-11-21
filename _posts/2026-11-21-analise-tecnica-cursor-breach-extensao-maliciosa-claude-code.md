---
layout: radar-post
radar: true
title: 'Análise técnica: Como a invasão ao Cursor expôs dados e injetou extensão maliciosa do Claude Code'
title_en: 'Technical Analysis: How the Cursor Breach Exposed Data and Injected Malicious Claude Code Extension'
excerpt: Entenda os vetores de ataque por trás da invasão ao editor Cursor, o vazamento de credenciais na Fireworks
  AI e o impacto da distribuição de extensões maliciosas no marketplace.
excerpt_en: Understand the attack vectors behind the Cursor editor breach, credential leakage at Fireworks AI, and
  the impact of distributing malicious extensions on the marketplace.
date: 2026-11-21 18:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/analise-tecnica-cursor-breach-extensao-maliciosa-claude-code.webp
translation_pt: /radar-tech/analise-tecnica-cursor-breach-extensao-maliciosa-claude-code/
translation_en: /en/radar-tech/analise-tecnica-cursor-breach-extensao-maliciosa-claude-code/
topic_id: db6ca16c4a17b4e226df132b
related:
- url: /radar-tech/analise-extensao-maliciosa-claude-code-cursor-ssh-backdoors/
  title: 'Análise e novidades: Extensão maliciosa do Claude Code no Cursor instala backdoors SSH'
  title_en: 'Analysis and news: Malicious Claude Code extension on Cursor plants SSH backdoors'
- url: /radar-tech/analise-propriedade-codigo-claude-fable-52/
  title: 'Análise: Como instruções de propriedade de código alteram o comportamento do Claude Fable 5.2'
  title_en: 'Analysis: How Code Ownership Prompts Alter Claude Fable 5.2 Behavior'
lang: pt
permalink: /radar-tech/analise-tecnica-cursor-breach-extensao-maliciosa-claude-code/
image_alt: 'Ilustração editorial Radar Tech: Análise técnica: Como a invasão ao Cursor expôs dados e injetou extensão
  maliciosa do Claude Code'
---

O recente incidente de segurança envolvendo o editor de código Cursor e sua infraestrutura expôs fragilidades críticas nas cadeias de suprimentos de ferramentas impulsionadas por inteligência artificial. A violação ocorreu após criminosos obterem uma chave de acesso pertencente à Fireworks AI, fornecedora terceirizada utilizada para treinamento e inferência de modelos de IA. Com essa credencial, os atacantes conseguiram copiar dados de um repositório de armazenamento que continha históricos de interações de agentes de codificação, incluindo dados coletados de usuários que não haviam ativado o modo de privacidade. Alguns desses rastros continham credenciais de API não redigidas, permitindo o acesso a sistemas internos adicionais do Cursor. Como resultado, os invasores comprometeram ferramentas de SaaS, códigos-fonte arquivados, informações de suporte e dados de contato, além de obterem o privilégio necessário para injetar códigos maliciosos no marketplace do editor.

## O que mudou e novidades
O vetor central da ameaça se materializou na distribuição de versões comprometidas da extensão Claude Code, especificamente as versões 2.1.312 e 2.1.313, que foram disponibilizadas no marketplace do Cursor por cerca de 11 horas. O ataque utilizou um carregador em JavaScript inserido no início do script principal da extensão, fazendo com que o código malicioso executasse automaticamente ao carregar, sem exigir interação explícita do usuário com o assistente. O payload foi projetado para coletar informações de sistemas, injetar chaves SSH controladas por atacantes e configurar persistência via tarefas agendadas no Windows ou LaunchAgents no macOS, estabelecendo túneis reversos de comunicação. Apesar da engenharia do ataque, falhas lógicas no script — como a execução de comandos de verificação de login remoto sem privilégios administrativos no macOS e o uso de um interpretador de comandos Unix incorreto no Windows — impediram que o backdoor funcionasse plenamente em grande parte das máquinas afetadas, embora a fase de reconhecimento e exfiltração de metadados tenha ocorrido.

## Impacto prático para desenvolvedores
A exposição atingiu uma parcela estimada em até 5.000 desenvolvedores que solicitaram as atualizações afetadas durante a janela de exposição. Para engenheiros de software e administradores de sistemas, o incidente reforça a urgência de auditorias rigorosas em ambientes de desenvolvimento integrados e extensões de terceiros. Embora a infraestrutura de produção principal e os códigos de usuários com o modo de privacidade ativado tenham permanecido seguros, tokens e credenciais acessíveis em ambientes auxiliares exigiram revogação imediata. A onda de ataques direcionados a plataformas de desenvolvimento de IA, observada recentemente por analistas de segurança, demonstra que credenciais armazenadas em logs de telemetria e rastros de agentes representam um vetor de alto risco para o ecossistema corporativo.

## Limitações e o que avaliar
A análise forense do incidente evidencia limitações importantes tanto nos mecanismos de validação de extensões de marketplaces baseados em VS Code quanto na higienização de dados de telemetria de IAs. A presença de segredos em texto plano em dados históricos de treinamento demonstra que políticas de DLP (Prevenção de Perda de Dados) falharam na captura de credenciais sensíveis antes do armazenamento em buckets legados. Para equipes de engenharia, a avaliação de risco deve abranger a revisão de chaves de API compartilhadas com suporte, a verificação de chaves SSH não autorizadas (como a identificada sob o nome 'svc-telemetry') e a implementação de controles estritos de isolamento para extensões de editores de código.

## O que esperar a seguir
Como resposta imediata ao incidente, o Cursor migrou seu tráfego de inferência para fora da Fireworks AI, rotacionou todas as credenciais expostas, reconstruiu seu marketplace de extensões e invalidou sessões potencialmente comprometidas. O ecossistema de ferramentas de desenvolvimento tende a adotar padrões mais restritivos de verificação de assinaturas de pacotes e a impor políticas estritas de mascaramento automático de dados para interações com modelos de linguagem. Desenvolvedores afetados devem priorizar a remediação imediata, isolando máquinas suspeitas, revogando segredos expostos e restaurando ambientes operacionais a partir de cópias de segurança confiáveis.

## Fontes desta edição

- [Cursor confirms security breach led to malicious Claude Code extension](https://www.bleepingcomputer.com/news/security/cursor-confirms-security-breach-led-to-malicious-claude-code-extension).
- [malicious versions of Anthropic's Claude Code extension](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors).
