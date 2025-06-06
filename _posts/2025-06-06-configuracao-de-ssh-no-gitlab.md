---
layout: post
title: "Configuração de SSH no GitLab"
description: "Aprenda a configurar o SSH no GitLab para facilitar o acesso e a segurança dos seus repositórios."
date: 2025-06-06 
author: Louise Suelen
categories: desenvolvimento
tags: [gitlab, ssh]
permalink: /configuracao-de-ssh-no-gitlab/
---

O objetivo é configurar o SSH no GitLab, porém o processo será detalhado da forma mais acessível possível para pessoas com deficiência visual, sobretudo as que utilizam leitores de tela.

## Por que usar SSH?

---

- Autenticação forte com chave pública/privada, sem digitar senhas a cada operação.
- Possibilidade de assinar commits com a mesma chave.

## Pré-requisitos

---

Para configurar o SSH no GitLab, você precisa fazer outras configurações antes. 

### 1. Pacotes necessários

Para atualizar o apt (gerenciador de pacotes do Debian e derivados) e instalar os pacotes necessários, execute o seguinte comando no terminal:

```bash
sudo apt update
sudo apt install git openssh-client xclip
```
{: .bg-dark.text-white-50.p-3 .rounded}

### 2. Configuração global do Git

Lembre-se de configurar o Git com seu nome e e-mail. Isso é importante para que seus commits sejam identificados corretamente. Execute os seguintes comandos no terminal:

```bash
git config --global user.name "Meu Nome"
git config --global user.email "email.pessoa@exemplo.com"
```
{: .bg-dark.text-white-50.p-3 .rounded}

## Gerar o par de chaves

---

Agora vamos gerar o par de chaves SSH. O algoritmo Ed25519 é recomendado por ser mais seguro e menor que RSA. Execute o seguinte comando no terminal:

```bash
ssh-keygen -t ed25519 -C "email.pessoa@exemplo.com"
```
{: .bg-dark.text-white-50.p-3 .rounded}

O terminal perguntará onde salvar a chave – pressione Enter para aceitar o local ~/.ssh/id_ed25519.

Ao criar sua chave SSH, o sistema pedirá uma "passphrase" (senha). Digite uma senha forte que você possa lembrar - ela será usada para proteger sua chave SSH. Se você não pretende usar um agente SSH para gerenciar suas chaves, pode deixar em branco. Confirme sua escolha pressionando a tecla Enter duas vezes.

<!-- Para equações inline (na mesma linha) -->
A fórmula da área do círculo é $A = \pi r^2$

<!-- Para equações em bloco (centralizadas) -->
$$
E = mc^2
$$

<!-- Exemplo mais complexo -->
$$
\frac{d}{dx}\left( \int_{0}^{x} f(u)\,du\right)=f(x)
$$