---
layout: post
title: "SafePass: Criptografia Militar AES-GCM 256 e Arquitetura Zero-Knowledge no Navegador"
date: 2026-09-15 09:30:00 -0300
categories: [Segurança]
tags: [seguranca, criptografia, safepass, zeroknowledge, pwa]
author: "Fabiano Braga // 4U.IA.BR"
title_en: "SafePass: Military-Grade AES-GCM 256 Encryption and Zero-Knowledge in the Browser"
excerpt_en: "PBKDF2 with 100,000 iterations, Web Cryptography API, Chrome MV3 extension, and Panic PIN protection."
---


Vazamentos massivos de senhas em plataformas como LastPass reacenderam um debate urgente na comunidade de cibersegurança: **por que confiar seus dados mais sigilosos a servidores em nuvem de terceiros que podem ser hackeados a qualquer momento?**

Criamos o **SafePass** sob a premissa fundamental da **Soberania Digital**: um gerenciador de senhas e cofre confidencial de alta segurança onde sua Chave Mestra nunca trafega pela internet e nenhum byte de dado sai do seu computador sem criptografia militar.

---

## 1. Arquitetura Criptográfica: PBKDF2 + AES-GCM 256

O SafePass foi projetado com a biblioteca nativa **Web Cryptography API (SubtleCrypto)**, garantindo velocidade de baixo nível implementada em C++ diretamente pelo motor do navegador.

O fluxo de segurança segue três etapas rigorosas:

1. **Derivação de Chave com PBKDF2:** Sua senha mestra passa por **100.000 iterações** de hash criptográfico SHA-256 com um salt de 16 bytes gerado via entropia criptográfica (`crypto.getRandomValues`). Isso torna ataques de força bruta e tabelas rainbow computacionalmente inviáveis.
2. **Criptografia Autenticada AES-GCM 256:** As credenciais são criptografadas em blocos com chaves de 256 bits e Vetores de Inicialização (IV) únicos de 12 bytes. O modo GCM (Galois/Counter Mode) inclui uma tag de autenticação que impede qualquer tentativa de adulteração de bits.
3. **Despejo em RAM Efêmero:** As chaves descriptografadas residem temporariamente na memória volátil e são destruídas automaticamente após períodos de inatividade ou bloqueio manual.

```javascript
// Exemplo de derivação de chave mestra com Web Crypto API nativa
async function derivarChaveMestra(senhaMestra, salt) {
    const encoder = new TextEncoder();
    const chaveBase = await crypto.subtle.importKey(
        "raw",
        encoder.encode(senhaMestra),
        "PBKDF2",
        false,
        ["deriveKey"]
    );

    return await crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 100000,
            hash: "SHA-256"
        },
        chaveBase,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
}
```

---

## 2. Extensão Chrome MV3 e Sincronização Segura

Para não perder a praticidade do auto-preenchimento (autofill), construímos uma **Extensão Oficial para o Google Chrome** sob o novo padrão Manifest V3:
- Detecção e preenchimento automático em formulários de login;
- Gerador de senhas aleatórias de alta entropia (símbolos, números, letras com exclusão de caracteres ambíguos);
- **Smart Sync:** Sincronização segura via Google Drive v3 com fusão inteligente de registros locais e remotos, mantendo o cofre 100% cifrado de ponta a ponta.

---

## 3. PIN de Pânico e Defesa Ativa

Em cenários corporativos ou viagens de risco, o usuário pode configurar um **PIN de Pânico (Panic PIN)**. Caso seja coagido a destravar o cofre sob ameaça, digitar esse PIN específico aciona a destruição instantânea do cache de chaves e apresenta uma lista inofensiva de dados fictícios (plausible deniability).

Proteja suas credenciais agora mesmo com segurança militar:  
👉 [https://4u.ia.br/app/safepass/](https://4u.ia.br/app/safepass/)
