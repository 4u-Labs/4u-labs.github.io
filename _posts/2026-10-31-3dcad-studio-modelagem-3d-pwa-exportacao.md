---
layout: post
title: "3DCad Studio 1.2: peças em milímetros, projetos preservados e instalação PWA"
title_en: "3DCad Studio 1.2: millimeter modeling, complete project persistence and PWA installation"
date: 2026-10-31 16:50:00 -0300
categories: [Engenharia, Design, Utilitários]
tags: [3dcad, cad, modelagem-3d, impressao-3d, stl, 3mf, step, pwa, offline, javascript]
author: "Fabiano Braga // 4U.IA.BR"
excerpt: "Modelagem por malhas no navegador com CSG, esboços numéricos, JSON completo, exportação revisada e PWA PT/EN sem login."
excerpt_en: "Browser mesh modeling with CSG, numeric sketches, complete JSON projects, revised exports and a bilingual PWA without login."
image: /assets/images/3dcad-studio-1-2.webp
---

<div data-lang="pt" markdown="1">

O **3DCad Studio 1.2** reúne criação de peças, operações booleanas e preparação inicial para impressão 3D em um aplicativo local no navegador. A interface lembra fluxos de CAD como os do FreeCAD e do SolidCraft, mas o código é próprio: **esta versão trabalha com malhas e não incorpora os motores desses programas**.

