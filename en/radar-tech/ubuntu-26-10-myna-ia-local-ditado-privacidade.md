---
layout: radar-post
radar: true
title: 'IA local no Ubuntu 26.10: o que o Myna muda no ditado e na privacidade'
title_en: 'Local AI in Ubuntu 26.10: what Myna changes for dictation and privacy'
excerpt: A prévia do Myna leva o reconhecimento de voz ao próprio computador. Entenda a proposta, as limitações
  e o que avaliar antes de adotar.
excerpt_en: The Myna preview brings speech recognition onto the computer itself. Explore its approach, limitations
  and what to check before adopting it.
date: 2026-10-22 21:19:00 -0300
categories:
- Radar Tech
tags:
- ubuntu
- linux
- ia-local
- myna
- privacidade
- speech-to-text
- open-source
author: Redação 4u-Labs
image: /assets/images/radar-tech/ubuntu-26-10-myna-ia-local-ditado-privacidade.webp
image_alt: Editorial illustration with audio waves, a computer and the theme Local AI / IA local
reading_minutes: 5
translation_pt: /radar-tech/ubuntu-26-10-myna-ia-local-ditado-privacidade/
translation_en: /en/radar-tech/ubuntu-26-10-myna-ia-local-ditado-privacidade/
topic_id: canonical-myna-preview-2026-10
related:
- url: /2026/09/19/10-tecnologias-web-moderna-aposentando-programas-instalados/
  title: 'Tecnologias da web moderna: contexto e possibilidades'
  title_en: 'Modern web technologies: context and possibilities'
- url: /2026/10/15/4upass-cofre-senhas-biometria-autenticador-2fa/
  title: '4uPass: senhas e autenticação em duas etapas'
  title_en: '4uPass: passwords and two-factor authentication'
lang: en
permalink: /en/radar-tech/ubuntu-26-10-myna-ia-local-ditado-privacidade/
---

> **At a glance:** Ubuntu 26.10 brings local AI into the desktop conversation again. Myna points to a concrete use: turning speech into text without making a cloud service a mandatory step. The opportunity is promising, but the preview calls for a careful look at compatibility, transcription quality and the privacy of the entire workflow.

## What is happening

Ubuntu 26.10 was released on **15 October 2026**. Its [official release notes](https://documentation.ubuntu.com/release-notes/26.10/) describe Myna as an optional dictation preview that is not installed by default. This is not a mature feature that has automatically appeared on every Ubuntu computer.

The [preview announcement, published on 12 October](https://ubuntu.com/blog/myna-speech-to-text-technology-preview-available), describes a straightforward interaction: place the cursor, press a shortcut and speak to insert text into the current application. After downloading a model, transcription can work without an internet connection. Canonical says Myna does not upload or store the audio.

That interaction matters more than the AI label. For someone writing messages, capturing ideas or reducing typing effort, the benefit becomes tangible when the tool fits into the task they were already doing.

## Local AI changes the data path

The [Ubuntu 26.10 security overview](https://ubuntu.com/blog/ubuntu-26-10-security) explains that recognition uses local inference in a confined snap. This reduces the need to transfer recordings to a transcription service and adds an isolation boundary around the component processing the voice.

This is an architectural change, rather than a privacy certificate for every situation. Consider dictating a note into a local editor: the text may remain on the computer. Now consider dictating into a form on an online platform: recognition may be local, while the receiving application can still synchronize or transmit the content. **Moving inference onto the device addresses one part of the journey; understanding where the text goes addresses another.**

Our interpretation is that this distinction belongs in every introduction to on-device AI. The useful question moves beyond whether a feature uses AI: which data leaves the machine, at what stage, and for what reason?

## Dictation is different from a voice assistant

The [original project introduction](https://discourse.ubuntu.com/t/introducing-myna-speech-to-text-for-ubuntu-desktop/84251) sets out a desktop dictation experience with visual feedback during recognition. Its scope matters: converting speech into text does not mean understanding instructions and carrying out actions across the system.

It also runs in the opposite direction from text-to-speech, which we discussed in our [TalkMotion article](/2026/09/14/talkmotion-conversor-texto-em-voz-ia-neural-tts/?lang=en). These are complementary tasks with different evaluation needs. A convincing dictation demonstration should show how corrections, interruptions and the receiving text field are handled.

## How to evaluate the feature beyond a prepared demonstration

Before making a tool like this part of everyday work, we suggest a small testing routine:

- **Use a genuine sample of your work.** Names, acronyms and technical vocabulary reveal difficulties that a prepared sentence can conceal.
- **Compare total effort.** Include the time spent correcting the result, rather than measuring only how quickly the first words appear.
- **Try your usual environment.** The microphone, background noise and receiving application may change the experience; record the conditions so comparisons remain useful.
- **Watch what happens when you stop.** Is recognition activity clearly visible? Can you cancel an entry before sending it?
- **Check the entire data path.** Permissions, the receiving application and synchronization are also part of the decision.

These are evaluation criteria proposed by the editorial team. They are not results of hands-on tests we performed with Myna.

## Who can try it, and what still limits adoption?

Canonical's announcement lists Ubuntu 24.04 LTS, 26.04 LTS and 26.10 on amd64/amd64v3 with GNOME on Wayland. That **does not establish compatibility with Zorin OS, ARM systems or every Ubuntu derivative**.

The [official repository](https://github.com/canonical/myna) warns that development remains intensive and breaking changes may occur before a stable release. For an essential workstation, that suggests starting in a test environment and retaining an alternative way to enter text.

## What to watch next

The most useful signal will be progress from a demonstrable experience to a predictable tool: transcription quality across accents, application compatibility and consistent behaviour on ordinary machines. We have not measured those aspects for this edition and make no promise of equivalent performance in Portuguese and English.

Myna is a fitting opening topic for Radar Tech because it makes a broader discussion concrete: useful AI features can be designed with less dependence on external services. Responsible adoption starts by understanding scope, testing an actual workflow and distinguishing an architectural promise from a validated experience.

## Sources for this edition

- [Official Ubuntu 26.10 release notes](https://documentation.ubuntu.com/release-notes/26.10/).
- [Myna preview announcement — 12 October 2026](https://ubuntu.com/blog/myna-speech-to-text-technology-preview-available).
- [Ubuntu 26.10 security overview — 6 October 2026](https://ubuntu.com/blog/ubuntu-26-10-security).
- [Original Myna introduction — 17 June 2026](https://discourse.ubuntu.com/t/introducing-myna-speech-to-text-for-ubuntu-desktop/84251).
- [Myna source code and development warning](https://github.com/canonical/myna).
