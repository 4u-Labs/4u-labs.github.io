---
layout: post
title: "4uPass: Cofre de Senhas, Desbloqueio por Biometria e Autenticador 2FA em Servidor Próprio"
date: 2026-10-15 21:00:00 -0300
categories: [Segurança, Privacidade, Utilitários]
tags: [4upass, gerenciador-de-senhas, autenticador-2fa, totp, biometria, webauthn, pin, aes-256, pwa, extensao-chrome, 4uiabr]
author: "Fabiano Braga // 4U.IA.BR"
excerpt: "Um cofre de senhas e autenticador 2FA (TOTP) bilíngue PT/EN com criptografia local AES-256, desbloqueio rápido por impressão digital ou PIN, extensão Chromium e cota de anexos."
title_en: "4uPass: Password Vault, Biometric Unlock and 2FA Authenticator on a Self-Hosted Infrastructure"
excerpt_en: "A bilingual PT/EN password vault and 2FA (TOTP) authenticator with client-side AES-256 encryption, biometric or PIN quick unlock, Chromium extension and encrypted attachments."
image: /assets/images/4upass-banner.png
---

<div data-lang="pt" markdown="1">

Gerenciar dezenas de credenciais, chaves de verificação em duas etapas (2FA) e notas confidenciais no dia a dia exige um equilíbrio delicado entre **segurança criptográfica** e **praticidade de acesso**. O **4uPass**, desenvolvido e mantido pela **4U.IA.BR**, entrega um cofre web bilíngue (PT-BR/EN), aplicativo instalável (PWA) e extensão para navegadores Chromium com criptografia local e sincronização imediata.

Diferente de soluções comerciais que restringem o gerador de códigos TOTP ou o envio de anexos aos planos pagos, o 4uPass disponibiliza esses recursos gratuitamente para toda a comunidade 4u-Labs, operando sobre infraestrutura própria com criptografia no dispositivo do usuário.

![4uPass — Cofre de Senhas, Biometria & Autenticador 2FA](/assets/images/4upass-banner.png)

### 🔐 Criptografia local AES-256 e arquitetura Zero-Knowledge

Todas as senhas, cartões, notas seguras e sementes 2FA são criptografados e descriptografados localmente no seu navegador ou extensão usando **AES-256** e derivação de chaves **PBKDF2 / Argon2id** antes de qualquer tráfego de rede.

A sua **Senha Mestre** jamais é transmitida ou armazenada em texto puro no servidor da 4U.IA.BR. Mesmo durante a sincronização entre computador e celular, o backend armazena exclusivamente envelopes criptografados.

### 👆 Desbloqueio rápido por Biometria (WebAuthn PRF) e PIN

Digitar uma Senha Mestre longa e complexa dezenas de vezes ao dia no celular ou no computador pode ser cansativo. Por isso, o 4uPass conta com um módulo dedicado de **Biometria & PIN** acessível diretamente na barra inferior do cofre:

- **Impressão Digital / Biometria:** utiliza o padrão **WebAuthn PRF** (ou chave criptográfica local protegida pelo autenticador do dispositivo) em navegadores e aparelhos compatíveis para desbloquear o cofre com o leitor biométrico.
- **PIN Numérico Local:** permite cadastrar um código rápido para os desbloqueios cotidianos sem expor sua Senha Mestre.
- **Política de Solicitação da Senha Mestre:** você escolhe a frequência com que o cofre deve exigir novamente a Senha Mestre completa — **apenas nos desbloqueios cotidianos com PIN/biometria**, **a cada 15 dias**, **a cada 45 dias**, **a cada 90 dias** ou **sempre**.

Assim que você cadastra sua conta ou faz o primeiro acesso, o aplicativo oferece o atalho para configurar seu PIN e sua biometria, redirecionando automaticamente de volta ao cofre com confirmação visual assim que a ativação é concluída.

### 🔑 Autenticador 2FA (TOTP) integrado e regras inteligentes de URL

Cada credencial salva no 4uPass pode armazenar sua chave secreta **TOTP (2FA)**, gerando códigos dinâmicos de 6 dígitos renovados a cada 30 segundos diretamente ao lado do login e da senha — sem depender de um segundo aplicativo no celular.

Para quem gerencia múltiplos sistemas hospedados sob um mesmo domínio (como portais corporativos ou ferramentas em subpastas como `4u.ia.br/app/...`), o 4uPass inclui regras granulares de detecção de URI:

- **Domínio base**, **Host**, **Começa com (Prefixo)**, **Correspondência exata**, **Expressão Regular** ou **Nunca**.
- Com a opção **Começa com**, a extensão e o cofre diferenciam com precisão cada subpasta ou aplicação, evitando misturar logins de sistemas distintos no mesmo servidor.
- **Ícones de sites (Favicons) otimizados:** cache próprio de ícones para identificar visualmente suas contas com rapidez e privacidade.

### 📨 4uPass Send e Anexos Criptografados

Precisa enviar uma senha temporária, chave de API ou nota técnica para um cliente ou colega de equipe sem deixar rastros em históricos de chat? O **4uPass Send** gera links criptografados de ponta a ponta para textos confidenciais com:

- Data de expiração e exclusão automática configuráveis.
- Limite máximo de visualizações.
- Proteção adicional por senha opcional.

Além disso, cada conta possui uma **cota pessoal de até 5 MB** para guardar anexos criptografados (como certificados digitais, chaves SSH ou documentos de recuperação) diretamente dentro dos itens do cofre.

