---
layout: radar-post
radar: true
title: 'Análise da Falha de Segurança em ChatGPT Accounts: Como o Ataque em Cadeia Explorou Iframes e CSP'
title_en: 'Analysis of the ChatGPT Accounts Security Flaw: How a Chain Exploit Leveraged Iframes and CSP'
excerpt: Entenda como uma falha complexa envolvendo visualizações HTML do ChatGPT, a biblioteca MathLive e políticas
  de segurança de conteúdo permitiu ataques de exfiltração de dados.
excerpt_en: Understand how a complex flaw involving ChatGPT HTML previews, the MathLive library, and Content Security
  Policies allowed data exfiltration attacks.
date: 2026-11-05 18:00:00 -0300
categories:
- Radar Tech
tags:
- tecnologia
- radar-tech
author: Redação 4u-Labs
image: /assets/images/radar-tech/analise-falha-seguranca-chatgpt-iframes-csp.webp
translation_pt: /radar-tech/analise-falha-seguranca-chatgpt-iframes-csp/
translation_en: /en/radar-tech/analise-falha-seguranca-chatgpt-iframes-csp/
topic_id: 785d4ceb71a807a6705cd46d
related:
- url: /radar-tech/analise-respostas-incidentes-agentes-ia-nicol-cisa-nsa/
  title: 'Análise e novidades: Como o registro de identidade mitiga incidentes com agentes de IA segundo NIST, CISA
    e NSA'
  title_en: 'Analysis and News: How the Identity Record Mitigates AI Agent Incidents According to NIST, CISA, and
    NSA'
- url: /radar-tech/analise-novidades-ghostty-1-4-desempenho-ram-linux/
  title: 'Análise e novidades: Ghostty 1.4 traz mais desempenho, menor uso de RAM e mudanças críticas no Linux'
  title_en: 'Ghostty 1.4 Analysis: Better Performance, Lower RAM, and Critical Linux Changes'
lang: pt
permalink: /radar-tech/analise-falha-seguranca-chatgpt-iframes-csp/
image_alt: 'Ilustração editorial Radar Tech: Análise da Falha de Segurança em ChatGPT Accounts: Como o Ataque em
  Cadeia Explorou Iframes e CSP'
---

A segurança em plataformas baseadas em inteligência artificial generativa depende fortemente do isolamento estrito de componentes interativos exibidos na interface do usuário. Uma vulnerabilidade descoberta e reportada pela Parameter Labs revelou falhas críticas na implementação do ChatGPT para os chamados "HTML previews" (anteriormente conhecidos como Canvas), evidenciando os riscos associados a cadeias de exploração complexas em arquiteturas web modernas baseadas em iframes sandboxed. O avanço das interfaces conversacionais com capacidade de renderizar aplicações ricas e customizadas expande a superfície de ataque, exigindo uma revisão profunda sobre como navegadores e plataformas lidam com contextos de execução cruzados, validação de origens e políticas de restrição de recursos estáticos e dinâmicos em ecossistemas corporativos e de consumo.

## O que mudou e novidades

A falha detalhada pela Parameter Labs ocorreu na forma como o ChatGPT lida com elementos interativos e gráficos dinâmicos gerados durante as interações dos usuários. A OpenAI utiliza a biblioteca JavaScript MathLive como parte de seu suporte a gráficos e equações matemáticas, a qual inclui um teclado virtual próprio que pode ser acionado na página principal através da API postMessage() a partir de um iframe isolado por sandbox. O código de recebimento de mensagens dessa estrutura empregava o método innerHTML sem restrições adequadas quanto à origem exata dos quadros sandboxed, permitindo que qualquer moldura interativa injetasse código HTML personalizado na página principal. Embora o innerHTML não execute elementos de script diretamente por si só, ele abriu brechas cruciais para a injeção bem-sucedida de um novo iframe que carecia completamente de restrições de sandbox.

Adicionalmente, as regras de Política de Segurança de Conteúdo (CSP) implementadas pela OpenAI bloqueavam scripts embutidos inline por completo e restringiam o carregamento de scripts a um grupo estrito de domínios confiáveis. Contudo, entre os domínios permitidos estava o do YouTube, e verificou-se que o endpoint oEmbed dessa plataforma podia ser manipulado para refletir código JavaScript de forma que ele fosse executado com sucesso no contexto da página. Essa combinação sofisticada resultou na execução arbitrária de código JavaScript dentro da sessão autenticada do ChatGPT, viabilizando a extração de dados privados de usuários a partir de APIs internas e sua posterior exfiltração por meio de referências simples a imagens externas. Como resultado final dessa cadeia, um invasor podia criar uma URL compartilhada do ChatGPT que, ao ser visitada por outro usuário conectado, conseguia exfiltrar dados confidenciais ou executar ações arbitrárias em seu nome.

## Impacto prático para desenvolvedores

Para engenheiros e desenvolvedores que projetam aplicações web incorporando código gerado por usuários ou por modelos de linguagem avançados, o incidente reforça a necessidade absoluta de auditorias profundas e constantes na comunicação inter-frames. O uso contínuo de postMessage e a manipulação inadequada de propriedades como innerHTML continuam sendo pontos críticos de atenção em arquiteturas complexas. O caso demonstra cabalmente que restrições de CSP, por mais estritas que aparentem ser na teoria, podem falhar de maneira crítica se permitirem integrações de terceiros que aceitem reflexão de parâmetros dinâmicos sem a devida sanitização e validação de contexto.

## Limitações e o que avaliar

Embora a OpenAI tenha corrigido a falha estrutural e emitido uma recompensa de bug bounty de 5.000 dólares — valor considerado módico por analistas e especialistas em segurança diante da gravidade e do alcance potencial da exploração —, o ecossistema de aplicações conversacionais com suporte a código HTML interativo ainda carece de padrões maduros e padronizados de isolamento. Avaliar a integridade, o comportamento e os riscos potenciais de bibliotecas de terceiros integradas ao ecossistema principal é uma tarefa tão vital quanto blindar o código proprietário desenvolvido internamente.

## O que esperar a seguir

Espera-se que plataformas que utilizam interfaces ricas e visualizações baseadas em código reforcem drasticamente os mecanismos de validação para mensagens entre iframes e reduzam a dependência de domínios externos permissivos em suas políticas de segurança de conteúdo. A mitigação rigorosa de vetores baseados em postMessage e a revisão minuciosa de endpoints de terceiros serão foco constante em avaliações de segurança realizadas por grandes provedores de IA e equipes de engenharia de software.

## Fontes desta edição

- [How We Took Over ChatGPT Accounts](https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts).
- [chatgpt 208](https://simonwillison.net/tags/chatgpt).
