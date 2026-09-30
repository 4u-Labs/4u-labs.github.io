---
layout: post
title: "Tubulações e Hidráulica Predial: Perda de Carga Distribuída e Localizada (NBR 5626)"
date: 2026-09-30 08:00:00 -0300
categories: [Engenharia]
tags: [ecalc, hidraulica, tubulacoes, perdadecarga, hazenwilliams, nbr5626, engenhariacivil]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "Piping & Building Hydraulics: Continuous and Local Head Loss Sizing (NBR 5626)"
excerpt_en: "Size cold and hot water piping networks: compute flow velocities, continuous friction loss via Hazen-Williams, equivalent length minor fittings, and dynamic pressures under NBR 5626."
---

<div data-lang="pt" markdown="1">

O dimensionamento de ramais, sub-ramais e colunas de água fria e quente é decisivo para evitar patologias graves como ruído excessivo de escoamento, golpe de aríete destrutivo e falta de pressão nos pontos de consumo mais desfavoráveis (como chuveiros).

O aplicativo **Tubulações e Perda de Carga** do **ECALC** modela circuitos hidráulicos pressurizados e por gravidade conforme as diretrizes da **NBR 5626:2020** e princípios fundamentais da mecânica dos fluidos.

### 📐 Principais Recursos Técnicos

* **Perda de Carga Contínua (Hazen-Williams):** Determinação exata da perda de carga unitária ($J = 10.643 \cdot Q^{1.852} \cdot C^{-1.852} \cdot D^{-4.87}$) para tubulações de PVC ($C = 140-150$), cobre ($C = 130-140$) e PEX/PPR.
* **Perdas de Carga Localizadas por Comprimento Equivalente:** Somatório de perdas singulares em conexões (joelhos $90^\circ$ e $45^\circ$, tês de passagem direta ou lateral, registros de gaveta e globo, válvulas de retenção).
* **Controle Rigoroso de Velocidade do Escoamento:** Verificação dos limites normativos ($0.5\text{ m/s} \le v \le 3.0\text{ m/s}$) para prevenir a deposição de partículas ou sobrepressões dinâmicas perigosas.
* **Pressão Dinâmica Residual no Ponto Crítico:** Cálculo da pressão disponível no aparelho hidrossanitário mais desfavorável ($P_{din} \ge 1.0\text{ mca}$ e $P_{est} \le 40\text{ mca}$).

Acesse o aplicativo gratuitamente: [**Abrir Tubulações no ECALC**](https://4u.ia.br/app/engenharia/tubulacoes.html) e conheça a suíte completa no [**ECALC PRO Hub**](https://4u.ia.br/app/engenharia/).

---

* **Acesso Direto ao Aplicativo:** [Tubulações e Hidráulica Predial: Perda de Carga Distribuída e Localizada (NBR 5626)](https://4u.ia.br/app/engenharia/tubulacoes.html)
* **Suíte Completa ECALC PRO:** [https://4u.ia.br/app/engenharia/](https://4u.ia.br/app/engenharia/)
* **Repositório Oficial no GitHub:** [https://github.com/4u-Labs/ecalc](https://github.com/4u-Labs/ecalc)

</div>

<div data-lang="en" markdown="1">

Sizing domestic water distribution networks requires balancing minimum flow pressure at plumbing fixtures with maximum velocity limits preventing cavitation noise and destructive water hammer surges.

The **Piping & Head Loss** module in **ECALC** sizes gravity and boosted water supply lines in full compliance with **NBR 5626:2020** and fluid dynamics principles.

### 📐 Key Technical Features

* **Continuous Friction Loss (Hazen-Williams):** Solves friction slope ($J = 10.643 \cdot Q^{1.852} \cdot C^{-1.852} \cdot D^{-4.87}$) for PVC, copper, and PPR/PEX piping materials.
* **Equivalent Length Minor Loss Modeling:** Integrates localized turbulence across bends, branch tees, gate valves, and backflow preventers.
* **Velocity Range Verifications:** Enforces strict limits ($0.5\text{ m/s} \le v \le 3.0\text{ m/s}$) avoiding sediment stagnation and transient shockwaves.
* **Residual Dynamic Head Assessment:** Evaluates available residual pressure at the most hydraulically remote fixture ($1.0\text{ mca} \le P_{din} \le 40\text{ mca}$).

Try the web tool: [**Launch Piping in ECALC**](https://4u.ia.br/app/engenharia/tubulacoes.html) and discover the full engineering portal at [**ECALC PRO Hub**](https://4u.ia.br/app/engenharia/).

---

* **Direct App Access:** [Piping & Building Hydraulics: Continuous and Local Head Loss Sizing (NBR 5626)](https://4u.ia.br/app/engenharia/tubulacoes.html)
* **Full ECALC PRO Suite:** [https://4u.ia.br/app/engenharia/](https://4u.ia.br/app/engenharia/)
* **Official GitHub Repository:** [https://github.com/4u-Labs/ecalc](https://github.com/4u-Labs/ecalc)

</div>
