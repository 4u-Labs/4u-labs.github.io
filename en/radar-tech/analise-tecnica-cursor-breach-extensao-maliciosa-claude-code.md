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
lang: en
permalink: /en/radar-tech/analise-tecnica-cursor-breach-extensao-maliciosa-claude-code/
image_alt: 'Radar Tech editorial illustration: Technical Analysis: How the Cursor Breach Exposed Data and Injected
  Malicious Claude Code Extension'
---

The recent security incident involving the Cursor code editor and its infrastructure exposed critical vulnerabilities in the software supply chains of AI-powered developer tools. The breach occurred after attackers obtained an access key belonging to Fireworks AI, a third-party provider used for AI model training and inference. Using this credential, the threat actors copied data from a storage repository containing historical coding-agent interaction traces, including data collected from users who had not enabled privacy mode. Some of these traces contained unredacted API credentials, granting access to additional internal Cursor systems. As a result, the attackers compromised SaaS tools, archived source code, support information, and contact details, while also securing the privileges necessary to inject malicious code into the editor's marketplace.

## What changed and new developments
The core threat vector materialized in the distribution of compromised versions of the Claude Code extension, specifically versions 2.1.312 and 2.1.313, which remained available on Cursor's marketplace for roughly 11 hours. The attack leveraged a JavaScript loader injected at the beginning of the extension's primary script, causing the malicious code to execute automatically upon loading without requiring explicit user interaction. The payload was designed to collect system information, inject attacker-controlled SSH keys, and configure persistence via Windows scheduled tasks or macOS LaunchAgents to establish reverse communication tunnels. Despite the engineering behind the attack, logical flaws in the script — such as running remote login check commands without elevated privileges on macOS and referencing an invalid Unix shell interpreter on Windows — prevented the backdoor from functioning fully on many targeted machines, although reconnaissance and metadata exfiltration still took place.

## Practical impact for developers
The exposure affected an estimated up to 5,000 developers who requested the affected updates during the exposure window. For software engineers and systems administrators, the incident highlights the urgent need for rigorous audits of integrated development environments and third-party extensions. Although primary production infrastructure and user code with privacy mode enabled remained secure, tokens and credentials accessible in auxiliary environments required immediate revocation. The broader wave of attacks targeting AI developer platforms demonstrates that credentials stored in telemetry logs and agent traces represent a high-risk vector for the corporate ecosystem.

## Limitations and what to evaluate
Forensic analysis of the incident highlights significant limitations in both the extension validation mechanisms of VS Code-based marketplaces and the sanitization of AI telemetry data. The presence of plaintext secrets in historical training data proves that data loss prevention (DLP) policies failed to intercept sensitive credentials before storage in legacy buckets. For engineering teams, risk evaluation must encompass reviewing API keys shared with support, checking for unauthorized SSH keys (such as those identified under the name 'svc-telemetry'), and implementing strict isolation controls for code editor extensions.

## What to expect next
In response to the incident, Cursor migrated its inference traffic away from Fireworks AI, rotated all exposed credentials, rebuilt its extension marketplace, and invalidated potentially compromised sessions. The developer tools ecosystem is expected to adopt more restrictive package signature verification standards and enforce stricter automated data-masking policies for interactions with language models. Affected developers should prioritize immediate remediation by isolating suspicious machines, revoking exposed secrets, and restoring operational environments from trusted backups.

## Sources for this edition

- [Cursor confirms security breach led to malicious Claude Code extension](https://www.bleepingcomputer.com/news/security/cursor-confirms-security-breach-led-to-malicious-claude-code-extension).
- [malicious versions of Anthropic's Claude Code extension](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors).
