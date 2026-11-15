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
lang: en
permalink: /en/radar-tech/ataques-roubo-credenciais-aws-agentes-ia-antifox/
image_alt: 'Radar Tech editorial illustration: AWS Credential Theft Attacks Using AntiFox AI Agents: Technical Analysis
  and Impact'
---

The growing automation of cyberattacks through artificial intelligence has entered a new phase with the identification of campaigns leveraging AntiFox, an open-source agentic penetration-testing platform. Initially created as a fork of ARTEX 0.1.1 and featuring a Chinese-language interface, AntiFox has been hosted on self-managed Alibaba Cloud instances to execute port scans, map exposed services, and automate complex exploitation tasks against cloud environments. The evolution of these tools reflects a worrying trend where malicious operators coordinate multiple agents automatically to target web services and corporate environments on Amazon Web Services (AWS).

## What Changed and New Features

The adoption of agentic frameworks like AntiFox and ARTEX marks a shift in intrusion tactics from isolated manual actions to the orchestrated direction of multiple AI workers. In recent monitoring of AWS environments, attackers utilized Alibaba Cloud instances to run a suite of malicious activities, including vulnerability exploitation, deployment of ASPX webshells on exposed IIS servers, credential validation, and the large-scale harvesting of corporate secrets. The framework's flexibility allows agents to discover misconfigurations and dynamically adapt attack paths based on responses received from target endpoints.

During investigations by security researchers, it was observed that agents executed thousands of requests against AWS APIs in rapid bursts, leveraging valid IAM identities and assumed EC2 roles. Although most attempts were blocked by security controls, the agents successfully acquired production secrets and, in certain instances, read, copied, and deleted objects within S3 buckets. Official AWS statements clarify that the cloud infrastructure itself operated as designed and was not compromised, emphasizing that these intrusions stem from threat actors using credentials harvested from customers' compromised applications.

## Practical Impact for Developers

For developers, reliability engineers, and security operations (SecOps) teams, the proliferation of offensive AI agents demands a rigorous review of identity governance and secret management. The scenario demonstrates that long-term static credentials and access keys improperly stored within application configuration files remain primary vectors feeding large-scale automated attacks.

Engineering professionals must enforce strict least-privilege practices, ensuring that IAM users and instance profiles hold only the permissions strictly required for their operational tasks. Furthermore, mandating IMDSv2 on EC2 instances and maintaining continuous activation of real-time monitoring tools, such as Amazon GuardDuty, become foundational requirements to detect anomalous behavior in API calls early during burst requests.

## Limitations and What to Evaluate

Despite the high execution speed enabled by agent-based platforms, tools like AntiFox and ARTEX carry operational limitations inherent to the complexity of modern enterprise environments. These frameworks often generate high-volume and noisy traffic during chaotic scanning, making them easier to spot via correlation-based detection solutions, such as analyzing spikes in successful API calls following authentication denials.

Organizations must critically evaluate their auditing workflows, immediately correlating evidence of local web server compromise (such as webshells on IIS) with atypical access patterns to cloud infrastructure resources. It is vital to review successful API call histories tied to clusters of denials and establish agile protocols for the immediate revocation of exposed sessions and keys.

## What to Expect Next

The trend points toward the continuous refinement of both open-source and proprietary agent-based pentesting platforms, requiring defenders to automate their defensive responses as well. As updated versions of these tools emerge across the development ecosystem, cybersecurity will increasingly rely on adaptive, AI-driven defenses to identify malicious intent in real-time, mitigating the risk of autonomous exploits across hybrid and multi-cloud environments.

## Sources for this edition

- [Hackers use AntiFox AI agents in AWS credential-theft attacks](https://www.bleepingcomputer.com/news/security/hackers-use-antifox-ai-agents-in-aws-credential-theft-attacks).
- [Chinese hackers use ARTEX AI in automated attacks against 200 orgs](https://www.bleepingcomputer.com/news/security/chinese-hackers-use-artex-ai-in-automated-attacks-against-200-orgs).