[Abrir o 3DCad Studio](https://4u.ia.br/app/3dcad/) · [Código e documentação](https://github.com/4u-Labs/3dcad) · [Release 1.2.0](https://github.com/4u-Labs/3dcad/releases/tag/v1.2.0)

![3DCad Studio — modelagem local e exportação técnica](/assets/images/3dcad-studio-1-2.webp)

### Criação e edição em milímetros

Primitivas e geradores de peças oferecem dimensões editáveis, posição, rotação, cor e visibilidade. Esboços de retângulos, círculos, oblongos e hexágonos aceitam cotas numéricas e furos antes da extrusão. Há união, subtração, interseção, furo por diâmetro, duplicação, espelho e padrões lineares ou circulares configuráveis.

A revisão corrigiu o acabamento da extrusão para respeitar as dimensões finais informadas, o assentamento de peças giradas e a interpretação de um furo com diâmetro zero. Os geradores mecânicos são aproximações de projeto: engrenagens não constituem uma validação de perfil evolvente; parafusos não trazem rosca helicoidal funcional.

### Salvar precisa preservar a peça inteira

O formato **JSON v2** guarda primitivas, resultados CSG e malhas STL com transformações, escala, visibilidade e identificadores. O histórico de desfazer/refazer também utiliza esse estado completo. Assim, uma peça furada continua presente depois de reabrir o projeto.

O autosave usa IndexedDB, mantém a cópia anterior e dispõe de fallback em localStorage. A interface só informa sucesso depois da gravação. A ajuda oferece recuperação da cópia anterior; exportar JSON continua sendo o caminho para um backup independente do navegador. Limpar os dados do site remove o armazenamento local.

Importações passam por validação e construção temporária antes de substituir a cena. Um arquivo inválido deve preservar o trabalho aberto. Nomes de peças são tratados como texto, e limites de tamanho, quantidade de objetos e triângulos reduzem entradas acidentais excessivas.

### Exportação com unidades e orientação consistentes

STL, OBJ e 3MF compartilham a coleta de geometria mundial, com milímetros, eixo Z vertical e tratamento de espelhos. O 3MF conserva objetos e cores separados. A normalização consolida vértices compartilhados, remove degenerações e trata junções de triângulos; o diagnóstico mostra arestas abertas e não manifold.

O **STEP é facetado**: descreve faces planas e sólidos fechados, sem conservar superfícies analíticas, restrições ou histórico paramétrico. Nesta revisão, o arquivo deixou de truncar a geometria em 4.000 faces. Malhas abertas e casos não suportados são recusados em vez de gerar uma saída aparentemente válida.

A suíte de regressão passou em **35 grupos de testes**, cobrindo estado, importação, geometria, exportação e PWA. Em uma checagem independente com o leitor Open CASCADE/OCP, quatro STEP exportados — bloco, bloco com furo, esfera e suporte — foram lidos como sólidos válidos. A esfera conservou suas 13.632 faces. Esses resultados documentam as amostras testadas; não garantem compatibilidade universal com qualquer CAD ou fatiador.

### Instalação e uso offline

O botão **Instalar** aciona a instalação oferecida pelo navegador compatível. Quando essa opção não é exposta, a ajuda explica os menus de instalação no desktop, Android e iOS. O PWA usa o ícone 3DCad fornecido para o projeto, com variante própria para ícones adaptáveis.

Após uma primeira carga e preparação completas do cache, o editor pode reabrir offline. Isso também foi exercitado recarregando a aplicação com o servidor local desligado. O service worker atualiza somente caches com o prefixo do 3DCad e não intercepta recursos de outros aplicativos do domínio.

Os projetos são processados no navegador, sem login ou API paga. O servidor entrega os arquivos estáticos e pode registrar os acessos HTTP normais. Links externos continuam dependendo de conexão. A interface e a ajuda têm **PT | EN**, com preferência persistida.

### Limites e evolução

Os comandos em texto são interpretados por regras locais e exigem revisão antes de aplicar; não há IA generativa nem servidor MCP. O painel de impressão estima material e tempo, mas não fatia a peça nem gera G-code. Ainda não há kernel BRep analítico, solver geral de restrições, juntas de montagem ou árvore paramétrica com recomputação de dependências.

A documentação registra esses próximos passos arquiteturais. A versão 1.2 concentra-se em tornar confiáveis os fluxos já implementados: criar, editar, salvar, reabrir e exportar peças por malhas.

[Experimente o aplicativo](https://4u.ia.br/app/3dcad/) · [Conheça a 4u-Labs](https://github.com/4u-Labs) · [Apoie o desenvolvimento](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>

<div data-lang="en" markdown="1">

**3DCad Studio 1.2** brings part creation, Boolean operations and initial 3D-print preparation to a local browser application. Its interface draws inspiration from CAD workflows such as FreeCAD and SolidCraft, while using its own implementation: **this release models meshes and does not bundle either application's engine**.

[Open 3DCad Studio](https://4u.ia.br/app/3dcad/) · [Source and documentation](https://github.com/4u-Labs/3dcad) · [1.2.0 release](https://github.com/4u-Labs/3dcad/releases/tag/v1.2.0)

![3DCad Studio — local modeling and technical exports](/assets/images/3dcad-studio-1-2.webp)

### Modeling in millimeters

Primitives and mechanical generators expose dimensions, position, rotation, color and visibility. Rectangle, circle, slot and hexagon sketches support numeric dimensions and holes before extrusion. Union, subtraction, intersection, diameter-based drilling, duplication, mirroring and configurable linear/circular patterns are available.

This revision fixes final extrusion dimensions, bed placement after rotating a part, and zero-diameter bores. Mechanical generators remain approximations: gears do not constitute validated involute profiles, and bolts do not have functional helical threads.

### Complete projects and recoverable storage

**JSON v2** preserves primitives, CSG results and STL meshes, including transforms, scale, visibility and identifiers. Undo/redo uses the same complete state, so a drilled part survives reopening.

Autosave uses IndexedDB, retains the preceding copy and falls back to localStorage. The saved indicator appears only after a successful write. Help includes backup recovery; exporting JSON provides a separate backup outside the browser. Clearing site data removes browser storage.

Imports are validated and constructed in a temporary set before replacing the current scene. Invalid input preserves the open project. Part names are rendered as text, while file, part and triangle limits constrain excessive inputs.

### Consistent exports

STL, OBJ and 3MF share world-space geometry collection, millimeter units, Z-up coordinates and mirrored-face handling. 3MF keeps individual objects and colors. Mesh normalization welds shared vertices, removes degenerate faces and resolves triangle junctions; diagnostics expose boundary and non-manifold edges.

**STEP output is faceted**: it describes planar faces and closed solids, without analytic surfaces, constraints or parametric history. The previous 4,000-face truncation is removed. Open meshes and unsupported cases are rejected instead of producing misleading output.

The regression suite passed **35 test groups** covering project state, imports, geometry, exports and PWA behavior. An independent Open CASCADE/OCP reader accepted four exported STEP fixtures — box, drilled box, sphere and bracket — as valid solids. The sphere retained all 13,632 faces. These checks establish results for those fixtures, not universal compatibility with every CAD application or slicer.

### Installable, bilingual and usable offline

The **Install** button requests the installation flow exposed by a compatible browser. Help provides desktop, Android and iOS instructions when that flow is unavailable. The PWA uses the supplied 3DCad artwork, including a dedicated maskable variant.

After a complete initial load and successful cache preparation, the editor can reopen offline. This was also exercised by reloading with the local server stopped. The service worker manages only the 3DCad cache prefix and avoids other applications' resources.

Projects are processed in the browser without login or paid APIs. The server delivers static assets and may retain normal HTTP access logs. External links still need connectivity. **PT | EN** applies to the interface and help, with a persisted preference.

### What remains outside this release

Text commands use local rules and require review before application; there is no generative AI or MCP server. Print metrics estimate material and time, without slicing or G-code generation. An analytic BRep kernel, general constraint solver, assembly joints and a dependency-recomputing feature tree remain architectural next steps.

Version 1.2 focuses on reliable mesh workflows: create, edit, save, reopen and export.

[Try the application](https://4u.ia.br/app/3dcad/) · [Explore 4u-Labs](https://github.com/4u-Labs) · [Support development](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>
