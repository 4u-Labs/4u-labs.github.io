---
layout: post
title: "Instalações Elétricas de Baixa Tensão: Dimensionamento de Condutores e Disjuntores (NBR 5410)"
date: 2026-09-29 17:00:00 -0300
categories: [Engenharia]
tags: [ecalc, eletrica, nbr5410, disjuntores, condutores, quedadetensao, engenhariacivil]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "Low-Voltage Electrical Sizing: Conductors, Circuit Breakers & Voltage Drop (NBR 5410)"
excerpt_en: "Size electrical branch circuits and distribution boards: calculate ampacity, thermal and grouping derating, voltage drop limits, and breaker coordination under NBR 5410."
---

<div data-lang="pt" markdown="1">

O projeto elétrico predial é responsável direto pelo conforto e segurança contra princípios de incêndio provocados por sobrecargas e curtos-circuitos. Dimensionar cabos elétricos sem considerar fatores de agrupamento em eletrodutos ou verificar a queda de tensão em circuitos longos compromete aparelhos eletroeletrônicos e gera superaquecimento perigoso.

O aplicativo **Instalações Elétricas** do **ECALC** implementa os critérios analíticos da **NBR 5410:2004** para dimensionamento de circuitos terminais e alimentadores de baixa tensão.

### 📐 Principais Recursos Técnicos

* **Critério da Capacidade de Condução de Corrente ($I_Z$):** Cálculo da corrente de projeto ($I_B = P / (V \cdot \cos\phi)$) com aplicação dos fatores de correção por temperatura ($f_t$) e fator de agrupamento de circuitos no mesmo eletroduto ($f_g$).
* **Critério da Queda de Tensão:** Verificação percentual para garantir limites normativos de até $2\%$ em circuitos terminais e $4\%$ total, calculando a bitola mínima necessária para neutralizar perdas resistivas.
* **Coordenação e Proteção Disjuntor-Cabo:** Enquadramento da regra de ouro da NBR 5410: $I_B \le I_n \le I_Z$, recomendando a corrente nominal exata do disjuntor termomagnético (DIN/NEMA).
* **Imposição de Bitolas Mínimas:** Bloqueio automático de bitolas inferiores a $1.5\text{ mm}^2$ para circuitos de iluminação e $2.5\text{ mm}^2$ para tomadas (TUG e TUE).

Acesse o aplicativo gratuitamente: [**Abrir Instalações Elétricas no ECALC**](https://4u.ia.br/app/engenharia/eletrica.html) e conheça a suíte completa no [**ECALC PRO Hub**](https://4u.ia.br/app/engenharia/).

---

* **Acesso Direto ao Aplicativo:** [Instalações Elétricas de Baixa Tensão: Dimensionamento de Condutores e Disjuntores (NBR 5410)](https://4u.ia.br/app/engenharia/eletrica.html)
* **Suíte Completa ECALC PRO:** [https://4u.ia.br/app/engenharia/](https://4u.ia.br/app/engenharia/)
* **Repositório Oficial no GitHub:** [https://github.com/4u-Labs/ecalc](https://github.com/4u-Labs/ecalc)

</div>

<div data-lang="en" markdown="1">

Electrical design directly affects occupant safety, preventing fires caused by cable overheating and short-circuits. Sizing wire conductors without derating for conduit bundling or checking voltage drop over long runs damages sensitive appliances.

The **Low-Voltage Electrical Sizing** module in **ECALC** implements all design criteria required by **NBR 5410:2004**.

### 📐 Key Technical Features

* **Conductor Ampacity ($I_Z$):** Sizes design current ($I_B$) applying ambient temperature ($f_t$) and conduit grouping derating factors ($f_g$).
* **Voltage Drop Sizing:** Validates voltage drop limits ($\le 2\%$ on branch circuits and $\le 4\%$ on feeders) ensuring adequate terminal voltage.
* **Breaker-Conductor Coordination:** Solves standard coordination rule ($I_B \le I_n \le I_Z$) recommending DIN thermal-magnetic breakers.
* **Minimum Code Wire Cross-Sections:** Enforces minimum $1.5\text{ mm}^2$ for lighting and $2.5\text{ mm}^2$ for general/dedicated receptacle outlets.

Try the web tool: [**Launch Electrical Sizing in ECALC**](https://4u.ia.br/app/engenharia/eletrica.html) and discover the full engineering portal at [**ECALC PRO Hub**](https://4u.ia.br/app/engenharia/).

---

* **Direct App Access:** [Low-Voltage Electrical Sizing: Conductors, Circuit Breakers & Voltage Drop (NBR 5410)](https://4u.ia.br/app/engenharia/eletrica.html)
* **Full ECALC PRO Suite:** [https://4u.ia.br/app/engenharia/](https://4u.ia.br/app/engenharia/)
* **Official GitHub Repository:** [https://github.com/4u-Labs/ecalc](https://github.com/4u-Labs/ecalc)

</div>
