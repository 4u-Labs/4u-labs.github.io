---
layout: post
title: "AuthPass: Autenticador 2FA (TOTP) PWA com Backup Cifrado no Google Drive"
date: 2026-09-09 11:15:00 -0300
categories: [Segurança]
tags: [2fa, totp, seguranca, authpass, pwa]
author: "Fabiano Braga // 4U.IA.BR"
---

Perder o celular e ficar trancado fora de todas as suas contas online é um dos maiores pesadelos digitais modernos. Aplicativos tradicionais de 2FA como Google Authenticator criam dependências de ecossistema fechado ou realizam backups sem criptografia de conhecimento zero.

O **AuthPass** é um autenticador 2FA (TOTP — Time-based One-Time Password) independente, instalável como PWA em qualquer aparelho e com suporte a backup criptografado diretamente no seu próprio Google Drive.

---

## 1. O Algoritmo RFC 6238 (TOTP) no Navegador

O cálculo do código de 6 dígitos a cada 30 segundos é baseado na especificação **RFC 6238**:

$$TOTP(K, T) = Truncate(HMAC	ext{-}SHA1(K, \lfloor (UnixTime - T_0) / 30 floor))$$

O AuthPass decodifica a chave secreta Base32 fornecida pelo QR Code do serviço e executa o HMAC criptográfico no cliente, garantindo sincronia milissegundo a milissegundo com os servidores de autenticação mundiais.

---

## 2. Backup Cifrado com Sua Própria Senha

Seus segredos 2FA nunca são enviados para servidores do AuthPass. Se você optar pelo backup em nuvem, o arquivo JSON é cifrado com **AES-GCM 256** utilizando sua senha pessoal antes de ser salvo na sua pasta privada do Google Drive. Apenas você tem a chave para restaurar seus tokens.

Acesse o AuthPass:  
👉 [https://4u.ia.br/app/authpass/](https://4u.ia.br/app/authpass/)
