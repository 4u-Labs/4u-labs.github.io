---
layout: radar-post
radar: true
title: 'Análise e novidades: Asahi Linux abandona licença MIT e adota GPL após uso de IA em furto de código'
title_en: 'Analysis and News: Asahi Linux Drops MIT and Goes Full GPL After AI Tools Were Used to Steal Unreleased
  Code'
excerpt: Entenda a decisão do Asahi Linux de migrar seus repositórios para a licença GPL para combater a lavagem
  de código assistida por IA e forks comerciais fechados.
excerpt_en: Understand Asahi Linux's decision to migrate its repositories to the GPL license to combat AI-assisted
  code laundering and closed commercial forks.
date: 2026-11-14 18:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/asahi-linux-abandona-mit-adota-gpl-ia-furto-codigo.webp
translation_pt: /radar-tech/asahi-linux-abandona-mit-adota-gpl-ia-furto-codigo/
translation_en: /en/radar-tech/asahi-linux-abandona-mit-adota-gpl-ia-furto-codigo/
topic_id: 231b4bdb6dd4b87841e1a39a
related:
- url: /radar-tech/ubuntu-26-10-myna-ia-local-ditado-privacidade/
  title: 'IA local no Ubuntu 26.10: o que o Myna muda no ditado e na privacidade'
  title_en: 'Local AI in Ubuntu 26.10: what Myna changes for dictation and privacy'
- url: /radar-tech/como-funciona-retorno-hibernacao-linux-mint-gestao-energia/
  title: Como funciona o retorno da hibernação no Linux Mint e o impacto na gestão de energia
  title_en: How Linux Mint's Hibernation Return Works and Its Impact on Power Management
lang: en
permalink: /en/radar-tech/asahi-linux-abandona-mit-adota-gpl-ia-furto-codigo/
image_alt: 'Radar Tech editorial illustration: Analysis and News: Asahi Linux Drops MIT and Goes Full GPL After
  AI Tools Were Used to Steal Unreleased Code'
---

The Asahi Linux project, responsible for enabling Linux execution on Apple Silicon Macs, has announced a structural shift in its licensing policy. Historically, the project maintained most of its own code under the permissive MIT license to facilitate reuse by third parties, including BSD projects. However, the team decided to migrate all repositories to the GNU General Public License version 2 or later (GPLv2+), adopting a strong copyleft posture to curb misappropriation practices supercharged by artificial intelligence.

## What Changed and New Features

The main change involves the complete transition of Asahi's code ecosystem from permissive licenses to the strong copyleft model of the GPL. According to project reports, the measure was prompted by episodes where in-development code was extracted directly from developers' personal forks before official public release. Bad actors utilized AI tools to rewrite the code, hiding its origin and stripping attribution with the intent of commercializing proprietary solutions based on Asahi's reverse-engineering work.

This practice, known as code laundering, became considerably cheaper and more accessible with the rise of large language models (LLMs). While the MIT license only requires keeping the original copyright notice without restricting closed redistribution or proprietary modifications, the GPL mandates that any distributed modified version must also be released under the same license terms, obstructing the creation of closed commercial distributions for Apple Silicon.

## Practical Impact for Developers

For developers and distribution maintainers, this change drastically alters how Apple hardware support code can be integrated. Projects that relied on the MIT license to incorporate Asahi components without copyleft constraints now face legal and compliance barriers. A notable example is the BSD ecosystem, such as OpenBSD, whose initial Apple Silicon support relies on Asahi's m1n1 bootloader. BSD community members expressed concern over burned bridges and the adoption of the new license seemingly without the unanimous consent of all historical contributors.

From a practical engineering standpoint, the GPL does not prevent determined actors from rewriting code from scratch, but it alters the economic and legal equation of commercial distribution. By mandating source code availability in derivative works, tracking unauthorized copying becomes more transparent, mitigating the financial incentive for aggressive commercialization of proprietary drivers.

## Limitations and What to Evaluate

Although the shift seeks to protect the intellectual property of original maintainers, analysts point out inherent limitations regarding the GPL's effectiveness against bad-faith actors. AI tools remain capable of assisting in rewriting programming logic, and the license alone cannot stop analytical reverse engineering if there is a willingness to pursue clean-room redevelopment. Furthermore, the transition has generated friction with contributors who supported the project under the premise of permissive licensing, raising debates on the governance of large-scale reverse-engineering projects.

## What to Expect Next

The open-source community is closely monitoring the fallout from this decision to assess whether other hardware enablement and reverse-engineering projects will follow suit. The relationship between Asahi and downstream communities—such as AI-focused Linux distributions and BSD systems—will require contractual negotiations and technical realignments to determine if collaboration can persist under the new copyleft legal framework.

## Sources for this edition

- [Asahi Linux Drops MIT and Goes Full GPL After AI Tools Were Used to Steal Unreleased Code](https://itsfoss.com/news/asahi-linux-drops-mit-for-gpl).
- [Gravity Linux](https://itsfoss.com/news/gravity-linux-launch).
