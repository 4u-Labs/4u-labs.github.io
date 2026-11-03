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
lang: en
permalink: /en/radar-tech/analise-extensao-maliciosa-claude-code-cursor-ssh-backdoors/
image_alt: 'Radar Tech editorial illustration: Analysis and news: Malicious Claude Code extension on Cursor plants
  SSH backdoors'
---

## What changed and news

A modified and malicious version of Anthropic's official Claude Code extension was distributed through the Cursor editor's extension marketplace for approximately 11 hours in October 2026. Identified under version number 2.1.313, the malicious payload was active between 2:27 a.m. and 1:35 p.m. Pacific Time, exposing up to 5,000 developers to a package designed to deploy persistent SSH backdoors. The Cursor editor, built on top of Microsoft's open-source Visual Studio Code, supports native platform extensions, which facilitated the distribution of the compromised package.

Security analyses indicate that threat actors inserted a malicious JavaScript loader at the very beginning of the extension.js file while leaving the legitimate extension code intact. Consequently, the malicious routine executed automatically upon extension load, requiring no direct user interaction with the AI assistant. The script gathered detailed system data, Git configuration credentials, and the public IP address of the compromised machine, transmitting this information to an external server.

## Practical impact for developers

For software engineers and system administrators relying on integrated development environments, the incident underscores deep supply chain risks inherent in third-party extension marketplaces. Although the initial script did not directly harvest passwords, the malware attempted to configure attacker-controlled SSH keys and establish persistent reverse tunnels using local mechanisms such as macOS LaunchAgents or Windows scheduled tasks.

In practice, the reconnaissance data transmitted to the attackers' servers provided a comprehensive map of the development environment. This included environment variables tied to sensitive credentials, enabling malicious operators to plan targeted secondary incursions should the initial remote access succeed.

## Limitations and what to evaluate

Despite the malicious payload's destructive intent, coding errors within the SSH configuration routines ultimately restricted the attackers' remote access success across many Windows and macOS systems. On macOS, attempts to verify whether remote login was enabled executed the systemsetup command without elevated privileges, producing a permission error that caused the script to skip activation entirely. On Windows, the malware attempted to invoke the OpenSSH server via /bin/sh, a Unix shell absent from standard operating system installations.

These mistakes prevented the reverse tunnel from functioning properly on machines where the SSH service was not already running. Nevertheless, persistence mechanisms and metadata collection still operated, demanding strict infrastructure audits on any workstation that downloaded the package during the exposure window.

## What to expect next

As an immediate response to the incident, Cursor maintainers removed the compromised package, temporarily shut down the entire marketplace for auditing, and rotated access keys. Furthermore, collaboration with hosting providers enabled the takedown of the attacker-controlled server, disrupting telemetry and tunnel traffic.

Impacted developers must inspect their local environments for unauthorized SSH keys—such as the 'svc-telemetry' key—and follow strict remediation guidelines, including host isolation, session invalidation, and rebuilding environments from secure backups.

## Sources for this edition

- [Malicious Claude Code extension on Cursor planted SSH backdoors](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors).
