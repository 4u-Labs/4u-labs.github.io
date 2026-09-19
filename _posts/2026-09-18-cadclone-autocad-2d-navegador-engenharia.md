---
layout: post
title: "CADClone: Criando uma Estação AutoCAD 2D no Navegador com Precisão OSNAP e Suporte a DXF"
date: 2026-09-18 14:30:00 -0300
categories: [Arquitetura]
tags: [autocad, cad, engenharia, dxf, web]
author: "Fabiano Braga // 4U.IA.BR"
---

Engenheiros civis e arquitetos enfrentam há décadas o mesmo dilema: abrir uma planta baixa de emergência ou conferir uma cota em uma obra exige computadores de alta potência com placas gráficas caras e licenças corporativas que ultrapassam dezenas de milhares de reais ao ano.

Com o **CADClone Pro**, nos propusemos a criar uma alternativa real: uma estação de CAD 2D de alta fidelidade rodando diretamente no browser, sem instalação e compatível com as normas técnicas da ABNT.

---

## 1. O Sistema de Snapping Magnético (OSNAP)

Em CAD, desenhar "no olho" é inadmissível. Cada vértice precisa se conectar com exatidão matemática aos elementos existentes.

Desenvolvemos um motor de detecção de proximidade espacial que rastreia os pontos-chave da geometria em tempo real conforme o cursor se move:

- **Endpoint:** Extremidades de retas e arcos.
- **Midpoint:** Ponto médio exato de segmentos.
- **Intersection:** Cruzamento analítico entre duas retas ou curvas.
- **Perpendicular:** Projeção ortogonal direta no vetor de destino.

```javascript
// Cálculo analítico de intersecção entre dois segmentos lineares
function interseccaoLinhas(p1, p2, p3, p4) {
    const denom = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    if (denom === 0) return null; // Linhas paralelas
    
    const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;
    const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denom;
    
    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        return {
            x: p1.x + ua * (p2.x - p1.x),
            y: p1.y + ua * (p2.y - p1.y)
        };
    }
    return null;
}
```

---

## 2. Linha de Comando e Atalhos Clássicos

A produtividade de um projetista experiente vem da mão esquerda no teclado e da mão direita no mouse. Recriar menus suspensos modernos sem respeitar a memória muscular de comandos clássicos seria um erro fatal.

No CADClone, a linha de comando inferior suporta:
- `L` ou `LINE` $ightarrow$ Criar linha contínua
- `C` ou `CIRCLE` $ightarrow$ Desenhar circunferência por centro e raio
- `REC` $ightarrow$ Retângulo com coordenadas relativas `@largura,altura`
- `O` ou `OFFSET` $ightarrow$ Deslocamento paralelo equidistante
- `TR` ou `TRIM` $ightarrow$ Aparar segmentos excedentes

---

## 3. Biblioteca com +170 Blocos Técnicos Prontos

Projetos não começam do zero absoluto. Integramos uma biblioteca técnica completa com mais de 170 blocos paramétricos organizados por categorias:
- **Arquitetura:** Portas com raio de abertura, janelas de 2 e 4 folhas, mobiliário em escala.
- **Hidráulica & Sanitário:** Louças, tubulações, registros e caixas sifonadas.
- **Elétrica:** Tomadas, quadros de distribuição, interruptores e luminárias conforme simbologia NBR 5410.

---

## 4. Interoperabilidade e Exportação DXF

Não faz sentido criar uma ferramenta isolada. O CADClone permite exportar pranchas inteiras para o formato universal **DXF (Drawing Exchange Format)** e gerar impressões em escala para **PDF vetorial de alta definição**, prontos para plotagem em A0, A1, A2, A3 ou A4.

Experimente gratuitamente em:  
👉 [https://4u.ia.br/app/cadclone/](https://4u.ia.br/app/cadclone/)
