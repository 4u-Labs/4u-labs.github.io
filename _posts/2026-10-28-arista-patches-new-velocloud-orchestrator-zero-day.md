---
layout: radar-post
radar: true
title: 'Correção Crítica: Arista Lança Patch para Nova Falha Zero-Day no VeloCloud Orchestrator Explorada em Ataques'
title_en: 'Critical Fix: Arista Patches New VeloCloud Orchestrator Zero-Day Exploited in Attacks'
excerpt: A Arista Networks emitiu atualizações de segurança para corrigir uma vulnerabilidade zero-day crítica em
  ambientes VeloCloud Orchestrator On-Prem, que está sendo ativamente explorada.
excerpt_en: Arista Networks has issued security updates to patch a critical zero-day vulnerability affecting VeloCloud
  Orchestrator On-Prem deployments that is actively being exploited.
date: 2026-10-28 18:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/arista-patches-new-velocloud-orchestrator-zero-day.webp
translation_pt: /radar-tech/arista-patches-new-velocloud-orchestrator-zero-day/
translation_en: /en/radar-tech/arista-patches-new-velocloud-orchestrator-zero-day/
topic_id: 179faf62f2b237f0f3683e2d
related:
- url: /2026/10/08/erro-500-asteroids-vetorial-colossos-rochosos-recuperacao-servidor/
  title: 'Erro 500 Internal Server Error Vira Asteroids Vetorial: Fragmentando os Colossos ''5 0 0'' em Gravidade
    Zero'
  title_en: 'HTTP 500 Internal Server Error Turned into Vector Asteroids: Pulverizing the Colossal ''5 0 0'' Monoliths
    in Zero Gravity'
- url: /2026/10/07/pdfacil-canivete-suico-pdf-conversor-juntar-assinar-ocr-privacidade/
  title: 'PDFácil: O Canivete Suíço de PDFs e Documentos com Arquitetura de Privacidade Total (Zero Retenção) e
    Processamento Híbrido'
  title_en: 'PDFácil: The Swiss Army Knife for PDFs and Documents with Zero-Retention Privacy Architecture and Hybrid
    Processing'
lang: pt
permalink: /radar-tech/arista-patches-new-velocloud-orchestrator-zero-day/
image_alt: 'Ilustração editorial Radar Tech: Correção Crítica: Arista Lança Patch para Nova Falha Zero-Day no VeloCloud
  Orchestrator Explorada em Ataques'
---

A segurança de infraestruturas de redes definidas por software (SD-WAN) voltou a ocupar o centro das atenções após a divulgação de uma falha crítica de segurança em ambientes locais. A Arista Networks liberou atualizações corretivas urgentes para neutralizar uma vulnerabilidade do tipo zero-day que já conta com exploração ativa em cenários reais de ataques cibernéticos. O componente afetado é o portal de gerenciamento web utilizado por administradores para configurar e monitorar o ecossistema de redes e dispositivos de borda.

## O que mudou e novidades

A falha recém-corrigida, rastreada sob o identificador CVE-2026-114625, afeta as implantações locais do VeloCloud Orchestrator (VCO). O problema reside em vulnerabilidades de injeção de SQL de baixa complexidade que podem ser acionadas por agentes maliciosos que já possuam privilégios básicos, acesso à interface web e uma sessão autenticada válida. Com isso, os invasores conseguem escalar privilégios de forma remota, assumindo o papel de um superusuário operador local. Essa brecha permite o acesso direto a funcionalidades internas que jamais deveriam ser expostas ou acessíveis remotamente, comprometendo a integridade, a confidencialidade e a disponibilidade tanto do host quanto de todos os dados gerenciados pela plataforma.

A fabricante informou que os ambientes hospedados em nuvem já se encontram devidamente protegidos nas versões 5.2.3.18, 6.1.3.10 e 6.4.2.12 ou superiores. Paralelamente, a série de incidentes envolvendo a infraestrutura de grandes corporações reforça um panorama complexo de segurança, somando-se a outras vulnerabilidades graves corrigidas pela empresa ao longo do ano em seus sistemas operacionais e orquestradores.

## Impacto prático para desenvolvedores

Para engenheiros de redes, equipes de operações e sysadmins, o impacto dessa falha vai muito além de uma simples atualização de rotina. Em ambientes corporativos modernos, a assunção de privilégios de operador local por atacantes autenticados rompe a barreira de segmentação lógica. Operadores que gerenciam pipelines de automação de rede e integrações via API no VeloCloud precisam auditar rigorosamente as credenciais emitidas.

Além disso, análises de segurança baseadas em simulações corporativas demonstram que, uma vez obtido o acesso inicial por credenciais válidas, as defesas tradicionais enfrentam quedas expressivas de eficácia — dados de mercado indicam que apenas uma fração das ações pós-comprometimento é bloqueada automaticamente. Isso exige que equipes de engenharia implementem monitoramento comportamental profundo e verifiquem logs de acesso à procura de padrões anômalos, como requisições com caminhos codificados e tentativas de varredura a serviços locais.

## Limitações e o que avaliar

A aplicação imediata de patches nem sempre é viável em ambientes industriais ou legados altamente complexos, o que impõe a adoção de medidas paliativas rigorosas. Administradores devem restringir drasticamente o acesso à interface web do VCO apenas a redes administrativas confiáveis e bloquear endereços IP específicos já associados a campanhas maliciosas em andamento, a exemplo dos IPs 74.82.197.86 e 38.54.50.151. 

Em caso de suspeita de comprometimento, a preservação forense de logs de acesso web, logs de banco de dados e carimbos de data/hora do sistema operacional torna-se imprescindível antes de qualquer intervenção de remediação. A dependência de sessões autenticadas prévias também evidencia que políticas estritas de rotação de senhas e autenticação multifator rigorosa continuam sendo gargalos críticos na resiliência de portais de gestão centralizada.

## O que esperar a seguir

A recorrência de explorações direcionadas a plataformas de orquestração de rede consolida uma tendência preocupante no cenário de ameaças, onde infraestruturas de borda e gerenciadores centralizados tornam-se alvos preferenciais de grupos cibercriminosos. Para mitigar riscos futuros, as organizações precisarão adotar arquiteturas de segurança baseadas em pressupostos de Zero Trust rigoroso, limitando a exposição de painéis administrativos à internet pública e implementando verificações contínuas de integridade.

É altamente recomendável que equipes de segurança acompanhem os boletins oficiais da Arista e utilizem canais de suporte técnico especializados para validar a eficácia das mitigações aplicadas. Para mais orientações sobre proteção de credenciais e estratégias de isolamento, consulte artigos complementares como o [SafeBox: Gerenciador de Senhas Offline com Criptografia Militar AES-256 e Zero Dependência de Nuvem](/2026/09/19/safebox-gerenciador-senhas-offline-criptografia-aes256/) e análises aprofundadas em nossa editoria de [Radar Tech](/radar-tech/perfilagem-torchneuron-aws-trainium-otimizacao-inferencia/).

## Fontes desta edição

- [Arista patches new VeloCloud Orchestrator zero-day exploited in attacks](https://www.bleepingcomputer.com/news/security/arista-patches-new-velocloud-orchestrator-zero-day-exploited-in-attacks).
- [Arista patches actively exploited VeloCloud Orchestrator zero-day](https://www.bleepingcomputer.com/news/security/arista-patches-actively-exploited-velocloud-orchestrator-zero-day).
- [F5 patches BIG-IP APM zero-day flaw exploited in RCE attacks](https://www.bleepingcomputer.com/news/security/f5-warns-of-big-ip-apm-remote-code-execution-zero-day-exploited-in-attacks).
