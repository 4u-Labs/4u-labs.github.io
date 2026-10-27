---
layout: radar-post
radar: true
title: Como o Bootkit BlackX Explora a Falha Baton Drop e o Impacto Crítico no Secure Boot
title_en: How the BlackX Bootkit Exploits the Baton Drop Flaw and Impacts Secure Boot
excerpt: Analise o funcionamento técnico do bootkit BlackX, sua exploração da falha Baton Drop (CVE-2022-21894)
  em sistemas com patches aplicados e as perigosas lacunas nas revogações manuais de certificados.
excerpt_en: Explore the technical operation of the BlackX bootkit, its exploitation of the Baton Drop flaw (CVE-2022-21894)
  on patched systems, and dangerous gaps in manual certificate revocations.
date: 2026-10-27 09:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/blackx-uefi-bootkit-baton-drop-secure-boot.webp
translation_pt: /radar-tech/blackx-uefi-bootkit-baton-drop-secure-boot/
translation_en: /en/radar-tech/blackx-uefi-bootkit-baton-drop-secure-boot/
topic_id: 9fcce94ed3b1e9c4958aa9fd
related:
- url: /radar-tech/seguranca-agentes-ia-agent-trust-hub-sage-guardrails/
  title: 'Segurança de Agentes de IA: Análise de Riscos de Execução, Agent Trust Hub e Guardrails'
  title_en: 'AI Agent Security: Analyzing Execution Risks, Agent Trust Hub and Runtime Guardrails'
- url: /radar-tech/perfilagem-torchneuron-aws-trainium-otimizacao-inferencia/
  title: 'Perfilagem de TorchNeuron no AWS Trainium: Análise de Desempenho e Fusão de Kernels'
  title_en: 'TorchNeuron Profiling on AWS Trainium: Performance Analysis and Kernel Fusion'
lang: en
permalink: /en/radar-tech/blackx-uefi-bootkit-baton-drop-secure-boot/
image_alt: 'Radar Tech editorial illustration: How the BlackX Bootkit Exploits the Baton Drop Flaw and Impacts Secure
  Boot'
---

The emergence of novel attack vectors targeting the operating system boot layer highlights the persistence and continuous evolution of advanced threats within the UEFI environment. A recent and concerning example is the BlackX bootkit, uncovered in cyber espionage campaigns targeting diplomatic agencies in Central Asia, with a particular focus on countries such as Tajikistan, Uzbekistan, and Turkmenistan. The core of this threat lies in the sophisticated reuse of known hardware and firmware vulnerabilities to bypass fundamental security mechanisms and boot integrity.

## What Changed and New Features

Discovered in early 2026, BlackX exploits the classic vulnerability known as Baton Drop, officially cataloged under the identifier CVE-2022-21894. This same flaw was originally associated with earlier bootkit campaigns widely discussed in the security ecosystem, such as BlackLotus, which has circulated on underground forums since late 2022. Security researchers analyzing BlackX point out that the exploit implementation bears notable similarities to its predecessor, allowing malicious operators to enroll custom Machine Owner Keys (MOKs) and load arbitrary EFI files on unsuspecting victims' machines.

Despite sharing clear conceptual origins with BlackLotus, BlackX introduces a distinct kernel driver and novel operational payloads geared toward complex espionage tasks. Specialists suggest that BlackX may have been developed either through reverse engineering BlackLotus code or by acquiring parts of the reference design. Detailed observations indicate that some samples contained code snippets missing from public repositories but present in BlackX, reinforcing the thesis of advanced internal adaptation by the threat group attributed with medium confidence as APT41, also known in intelligence reports as Brass Typhoon, Wicked Panda, and Barium.

## Practical Impact for Developers and Sysadmins

For systems administrators, IT infrastructure engineers, and incident response teams, the most critical aspect revealed by this campaign is not just the existence of the flaw itself, but the dangerous gap present in the remediation and patch application process. Technical reports indicate that all known BlackX victims were running fully patched Windows operating system releases. However, the bootkit achieved absolute invasion success because the corrective patch for the Baton Drop flaw requires an additional action that often goes unnoticed: the manual revocation of the affected certificate, specifically the component named Windows Production PCA 2011.

Since the overwhelming majority of enterprise network administrators and IT operations teams do not execute complex manual procedures after applying routine standard updates, the vulnerable components remained capable of being loaded by the system. Once running deep within the system, the malicious driver injected by BlackX aggressively acts to disable security-related processes and operating system registry callbacks. Furthermore, the malicious software deliberately interferes with Event Tracing for Windows providers, known as ETW, with the direct objective of obstructing active monitoring and hindering detection by defensive security analysts.

## Limitations and What to Evaluate

From an analytical standpoint, it is important to weigh that the tampering and evasion mechanisms implemented by the BlackX driver carry quite specific operational restrictions and conditions. In-depth analyses demonstrated that certain advanced routines programmed to interfere directly with commercial security solutions and market antiviruses, such as Kaspersky and Avast suites, only execute effectively if those tools are actively detected on the target host. Otherwise, these specific routines remain dormant, which can alter the observable behavior of the malware in heterogeneous environments.

Furthermore, the vector's efficacy in bypassing Secure Boot strictly depends on the absence of explicit revocations in the machine's firmware blocklist. This highlights that the passive application of operating system update packages does not guarantee complete and definitive protection against advanced persistent threats operating at the firmware layer. To mitigate correlated risks, teams should review security routines described in architecture analyses and adopt guidelines similar to those discussed in evaluations of [AI agent security and execution guardrails](/radar-tech/seguranca-agentes-ia-agent-trust-hub-sage-guardrails/), where strict context control and rigorous input validation prevent the execution of untrusted instructions.

## What Expect Next

As cyber espionage campaigns refine the repurposing of leaked or clandestinely traded bootkit source codes, security operations and defensive engineering teams will need to adopt much more rigorous firmware integrity checks, alongside active and automated audits of revoked certificates. Automating secure boot blocklist policies will increasingly become a recurrent and mandatory requirement in enterprise corporate environments to mitigate the severe risk of exploiting gaps stemming from incomplete human updates. For environments dealing with critical infrastructures, attention must shift not only to patch application, but to the full validation of cryptographic key revocation states at the hardware level.

## Sources for this edition

- [BlackX UEFI bootkit exploits Baton Drop flaw to bypass Secure Boot](https://www.bleepingcomputer.com/news/security/blackx-uefi-bootkit-exploits-baton-drop-flaw-to-bypass-secure-boot).
