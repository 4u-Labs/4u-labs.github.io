---
layout: radar-post
radar: true
title: 'Análise e novidades: Como o Agent Name Service (ANS) na Linux Foundation redefine a identidade de agentes
  de IA'
title_en: 'Analysis and News: How Agent Name Service (ANS) at the Linux Foundation Redefines AI Agent Identity'
excerpt: Descubra os detalhes sobre a chegada do Agent Name Service (ANS) à Linux Foundation, impulsionado por gigantes
  como GoDaddy e Cloudflare, e seu impacto na identificação e segurança de agentes de IA.
excerpt_en: Explore the details of Agent Name Service (ANS) joining the Linux Foundation, backed by giants like
  GoDaddy and Cloudflare, and its impact on AI agent identification and security.
date: 2026-11-17 09:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/analise-agent-name-service-linux-foundation-identidade-ia.webp
translation_pt: /radar-tech/analise-agent-name-service-linux-foundation-identidade-ia/
translation_en: /en/radar-tech/analise-agent-name-service-linux-foundation-identidade-ia/
topic_id: 25872686fa73554cb9945444
related:
- url: /radar-tech/analise-janela-mesclagem-linux-7-4-inteligencia-artificial/
  title: 'Análise e novidades: Janela de mesclagem gigantesca do Linux 7.4 e o impacto da inteligência artificial'
  title_en: 'Analysis and News: Linux 7.4''s Massive Merge Window and the Impact of Artificial Intelligence'
- url: /radar-tech/kernel-linux-suporte-apple-m4-a18/
  title: 'Kernel Linux ganha suporte inicial para chips Apple M4 e A18 Pro: O que muda na prática'
  title_en: 'Linux Kernel Gains Initial Support for Apple M4 and A18 Pro Chips: What Changes in Practice'
lang: pt
permalink: /radar-tech/analise-agent-name-service-linux-foundation-identidade-ia/
image_alt: 'Ilustração editorial Radar Tech: Análise e novidades: Como o Agent Name Service (ANS) na Linux Foundation
  redefine a identidade de agentes de IA'
---

A chegada do Agent Name Service (ANS) sob o guarda-chuva da Linux Foundation marca um avanço importante na estruturação de identidades confiáveis para inteligência artificial autônoma. Anunciado originalmente no meio do ano e formalizado durante o evento KubeCon North America em Salt Lake City, o projeto agora conta com um total de onze organizações envolvidas, incluindo empresas de peso como GoDaddy, Cloudflare, Salesforce e DigiCert. Sob governança neutra, o objetivo é estabelecer um alicerce comum de confiança que toda a indústria possa adotar e implementar coletivamente.

## O que mudou e novidades

Com o avanço dos sistemas autônomos operando e realizando transações em redes globais, a ausência de uma identidade padronizada e verificável tornou-se um gargalo crítico. Plataformas tradicionais costumam identificar agentes de IA de maneiras isoladas, impedindo que sistemas receptores confirmem de forma automatizada a qual operador um determinado agente pertence. O ANS resolve essa lacuna ao vincular cada agente a um nome de domínio controlado por seu operador, de forma análoga à relação tradicional entre um site e seu domínio na internet.

Nesse modelo, cada versão de um agente recebe uma identificação própria — como o formato estruturado ans://v1.4.2.travel.example.com. Para registrar a entidade, o operador deve comprovar o controle sobre o domínio correspondente. A partir daí, certificados são emitidos e cada registro passa a integrar um log público auditável. Adicionalmente, detalhes do agente são publicados no DNS, permitindo consultas por meio de ferramentas de infraestrutura já existentes no mercado, utilizando um registro específico que aponta para o log público.

## Impacto prático para desenvolvedores

Para desenvolvedores de sistemas distribuídos e arquiteturas de microsserviços baseados em IA, o ANS oferece um mecanismo padronizado de validação de requisições. Quando um agente autônomo despacha uma solicitação, o sistema de destino pode checar instantaneamente se o registro existe no log público, se o certificado não foi revogado e se o remetente realmente detém a chave criptográfica associada.

Um exemplo prático inicial de integração ocorre no ecossistema AGNTCY, outro projeto hospedado pela fundação, onde diretórios de agentes de IA já utilizam a infraestrutura do ANS para verificar identidades antes de autorizar interações. No aspecto de governança e código, o projeto instituiu um comitê gestor técnico inicial composto por membros da GoDaddy, DistributedApps.ai e Hashgraph Online. Para garantir neutralidade de fornecedores, eleições periódicas foram estipuladas para o primeiro ano, acompanhadas por uma transição rigorosa de licenciamento onde novas contribuições passam a adotar obrigatoriamente a licença Apache 2.0.

Apesar dos avanços na autenticação, é fundamental destacar os limites operacionais da tecnologia. O escopo do ANS restringe-se estritamente à identificação fidedigna da origem do agente. A definição de políticas de acesso, permissões e escopo de execução — ou seja, o que o agente tem permissão para fazer — continua sendo inteiramente de responsabilidade do sistema receptor, exigindo implementações customizadas nas plataformas de destino.

## Limitações e o que avaliar

Ao planejar a adoção do ANS, equipes de engenharia devem avaliar que a infraestrutura depende diretamente da integridade do DNS e da transparência dos logs públicos de registro. Embora o projeto tenha evoluído de rascunhos iniciais submetidos ao IETF para uma especificação formalizada sob a tutela da Linux Foundation, a conformidade de ecossistemas legados ainda exige adaptações significativas. Avaliar o custo de manutenção dos certificados e a latência adicional nas verificações de chave pública em tempo de execução são passos essenciais antes de colocar a tecnologia em produção.

## O que esperar a seguir

Com a expansão do consórcio e a consolidação do comitê técnico, o próximo ano trará o desafio de realizar a primeira eleição aberta de governança e ampliar a adoção fora do ambiente imediato de projetos da fundação. Espera-se que mais fornecedores de nuvem e ferramentas de segurança integrem o suporte nativo às consultas DNS-AID e ANS, pavimentando o caminho para uma internet de agentes autônomos mais segura e transparente.

## Fontes desta edição

- [Agent Name Service is Now Part of The Linux Foundation](https://itsfoss.com/news/ans-joins-linux-foundation).
