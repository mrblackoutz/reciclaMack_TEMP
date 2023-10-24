# ReciclaMack
Projeto desenvolvido em conjunto com outros universitários, para construção de um site, em conjunto com uma cooperativa atuante no meio de reciclagem eletrônica

## Tecnologias Utilizadas

1. React: Uma biblioteca JavaScript para a construção de interfaces de usuário
2. Next.js: Uma estrutura React que permite renderização no lado do servidor e gera sites estáticos para aplicativos JavaScript da web.
3. Material-UI: Uma biblioteca popular de componentes de interface do usuário para React.

## Pré-requisitos

Para executar este projeto na sua máquina local, os seguintes softwares precisam estar instalados:

1. Node.js
2. npm (Ao instalar Node.js, o npm também será instalado automaticamente, você pode verificar com npm version)

Antes de prosseguirmos para as etapas de execução do projeto, certifique-se de ter instalado o Node.js no sistema.

## Instalação do Node.js

Siga estes passos para instalar o Node.js no seu sistema:

1. Abra o [site oficial do Node.js] (https://nodejs.org/en/download) e baixe o instalador.
2. A instalação do Node.js é simples, uma vez que é apenas um processo de “próximo, próximo, próximo”.
3. Para verificar se foi instalado corretamente, você pode digitar no terminal `node -v`. O sistema deve exibir a versão do Node.js instalada em seu sistema.

## Executando o Projeto

Os seguintes passos orientarão você para executar este projeto localmente em seu sistema.

### Passo 1: Clonando o Projeto para o local

Aqui nós vamos fazer uma cópia do repositório remoto para o nosso local de desenvolvimento, e ao terminar nosso desenvolvimento nós vamos, enviar o nosso projeto local para o repositório remoto, mediante comandos do git, como commit, pull, push

#### Clonagem por Interface:

1. Abra o Visual Studio Code (VSCode).
2. Pressione `Ctrl + Shift + P` para abrir a paleta de comando.
3. Digite `git: clone` e pressione `Enter`.
4. Insira o URL do seu repositório do projeto (Em "Code" no GitHub) e pressione `Enter`.
5. Selecione a localização onde deseja guardar o clone do projeto localmente e pressione `Enter`.
![Captura de tela com exemplo de como clonar um repositório](https://mackenzie365-my.sharepoint.com/personal/32361841_mackenzista_com_br/_layouts/15/embed.aspx?UniqueId=460fb838-6a4c-467b-83b6-b000d2af4ad6)

#### Clonagem usando o Terminal/Código:

1.Vá até o repositório que você deseja clonar.
2.Clique no botão "Code".
3.Copie a URL que aparece.
4.Abra o Terminal (Linux/Mac) ou Prompt de Comando/CMD (Windows).
5.Use o comando cd para navegar até o local onde você deseja armazenar o código.
6.Execute o comando git clone seguido da URL que você copiou. O comando final deve parecer algo como `git clone https://github.com/username/reponame.git`.
7.Aguarde enquanto o Git baixa o repositório para a sua máquina.

### Passo 2: Instalando as Dependências

1. Navegue até o diretório do projeto no terminal do VSCode.
2. Execute `npm install` para instalar as dependências do projeto.

### Passo 3: Executando o Projeto

1. No terminal, digite `npm run dev` para iniciar o servidor de desenvolvimento.
2. Abra o navegador e acesse `http://localhost:3000`. Lá você verá o projeto rodando.


## Links da Documentação

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Material-UI](https://mui.com/material-ui/react-button/)