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
lang: pt
permalink: /radar-tech/blackx-uefi-bootkit-baton-drop-secure-boot/
image_alt: 'Ilustração editorial Radar Tech: Como o Bootkit BlackX Explora a Falha Baton Drop e o Impacto Crítico
  no Secure Boot'
---

O surgimento de novos vetores de ataque voltados à camada de inicialização de sistemas operacionais demonstra a persistência e a evolução contínua de ameaças avançadas em ambiente UEFI. Um exemplo recente e preocupante é o bootkit BlackX, descoberto em campanhas de espionagem cibernética direcionadas a agências diplomáticas na Ásia Central, com foco particular em países como Tajiquistão, Uzbequistão e Turcomenistão. O elemento central dessa ameaça reside na reutilização sofisticada de vulnerabilidades conhecidas de hardware e firmware para burlar mecanismos fundamentais de segurança e integridade de inicialização.

## O que mudou e novidades

Identificado no início de 2026, o BlackX explora a vulnerabilidade clássica conhecida como Baton Drop, catalogada oficialmente sob o identificador CVE-2022-21894. Esta mesma falha foi originalmente associada a campanhas anteriores de bootkits amplamente discutidos no ecossistema de segurança, como o BlackLotus, que circula em fóruns clandestinos desde o final de 2022. Pesquisadores de segurança que analisaram o BlackX apontam que a implementação do exploit possui semelhanças notáveis com a de seu antecessor, permitindo aos operadores maliciosos inscrever chaves de proprietário de máquina personalizadas, conhecidas como MOKs (Machine Owner Keys), e carregar arquivos EFI arbitrários em máquinas de vítimas desavisadas.

Apesar de compartilhar origens conceituais claras com o BlackLotus, o BlackX introduz um driver de kernel distinto e novos payloads operacionais voltados a tarefas complexas de espionagem. Especialistas sugerem que o BlackX pode ter sido desenvolvido tanto por meio de engenharia reversa do código do BlackLotus quanto pela aquisição de partes do projeto de referência. Observações detalhadas indicam que algumas amostras continham trechos de código ausentes em repositórios públicos, mas presentes no BlackX, o que reforça a tese de adaptação interna avançada por parte do grupo de ameaças atribuído com média confiança como APT41, também conhecido em relatórios de inteligência como Brass Typhoon, Wicked Panda e Barium.

## Impacto prático para desenvolvedores e sysadmins

Para administradores de sistemas, engenheiros de infraestrutura de TI e equipes de resposta a incidentes, o aspecto mais crítico revelado por esta campanha não é apenas a existência da falha em si, mas a perigosa lacuna existente no processo de remediação e aplicação de patches. Relatórios técnicos indicam que todas as vítimas conhecidas do BlackX utilizavam versões do sistema operacional Windows totalmente atualizadas. Contudo, o bootkit obteve sucesso absoluto na invasão porque o patch corretivo para a falha Baton Drop exige uma ação adicional que muitas vezes passa despercebida: a revogação manual do certificado afetado, especificamente o componente denominado Windows Production PCA 2011.

Como a esmagadora maioria dos administradores de redes corporativas e equipes de operações de TI não executa procedimentos manuais complexos após aplicar atualizações padrão de rotina, os componentes vulneráveis continuaram aptos a ser carregados pelo sistema. Uma vez em execução profunda no sistema, o driver malicioso injetado pelo BlackX atua agressivamente na desativação de processos relacionados à segurança e de callbacks de registro do sistema operacional. Além disso, o software malicioso interfere deliberadamente nos provedores de Rastreamento de Eventos para Windows, conhecidos como ETW (Event Tracing for Windows), com o objetivo direto de obstruir o monitoramento ativo e dificultar a detecção por analistas de segurança defensiva.

## Limitações e o que avaliar

Do ponto de vista analítico, é importante ponderar que os mecanismos de adulteração e evasão implementados pelo driver do BlackX possuem restrições e condições operacionais bastante específicas. Análises aprofundadas demonstraram que certas rotinas avançadas programadas para interferir diretamente em soluções comerciais de segurança e antivírus de mercado, como as suítes da Kaspersky e da Avast, só entram em execução efetiva caso tais ferramentas sejam ativamente detectadas no host de destino. Caso contrário, essas rotinas específicas permanecem dormentes, o que pode alterar o comportamento observável da praga em ambientes heterogêneos.

Além disso, a eficácia do vetor de contornar o Secure Boot depende estritamente da ausência de revogações explícitas na blocklist de firmware da máquina. Isso evidencia que a aplicação passiva de pacotes de atualização de sistema operacional não garante proteção completa e definitiva contra ameaças persistentes avançadas que operam na camada de firmware. Para mitigar riscos correlatos, equipes devem revisar rotinas de segurança descritas em análises de arquitetura e adotar diretrizes semelhantes às discutidas em avaliações de [segurança de agentes de IA e guardrails de execução](/radar-tech/seguranca-agentes-ia-agent-trust-hub-sage-guardrails/), onde o controle estrito de contexto e a validação rigorosa de entradas impedem a execução de instruções não confiáveis.

## O que esperar a seguir

À medida que campanhas de espionagem cibernética refinam o reaproveitamento de códigos de bootkits vazados ou comercializados clandestinamente, as equipes de operações de segurança e engenharia defensiva precisarão adotar verificações muito mais rigorosas de integridade de firmware, além de auditorias ativas e automatizadas de certificados revogados. A automação de políticas de blocklist na inicialização segura passará a ser uma exigência recorrente e mandatório em ambientes corporativos corporativos para mitigar o risco severo de exploração de lacunas decorrentes de atualizações humanas incompletas. Para ambientes que lidam com infraestruturas críticas, a atenção deve se voltar não apenas para a aplicação de patches, mas para a validação integral do estado de revogação de chaves criptográficas em nível de hardware.

## Fontes desta edição

- [BlackX UEFI bootkit exploits Baton Drop flaw to bypass Secure Boot](https://www.bleepingcomputer.com/news/security/blackx-uefi-bootkit-exploits-baton-drop-flaw-to-bypass-secure-boot).
