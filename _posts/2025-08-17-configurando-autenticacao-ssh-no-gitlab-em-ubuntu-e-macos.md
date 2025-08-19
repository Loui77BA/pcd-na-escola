---
layout: post
title: "Configurando autenticação SSH no GitLab em Ubuntu e macOS"
description: "Este artigo aborda o processo de configuração da autenticação SSH no GitLab, focando em sistemas operacionais Ubuntu e macOS."
date: 2025-08-17 10:00:00 -0300
author: Louise Suelen
categories: [Dicas de tecnologia]
tags: [dicas, tecnologia]
permalink: /configurando-autenticacao-ssh-no-gitlab-em-ubuntu-e-macos/
lang: pt-BR
sumario: |
    <ul class="list-group bg-dark">
        <!-- 1. Apresentação -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#apresentacao">
                <span class="badge bg-secondary">1</span>
                Apresentação
            </a>
        </li>
        <!-- 2. Pré-requisitos -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#pre-requisitos">
                <span class="badge bg-secondary">2</span>
                Pré-requisitos
            </a>
        </li>
        <!-- 3. Configuração global do Git -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#configuracao-global-do-git">
                <span class="badge bg-secondary">3</span>
                Configuração global do Git
            </a>
        </li>
        <!-- 4. Gerar o par de chaves SSH -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#gerar-o-par-de-chaves-ssh">
                <span class="badge bg-secondary">4</span>
                Gerar o par de chaves SSH
            </a>
        </li>
        <!-- 5. Carregar a chave no ssh-agent -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#carregar-a-chave-no-ssh-agent">
                <span class="badge bg-secondary">5</span>
                Carregar a chave no ssh-agent
            </a>
        </li>
        <!-- 6. Copiar a chave pública -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#copiar-a-chave-publica-para-a-area-de-transferencia">
                <span class="badge bg-secondary">6</span>
                Copiar a chave pública
            </a>
        </li>
        <!-- 7. Adicionar a chave ao GitLab -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#adicionar-a-chave-ao-gitlab">
                <span class="badge bg-secondary">7</span>
                Adicionar a chave ao GitLab
            </a>
        </li>
        <!-- 8. Arquivo ~/.ssh/config -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#arquivo-sshconfig">
                <span class="badge bg-secondary">8</span>
                Arquivo ~/.ssh/config
            </a>
        </li>
        <!-- 9. Testando a autenticação SSH -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#testando-a-autenticacao-ssh">
                <span class="badge bg-secondary">9</span>
                Testando a autenticação SSH
            </a>
        </li>
        <!-- 10. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">10</span>
                Resumo
            </a>
        </li>
    </ul>
---

Neste texto, detalhamos como configurar a autenticação SSH no GitLab, tanto no Ubuntu quanto no macOS. SSH é uma maneira segura de se conectar a servidores remotos sem precisar digitar sua senha toda vez que se conecta.

<div class="text-center">
<img src="https://www.edivaldobrito.com.br/wp-content/uploads/2021/07/como-gerar-um-par-de-chaves-ssh-para-poder-autenticar-remotamente.jpg" aria-hidden="true" />
</div>

## <a id="apresentacao"></a> Apresentação
---

Vamos aprender como configurar a **autenticação SSH** no GitLab, tanto no **Ubuntu** quanto no **macOS**. 

Em palavras simples: SSH é uma forma de se conectar a outro computador (ou servidor) de maneira **segura** e **sem precisar digitar sua senha toda vez**. Ele usa um sistema chamado **criptografia assimétrica**, que funciona com um **par de chaves**: uma chave **pública** e uma chave **privada**.  

A ideia é como ter uma fechadura (pública) que qualquer pessoa pode instalar, mas só você tem a chave secreta (privada) que abre aquela fechadura. Isso permite autenticar sua identidade sem revelar sua senha.

Com isso, fica muito mais prático clonar repositórios, enviar código (<code class="text-white-50">git push</code>), atualizar (<code class="text-white-50">git pull</code>) e outras operações.

## <a id="pre-requisitos"></a> Pré-requisitos (O que você precisa)
---

A seguir serão apresentados os pré-requisitos (o que você precisa) para a configuração da autenticação SSH no GitLab.

