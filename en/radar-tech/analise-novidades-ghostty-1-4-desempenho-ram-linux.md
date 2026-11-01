---
layout: radar-post
radar: true
title: 'Análise e novidades: Ghostty 1.4 traz mais desempenho, menor uso de RAM e mudanças críticas no Linux'
title_en: 'Ghostty 1.4 Analysis: Better Performance, Lower RAM, and Critical Linux Changes'
excerpt: Descubra o que muda na versão 1.4 do emulador de terminal Ghostty, incluindo ganhos expressivos de memória,
  suporte a protocolos gráficos e a perda de compatibilidade nativa com o Ubuntu 24.04 LTS.
excerpt_en: Explore what changes in Ghostty terminal emulator version 1.4, covering significant memory optimizations,
  graphics protocol support, and the dropped native compatibility for Ubuntu 24.04 LTS.
date: 2026-11-01 09:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/analise-novidades-ghostty-1-4-desempenho-ram-linux.webp
translation_pt: /radar-tech/analise-novidades-ghostty-1-4-desempenho-ram-linux/
translation_en: /en/radar-tech/analise-novidades-ghostty-1-4-desempenho-ram-linux/
topic_id: a084d6c7bf9e5faac680f007
related:
- url: /radar-tech/analise-novidades-open-source-linux-mint-27-plasma-6-8-ubuntu-26-10/
  title: 'Análise das novidades no mundo Open Source: Linux Mint 27, KDE Plasma 6.8 e Ubuntu 26.10'
  title_en: 'Analysis of Open Source News: Linux Mint 27, KDE Plasma 6.8, and Ubuntu 26.10'
- url: /radar-tech/ubuntu-26-10-myna-ia-local-ditado-privacidade/
  title: 'IA local no Ubuntu 26.10: o que o Myna muda no ditado e na privacidade'
  title_en: 'Local AI in Ubuntu 26.10: what Myna changes for dictation and privacy'
lang: en
permalink: /en/radar-tech/analise-novidades-ghostty-1-4-desempenho-ram-linux/
image_alt: 'Radar Tech editorial illustration: Ghostty 1.4 Analysis: Better Performance, Lower RAM, and Critical
  Linux Changes'
---

The release of Ghostty version 1.4 marks a significant milestone in the development of this GPU-accelerated terminal emulator created by Mitchell Hashimoto. Built with contributions from over 170 developers and more than 2,800 commits, this major update introduces architectural improvements that directly impact developers, system engineers, and Unix/Linux enthusiasts. Beyond major resource consumption optimizations and graphical features, the update requires careful attention to operating system dependency requirements.

## What Changed and New Features

The primary architectural innovation in Ghostty 1.4 focuses on off-screen scrollback handling. While the terminal remains idle, the scrollback history undergoes an efficient compression process, delivering estimated memory savings between 70% and 90%. Thanks to this substantial reduction, the default scrollback limit has been increased from 10MB to 50MB. Visually, the rebuilt triple-buffered renderer aims to eliminate visual tearing. Furthermore, the GTK application successfully restores sharp text rendering at fractional scaling factors like 125% and 150% following upstream display regression fixes.

Another notable advancement is the complete implementation of the Kitty graphics protocol, a capability the project claims no terminal other than Kitty itself has achieved. On Wayland, global hotkeys now leverage the vicinae-hotkey-v1 protocol on updated compositors like Hyprland 0.56, while falling back to the desktop portal elsewhere. Split-window drag-and-drop functionality allows moving splits across tabs and windows while preserving active processes. The new ghostty +ssh command automates remote terminfo installation prior to connection, and security fixes addressed ten vulnerabilities, including paste protection gaps and escape sequence directory exploits.

## Practical Impact for Developers

For power users relying on intensive daily terminal workflows, idle scrollback compression frees up critical resources on development machines. GTK keyboard shortcuts have also been streamlined: shortcuts like Ctrl+Shift+PageUp and Ctrl+Shift+PageDown shift tabs sideways, while Ctrl+Shift arrow keys jump between terminal prompts. Copy-on-select clipboard behavior has changed, requiring users accustomed to older defaults to adjust settings. In automation and infrastructure contexts, the C-based virtual terminal library libghostty-vt continues to gain traction among third-party emulators, cementing the project's modular footprint.

## Limitations and What to Evaluate

The most restrictive change in version 1.4 directly affects popular long-term support Linux distributions. Ghostty 1.4 now requires GTK 4.18 and libadwaita 1.7. Consequently, the application exits immediately upon startup if older libraries are loaded, dropping native build support for Ubuntu 24.04 LTS. Project maintainers advise affected users to utilize older builds or migrate to compatible distributions such as Ubuntu 26.04, Arch Linux, NixOS, Alpine Linux, Gentoo, or openSUSE. On Windows, the project has officially dropped GUI support from its roadmap, pointing downstream developers to core underlying libraries.

## What to Expect Next

The continuous evolution of the libghostty library and virtual terminal core indicates a growing trend of downstream tool integration. With project focus centered on modern desktop platforms and ongoing stability enhancements for Wayland and macOS, the ecosystem is moving toward unified GPU-accelerated rendering standards, though fast-paced UI dependency shifts require careful lifecycle planning in enterprise production deployments.

## Sources for this edition

- [Ghostty 1.4 Is Faster and Uses Less RAM, but Drops Ubuntu 24.04 LTS Support](https://itsfoss.com/news/ghostty-1-4-release).
- [Ghostty](https://itsfoss.com/ghostty-terminal-features).
- [Ubuntu 24.04 LTS](https://itsfoss.com/news/ubuntu-24-04-lts).
