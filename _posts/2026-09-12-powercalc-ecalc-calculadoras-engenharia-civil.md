---
layout: post
title: "PowerCalc & ΞCALC: A Suíte de 38 Calculadoras Técnicas para Engenharia Civil e Ciências Exatas"
date: 2026-09-12 10:00:00 -0300
categories: [Engenharia]
tags: [engenhariacivil, powercalc, ecalc, calculos, nbr]
author: "Fabiano Braga // 4U.IA.BR"
---

Engenheiros civis, calculistas estruturais e técnicos de obra precisam frequentemente validar dimensionamentos rápidos no canteiro sem acesso a softwares pesados de modelagem BIM.

Desenvolvemos o **PowerCalc** e a suíte **ΞCALC** para atender essa demanda: uma coleção abrangente de calculadoras técnicas baseadas rigorosamente nas normas da ABNT (como NBR 6118 para estruturas de concreto armado e NBR 8800 para estruturas de aço), além de módulos para cálculo de matrizes, números complexos e hidráulica.

---

## 1. Módulos Estruturais e Normas ABNT

A suíte cobre os cálculos mais críticos da construção civil:
- **Vigas e Lajes de Concreto:** Cálculo de armadura longitudinal e transversal (estribos), momento fletor resistente e linha neutra.
- **Sapatas e Fundações:** Verificação de tensões admissíveis no solo e armadura de flexão.
- **Pilares:** Verificação de esbeltez e efeitos de segunda ordem local.
- **Hidráulica Predial (NBR 5626):** Dimensionamento de tubulações por perda de carga (Fair-Whipple-Hsiao e Hazen-Williams).

```javascript
// Exemplo de cálculo de área de aço (As) para seção retangular sob flexão simples (NBR 6118)
function calcularArmaduraFlexao(b, d, fcd, fyd, Md) {
    // b: largura da viga (cm), d: altura útil (cm), Md: momento de cálculo (kN.cm)
    const delta = 1 - (2 * Md) / (b * Math.pow(d, 2) * 0.85 * fcd);
    if (delta < 0) throw new Error("Seção superarmada ou concreto insuficiente.");
    
    const lambda = 0.8; // Para fck <= 50 MPa
    const x = (d / lambda) * (1 - Math.sqrt(delta));
    const z = d - 0.4 * x; // Braço de alavanca
    const As = Md / (z * fyd); // Área de aço em cm²
    
    return { x, As };
}
```

---

## 2. Álgebra Linear e Matrizes em Tempo Real

Para estudantes e cientistas exatos, o PowerCalc inclui um motor de álgebra linear que executa determinantes, matriz inversa, decomposição LU e resolução de sistemas lineares de até 10x10 variáveis diretamente no navegador, com frações exatas.

Acesse a suíte completa:  
👉 [https://4u.ia.br/app/engenharia/](https://4u.ia.br/app/engenharia/)  
👉 [https://4u.ia.br/app/powercalc/](https://4u.ia.br/app/powercalc/)