### 🧩 PWA e Extensão Pré-Configurada para Chromium

O 4uPass foi desenhado para acompanhar sua rotina tanto no celular quanto no desktop:

- **Instalação PWA em 1 clique:** utilize o botão **Instalar** na barra inferior do aplicativo para adicionar o 4uPass à tela inicial do Android, iOS ou área de trabalho do computador.
- **Extensão para Navegadores Chromium:** pacote oficial já pré-configurado para o servidor da 4u-Labs, compatível com **Google Chrome, Brave, Microsoft Edge, Opera e Vivaldi**, trazendo preenchimento automático e gerador de senhas na barra do navegador.

### 🌐 Experimente o 4uPass

- [**Abrir Cofre Web 4uPass**](https://4u.ia.br/app/pass/)
- [**Página Comparativa & Download da Extensão**](https://4u.ia.br/app/pass/comparar.html)
- [**Ver na Loja 4u-Labs**](https://4u.ia.br/loja/app.php?id=4upass)
- [**Ecossistema 4u-Labs no GitHub**](https://github.com/4u-Labs)
- [**Apoiar o projeto**](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>

<div data-lang="en" markdown="1">

Managing dozens of credentials, two-factor authentication (2FA) seeds and confidential notes every day requires balancing **cryptographic security** with **frictionless access**. **4uPass**, built and maintained by **4U.IA.BR**, provides a bilingual (PT-BR/EN) web vault, installable PWA and Chromium browser extension with client-side encryption and instant synchronization.

Unlike commercial password managers that lock built-in TOTP authenticators or file attachments behind paid tiers, 4uPass includes these capabilities free of charge for the 4u-Labs community, running on our own self-hosted infrastructure with device-side encryption.

![4uPass — Password Vault, Biometrics & 2FA Authenticator](/assets/images/4upass-banner.png)

### 🔐 Client-side AES-256 encryption and Zero-Knowledge design

All passwords, payment cards, secure notes and 2FA seeds are encrypted and decrypted locally in your browser or extension using **AES-256** and **PBKDF2 / Argon2id** key derivation before any network request takes place.

Your **Master Password** is never transmitted or stored in plaintext on the 4U.IA.BR server. Even when syncing across desktop and mobile devices, the backend only stores encrypted vault payloads.

### 👆 Quick unlock with Biometrics (WebAuthn PRF) and PIN

Typing a long, high-entropy Master Password dozens of times a day on a phone or workstation can get tedious. 4uPass features a dedicated **Biometrics & PIN** module right in the bottom toolbar:

- **Fingerprint / Biometric Unlock:** leverages **WebAuthn PRF** (or a device-bound cryptographic key guarded by your platform authenticator) on compatible browsers and devices to unlock your vault with a touch.
- **Local Numeric PIN:** lets you set a quick PIN for everyday unlocks without exposing your Master Password.
- **Configurable Master Password Policy:** choose how often the vault requires your full Master Password again—**routine PIN/biometric unlocks**, **every 15 days**, **every 45 days**, **every 90 days**, or **always**.

Right after creating your account or signing in, 4uPass offers a streamlined prompt to configure your PIN or fingerprint and automatically returns you to your unlocked vault with visual confirmation once enabled.

### 🔑 Built-in 2FA (TOTP) authenticator and smart URL rules

Every login item in 4uPass can store a **TOTP (2FA)** secret key, generating 6-digit verification codes every 30 seconds right next to your username and password—no separate phone app required.

For users who work with multiple web apps hosted under the same domain (such as enterprise portals or subpath apps like `4u.ia.br/app/...`), 4uPass supports granular URI matching rules:

- **Base domain**, **Host**, **Starts with (Prefix)**, **Exact**, **Regular Expression**, or **Never**.
- Using **Starts with**, both the web vault and browser extension cleanly isolate credentials for each subpath application on the same server.
- **Enhanced Favicon Cache:** local server icon caching helps you visually identify your accounts at a glance.

### 📨 4uPass Send and Encrypted Attachments

Need to share a temporary password, API key or configuration snippet with a client or teammate without leaving sensitive data in chat logs? **4uPass Send** creates end-to-end encrypted links for text notes with:

- Custom expiration dates and automatic deletion timers.
- Maximum access count limits.
- Optional password protection.

Each user account also includes a **5 MB personal quota** for encrypted file attachments (such as digital certificates, SSH keys or recovery codes) stored directly inside vault items.

### 🧩 1-Click PWA and Preconfigured Chromium Extension

4uPass is built to work seamlessly across mobile and desktop environments:

- **1-Click PWA Installation:** use the **Install** button in the bottom bar to install 4uPass on Android, iOS or desktop.
- **Chromium Browser Extension:** preconfigured for the 4u-Labs server and compatible with **Google Chrome, Brave, Microsoft Edge, Opera and Vivaldi**, offering autofill and a built-in password generator right in your browser toolbar.

### 🌐 Try 4uPass

- [**Open 4uPass Web Vault**](https://4u.ia.br/app/pass/)
- [**Comparison Page & Browser Extension**](https://4u.ia.br/app/pass/comparar.html)
- [**View on 4u-Labs Store**](https://4u.ia.br/loja/app.php?id=4upass)
- [**4u-Labs Ecosystem on GitHub**](https://github.com/4u-Labs)
- [**Support the project**](https://www.paypal.com/ncp/payment/L7YRCS984T33N)

</div>
