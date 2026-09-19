---
layout: post
title: "GhostZap: Mensageria Ultrassegura Anti-Forense com Criptografia E2EE (ECDH P-256) e Modo Volátil"
date: 2026-09-10 16:30:00 -0300
categories: [Segurança]
tags: [seguranca, criptografia, e2ee, privacida, ghostzap]
author: "Fabiano Braga // 4U.IA.BR"
---

Em uma era de vigilância em massa e retenção invasiva de metadados, a privacidade em comunicações ponto a ponto não é um privilégio — é um direito fundamental.

O **GhostZap** é um mensageiro confidencial experimental construído com foco em **resistência anti-forense**: as mensagens existem apenas enquanto estão sendo lidas e não deixam rastros em disco, bancos de dados centrais ou logs de servidores.

---

## 1. Troca de Chaves por Curvas Elípticas (ECDH P-256)

A comunicação segura entre dois interlocutores utiliza o protocolo de acordo de chaves **Diffie-Hellman em Curvas Elípticas (ECDH)** sobre a curva NIST P-256:

1. Cada usuário gera um par de chaves assimétricas na memória volátil do navegador.
2. Ao conectar, apenas a chave pública é transmitida.
3. Ambos derivam localmente um segredo compartilhado (Shared Secret) idêntico sem que ele nunca tenha sido transmitido pela rede.
4. Cada mensagem é cifrada com AES-GCM 256 utilizando chaves efêmeras renovadas periodicamente (Perfect Forward Secrecy).

---

## 2. Arquitetura Anti-Forense

- **Modo Volátil em RAM:** Nenhuma mensagem é escrita no `localStorage` ou `IndexedDB`. Fechar a aba do navegador destrói para sempre o histórico da conversa.
- **PIN de Pânico:** Um botão de emergência que sobrescreve os buffers de memória com bytes aleatórios e redireciona a tela imediatamente para um site neutro.

Conheça o GhostZap:  
👉 [https://4u.ia.br/app/zap/](https://4u.ia.br/app/zap/)
