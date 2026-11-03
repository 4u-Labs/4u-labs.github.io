---
layout: radar-post
radar: true
title: 'Análise e novidades: Extensão maliciosa do Claude Code no Cursor instala backdoors SSH'
title_en: 'Analysis and news: Malicious Claude Code extension on Cursor plants SSH backdoors'
excerpt: Entenda o impacto da distribuição de uma versão maliciosa da extensão Claude Code no marketplace do Cursor,
  os riscos de segurança na cadeia de suprimentos e as recomendações de mitigação.
excerpt_en: Understand the impact of a malicious Claude Code extension version distributed on Cursor's marketplace,
  supply chain security risks, and recommended mitigation steps.
date: 2026-11-03 18:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/analise-extensao-maliciosa-claude-code-cursor-ssh-backdoors.webp
translation_pt: /radar-tech/analise-extensao-maliciosa-claude-code-cursor-ssh-backdoors/
translation_en: /en/radar-tech/analise-extensao-maliciosa-claude-code-cursor-ssh-backdoors/
topic_id: 3b99573e7ab441bb3e38b605
related:
- url: /2026/10/30/tinylab-suite-132-ferramentas-locais-pdf-imagem-video-ia/
  title: 'TinyLab v2.1: Suíte com 150 Ferramentas Locais para PDF, Imagens, Vídeo, Planilhas, QR/Barras e IA WebGPU'
  title_en: 'TinyLab v2.1: 150 Local Web Tools for PDF, Image, Video, Spreadsheets, QR/Barcodes and WebGPU AI'
- url: /2026/09/30/qr-code-avancado-gerador-personalizado-cores-logo-wifi-pix/
  title: 'QR Code Avançado: Gerador Dinâmico e Customizável com Cores, Logotipo e Conexão Wi-Fi'
  title_en: 'QR Code Advanced: Dynamic & Customizable QR Code Generator with Logos, Colors, and Wi-Fi'
lang: pt
permalink: /radar-tech/analise-extensao-maliciosa-claude-code-cursor-ssh-backdoors/
image_alt: 'Ilustração editorial Radar Tech: Análise e novidades: Extensão maliciosa do Claude Code no Cursor instala
  backdoors SSH'
---

## O que mudou e novidades

Uma versão modificada e maliciosa da extensão oficial Claude Code da Anthropic foi distribuída através do marketplace de extensões do editor Cursor por aproximadamente 11 horas em outubro de 2026. Identificada sob o número de versão 2.1.313, a praga digital esteve ativa entre 2h27 e 13h35 (horário do Pacífico), expondo cerca de 5.000 desenvolvedores a um pacote projetado para implantar backdoors SSH persistentes. O editor Cursor, construído a partir do código aberto do Visual Studio Code da Microsoft, permite o suporte a extensões nativas da plataforma, o que facilitou a injeção do pacote comprometido.

Investigações conduzidas por analistas de segurança apontam que os invasores inseriram um carregador JavaScript malicioso logo no início do arquivo extension.js, mantendo o restante do código legítimo inalterado. Dessa forma, a rotina maliciosa era executada automaticamente assim que o editor carregava a extensão, sem requerer interação direta do usuário com o assistente de IA. O script coletava dados detalhados do sistema operacional, credenciais de configuração do Git e o endereço IP público da máquina afetada, enviando essas informações para um servidor externo.

## Impacto prático para desenvolvedores

Para os engenheiros de software e administradores de sistemas que utilizam o ecossistema de desenvolvimento integrado, o incidente evidencia os riscos profundos de ataques à cadeia de suprimentos em marketplaces de extensões. Mesmo sem roubar senhas de forma direta no script inicial, o malware tentava configurar chaves SSH controladas por atacantes e estabelecer túneis de reversão persistentes utilizando ferramentas locais como LaunchAgents no macOS ou tarefas agendadas no ambiente Windows.

Na prática, os dados de reconhecimento transmitidos aos servidores dos invasores forneciam um mapa detalhado do ambiente de desenvolvimento. Isso inclui variáveis de ambiente associadas a credenciais confidenciais, permitindo que operadores mal-intencionados planejassem ataques direcionados subsequentes caso o acesso remoto inicial fosse bem-sucedido.

## Limitações e o que avaliar

Apesar do potencial destrutivo da carga maliciosa, falhas de codificação na rotina de configuração de SSH acabaram limitando o sucesso remoto dos atacantes em muitos sistemas Windows e macOS. No macOS, a tentativa de verificar se o acesso remoto estava ativado utilizava o comando systemsetup sem privilégios elevados, gerando um erro de permissão que fazia o script ignorar a ativação. Já no Windows, o malware tentava invocar o servidor OpenSSH via /bin/sh, um interpretador de comandos Unix ausente em instalações padrão do sistema operacional.

Esses erros impediram que o túnel reverso funcionasse adequadamente em máquinas onde o serviço de SSH não estava previamente ativo. Contudo, a persistência e a coleta de metadados continuaram operando, exigindo uma auditoria rigorosa de infraestrutura em qualquer estação que tenha baixado o pacote durante a janela de exposição.

## O que esperar a seguir

Como resposta imediata ao incidente, os mantenedores do Cursor removeram o pacote adulterado, suspenderam temporariamente todo o marketplace para auditoria e realizaram a rotação de chaves de acesso. Além disso, parcerias com provedores de hospedagem permitiram derrubar o servidor associado aos invasores, interrompendo o tráfego de telemetria.

Desenvolvedores impactados devem inspecionar seus ambientes locais em busca de chaves SSH não autorizadas — como a chave 'svc-telemetry' — e seguir diretrizes estritas de remediação, que incluem isolamento de hosts, revogação de sessões ativas e reconstrução de ambientes a partir de backups seguros.

## Fontes desta edição

- [Malicious Claude Code extension on Cursor planted SSH backdoors](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors).
