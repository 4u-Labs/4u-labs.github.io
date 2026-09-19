# 4U.IA.BR // Tech Blog (GitHub Pages)

Repositório oficial do blog de tecnologia e engenharia do ecossistema **4U.IA.BR**, hospedado gratuitamente no **GitHub Pages**.

🔗 **Acesse online:** [https://4u-labs.github.io](https://4u-labs.github.io)  
🌐 **Portal Oficial:** [https://4u.ia.br](https://4u.ia.br)

---

## 🚀 Como Escrever um Artigo Novo

Para publicar um novo artigo no blog, basta criar um arquivo Markdown dentro da pasta `_posts/` seguindo a nomenclatura de data:

`_posts/AAAA-MM-DD-titulo-do-artigo.md`

Exemplo de cabeçalho (Front Matter):

```markdown
---
layout: post
title: "Título do Seu Artigo Aqui"
date: 2026-09-19 12:00:00 -0300
categories: [Engenharia]
tags: [ia, webdev, javascript]
author: "Fabiano Braga // 4U.IA.BR"
---

Seu texto aqui em formato Markdown...
```

Ao fazer `git push` para o branch `main`, o GitHub Pages compilará e publicará o artigo automaticamente em segundos!

---

## 🛠️ Estrutura do Projeto

```
4u-labs.github.io/
├── _config.yml         # Configurações do site, autor e plugins Jekyll
├── _layouts/           # Templates (default, home, post, page)
├── _includes/          # Componentes reutilizáveis (head, header, footer)
├── _posts/             # Artigos em Markdown (.md)
├── assets/
│   ├── css/style.css   # Estilos escuros, tipografia e responsividade
│   └── js/main.js      # Interatividade (ex: botão copiar código)
├── index.html          # Página inicial com grid de artigos
├── sobre.md            # Página institucional Sobre
└── README.md
```

---

## 🌐 Configuração de Domínio Personalizado (Ex: `blog.4u.ia.br`)

Para apontar o blog para um subdomínio próprio:

1. No repositório no GitHub, vá em **Settings > Pages > Custom domain**.
2. Digite: `blog.4u.ia.br`.
3. No painel DNS do seu domínio (Cloudflare, cPanel ou Registro.br), crie um registro:
   - **Tipo:** `CNAME`
   - **Nome:** `blog`
   - **Destino:** `4u-labs.github.io`
4. Ative a opção **"Enforce HTTPS"** no GitHub.