### Ubuntu

Primeiro, instale alguns pacotes (programas) básicos pelo terminal:

```bash
sudo apt update
sudo apt install git openssh-client xclip
```
{: .bg-dark .text-light .p-3}

- <code class="text-white-50">sudo apt update</code> → Atualiza a lista de pacotes do sistema (como uma checagem para ver o que há de novo).
- <code class="text-white-50">sudo apt install git</code> → Instala o Git, que é o sistema de controle de versões.
- <code class="text-white-50">openssh-client</code> → É o programa que permite usar o protocolo SSH.
- <code class="text-white-50">xclip</code> → Ferramenta para copiar coisas do terminal para a área de transferência.

### macOS
---

No macOS, o Git e o SSH já vêm instalados por padrão. Para confirmar, abra o terminal e digite:

```bash
git --version
ssh -V
```
{: .bg-dark .text-light .p-3}

Se não aparecer nada ou der erro, você pode instalar via [Homebrew](https://brew.sh/):

```bash
brew install git
```
{: .bg-dark .text-light .p-3}

## <a id="configuracao-global-do-git"></a> Configuração global do Git
---

Esses comandos informam ao Git quem é você:

```bash
git config --global user.name "Meu Nome"
git config --global user.email "email.pessoa@exemplo.com"
```
{: .bg-dark .text-light .p-3}

Onde:

- <code class="text-white-50">user.name</code> → Seu nome completo (aparecerá nos históricos de commits).
- <code class="text-white-50">user.email</code> → É o e-mail que você usa no GitLab.

Sempre que você fizer um commit, esses dados identificarão você como a pessoa autora das alterações no código.

## <a id="gerar-o-par-de-chaves-ssh"></a> Gerar o par de chaves SSH
---

Agora vamos criar as chaves.

Existem algoritmos diferentes para gerar chaves SSH. Dois bem conhecidos são:

- **RSA**: Antigo, seguro, mas gera chaves grandes (2048 ou 4096 bits).
- **Ed25519**: Mais moderno, recomendado, gera chaves menores, porém mais seguras e rápidas.

A melhor prática, atualmente, é usar Ed25519.

Para gerar a chave:

```bash
ssh-keygen -t ed25519 -C "email.pessoa@exemplo.com"
```
{: .bg-dark .text-light .p-3}

- **ssh-keygen** → Programa que cria pares de chaves.
- **-t ed25519** → Diz qual algoritmo usar (nesse caso Ed25519).
- **-C "email..."** → Um comentário para identificar a chave (geralmente seu e-mail).

O sistema vai perguntar onde salvar a chave → pressione <kbd>Enter</kbd>.

Vai pedir uma passphrase (senha extra para proteger sua chave). Pode digitar uma frase longa ou deixar em branco e pressionar <kbd>Enter</kbd>.

## <a id="carregar-a-chave-no-ssh-agent"></a> Carregar a chave no <code class="text-white-50">ssh-agent</code>
---

O ssh-agent é um "guardião" da sua chave. Ele guarda sua chave privada na memória e cuida da autenticação quando o Git precisa. Assim você não precisa digitar a passphrase sempre. É como ter um porteiro que pede a senha quando alguém tenta entrar.

### No Ubuntu
---

Edite o arquivo <code class="text-white-50">~/.bashrc</code> ou o arquivo <code class="text-white-50">~/.zshrc</code> (dependendo do seu shell) e e adicione:

```bash
eval "$(ssh-agent -s)"            # inicia o agente
ssh-add ~/.ssh/id_ed25519       # adiciona a chave
```
{: .bg-dark .text-light .p-3}

## No macOS
---

No macOS, o shell padrão é o Zsh e ele tem integração com o Keychain (cofre de senhas do sistema).

Edite o arquivo <code class="text-white-50">~/.zshrc</code> e e adicione:

```bash
eval "$(ssh-agent -s)" 
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```
{: .bg-dark .text-light .p-3}

A opção <code class="text-white-50">--apple-use-keychain</code> faz com que o sistema guarde sua senha no Keychain, evitando repetição.

## <a id="copiar-a-chave-publica-para-a-area-de-transferencia"></a> Copiar a chave pública para a área de transferência
---

Agora precisamos copiar a chave pública (o lado que vai para o GitLab) para a área de transferência (que é como uma "prancheta" onde você guarda coisas temporariamente no sistema operacional).

### No Ubuntu
---

```bash
xclip -sel clip < ~/.ssh/id_ed25519.pub
```
{: .bg-dark .text-light .p-3}

Se não tiver o <code class="text-white-50">xclip</code>, pode exibir o conteúdo e copiar manualmente com:

```bash
cat ~/.ssh/id_ed25519.pub
```
{: .bg-dark .text-light .p-3}

- Depois use <kbd>Shift</kbd> + <kbd>seta para cima</kbd> até o início da linha.
- Depois use <kbd>Shift</kbd> + <kbd>seta para a direita</kbd> para selecionar até o final (a chave é uma linha longa).
- Depois Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> para copiar para a área de transferência.
- Agora você pode colar no navegador com <kbd>Ctrl</kbd> + <kbd>V</kbd>.
- **Dica**: no Ubuntu, muitas vezes funciona também Ctrl + Insert (copiar) e Shift + Insert (colar).

### No macOS
---

No macOS existe o comando <code class="text-white-50">pbcopy</code>, que copia direto:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```
{: .bg-dark .text-light .p-3}

Se, por algum motivo, o comando <code class="text-white-50">pbcopy</code> não estiver disponível, você pode exibir a chave e copiá-la manualmente:

```bash
cat ~/.ssh/id_ed25519.pub
```
{: .bg-dark .text-light .p-3}

- No **Terminal.app**, você segura a tecla <kbd>Shift</kbd> e usa as setas para mover o cursor.
- Cada movimento com a seta, mantendo o <kbd>Shift</kbd> pressionado, vai selecionando o texto.
- Exemplos:
  - <kbd>Shift</kbd> + <kbd>seta para a direita</kbd> → seleciona caractere por caractere.
  - <kbd>Shift</kbd> + <kbd>seta para baixo</kbd> → seleciona a linha inteira abaixo (se houvesse mais de uma).
  - <kbd>Shift</kbd> + <kbd>seta para cima</kbd> → seleciona a linha inteira que está acima da linha atual (se houvesse mais de uma).
- Neste caso, Como a chave está em uma linha só, é preciso usar <kbd>Shift</kbd> + <kbd>seta para a direita</kbd> várias vezes até selecionar tudo.
- Depois que a linha inteira estiver selecionada, pressione <kbd>Command</kbd> + <kbd>C</kbd>.
- Isso envia a chave para a área de transferência do macOS.
- No navegador, vá em **Preferences** → **SSH Keys**.
- No campo Key, pressione <kbd>Command</kbd> + <kbd>V</kbd> para colar a chave.

### Observações
---

- A chave pública (<code class="text-white-50">id_ed25519.pub</code>) é uma linha só, geralmente bem comprida. Tenha certeza de que selecionou do começo ao fim sem cortar nada.
- Nunca copie a chave privada (<code class="text-white-50">id_ed25519</code> sem <code class="text-white-50">.pub</code>) — apenas a pública deve ser enviada ao GitLab.
- Se você tem dificuldades frequentes com seleção manual, prefira os comandos que já mandam a chave direto para a área de transferência:
  - Ubuntu: <code class="text-white-50">xclip -sel clip < ~/.ssh/id_ed25519.pub</code>
  - macOS: <code class="text-white-50">pbcopy < ~/.ssh/id_ed25519.pub</code>

## <a id="adicionar-a-chave-ao-gitlab"></a> Adicionar a chave ao GitLab
---

- Acesse [GitLab](https://gitlab.com/) (<code class="text-white-50">https://gitlab.com/</code>) ou seu GitLab corporativo, um endereço parecido com: <code class="text-white-50">https://gitlab.nomedaempresa.com/</code>.  
- Pressione <kbd>g</kbd> seguido de <kbd>p</kbd> (atalho GitLab) ou vá em **Preferences** → **SSH Keys**.  
- No campo **Key**, cole a chave (<kbd>Ctrl</kbd> + <kbd>V</kbd> no Ubuntu, <kbd>Command</kbd> + <kbd>V</kbd> no macOS).  
- No campo **Title**, coloque o nome do seu dispositivo, como <code class="text-white-50">Ubuntu24-Parallels-M1</code> ou <code class="text-white-50">MacBook-M1</code>.
- No campo **Expiration date**, deixe em branco ou coloque uma data de expiração (vencimento da chave) futura bem distante da atual.
- Ative o botão **Add key** com <kbd>Enter</kbd>.

## <a id="arquivo-sshconfig"></a> Arquivo <code class="text-white-50">~/.ssh/config</code>
---

Esse arquivo é uma forma de automatizar a configuração para cada servidor. O que isso significa? Quer dizer que você pode definir configurações específicas para cada host (servidor), como o nome do usuário e a chave de identidade a ser usada, sem precisar especificar essas informações toda vez que se conectar. 

Em outras palavras: o arquivo serve para simplificar e organizar suas conexões SSH, evitando que você precise lembrar de detalhes toda vez que se conectar.

Edite/crie o arquivo:

```bash
nano ~/.ssh/config
```
{: .bg-dark .text-light .p-3}

Onde:

- nano: é um editor de texto que você pode usar no terminal para editar arquivos.
- ~/.ssh/config: é o arquivo de configuração do SSH, onde você pode definir as configurações específicas para cada host.

Exemplo de configuração que você pode adicionar:

```bash
Host gitlab.nomedaempresa.com
  HostName gitlab.nomedaempresa.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```
{: .bg-dark .text-light .p-3}

Aqui estamos dizendo:

- Quando eu me conectar ao host <code class="text-white-50">gitlab.nomedaempresa.com</code>,
- use o usuário <code class="text-white-50">git</code>,
- utilize a chave <code class="text-white-50">~/.ssh/id_ed25519</code>,
- <code class="text-white-50">IdentitiesOnly yes</code> quer dizer que apenas a chave especificada deve ser usada.

No **GitLab.com oficial**, (que não é o mesmo que o GitLab corporativo) o usuário deve ser <code class="text-white-50">git</code>, não <code class="text-white-50">gitlab</code>.

- Pressione <kbd>Ctrl</kbd> + <kbd>O</kbd> e o nano mostrará:
  - ```bash
    File Name to Write: ~/.ssh/config
    ```
  - Que quer dizer "Nome do arquivo para escrever: ~/.ssh/config".
- Pressione <kbd>Enter</kbd> para confirmar e salvar.
- Depois pressione <kbd>Ctrl</kbd> + <kbd>X</kbd> para sair do nano.
- <kbd>Ctrl</kbd> + <kbd>X</kbd> fecha o nano e te leva de volta ao terminal.

## <a id="testando-a-autenticacao-ssh"></a> Testando a autenticação SSH
---

As configurações foram feitas, agora é hora de testar a autenticação SSH.

### No GitLab corporativo
---

```bash
ssh -T git@gitlab.nomedaempresa.com
```
{: .bg-dark .text-light .p-3}

### No GitLab.com oficial
---

```bash
ssh -T git@gitlab.com
```
{: .bg-dark .text-light .p-3}

Na primeira conexão:

- Será pedido para confirmar se você confia no servidor → digite yes.
- O GitLab ficará registrado no arquivo <code class="text-white-50">~/.ssh/known_hosts</code>.
- Se você configurou uma passphrase, ela será pedida só na primeira vez (no macOS, o Keychain lembra para você).


## <a id="resumo"></a> Resumo
---

No fim das contas, configurar o SSH no GitLab é como trocar aquela porta que sempre pede a chave por uma fechadura automática: você passa a entrar rápido, sem ter que ficar digitando senha toda hora, e ainda com muito mais segurança.

Seguindo os passos que foram apresentados:

- Instalação dos pacotes necessários.
- Geração do par de chaves SSH.
- Cadastro da chave pública no GitLab.
- Teste da conexão SSH.

Faz com que tudo fique pronto para trabalhar sem preocupações. A partir daí, clonar repositórios, enviar código e puxar atualizações vira algo bem mais simples e direto.