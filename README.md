# App Escolas Públicas

Um aplicativo mobile desenvolvido com React Native e Expo para gerenciar escolas públicas e suas turmas.

## Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org/)
- **npm** (geralmente vem com Node.js)
- **Expo CLI** (será instalado como dependência)

## Configuração Inicial

### 1. Clone ou baixe o projeto

```bash
cd app-escolas-publicas
```

### 2. Instale as dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

```bash
npm install
```

Este comando instalará:

- React Native 0.81+
- Expo SDK 54+
- Zustand (gerenciamento de estado)
- MirageJS (mock backend)
- TypeScript
- Outras dependências necessárias

### 3. Inicie o servidor de desenvolvimento

Para iniciar o app em modo desenvolvimento:

```bash
npm start
```

Ou, se preferir limpar o cache do Expo:

```bash
npm start -- --clear
```

## Executar no Simulador/Emulador

Após executar `npm start`, você verá um menu com opções:

### No iOS Simulator (macOS)

```
Pressione 'i' no terminal
```

### No Android Emulator (Windows, macOS, Linux)

```
Pressione 'a' no terminal
```

### No Navegador (Web)

```
Pressione 'w' no terminal
```

### Com Expo Go (Smartphone)

- Baixe o app **Expo Go** na App Store ou Google Play
- Escaneie o código QR exibido no terminal
- O app será carregado no seu celular

## Funcionalidades

### Módulo de Escolas

#### Listar Escolas

- Visualize todas as escolas cadastradas
- Veja o nome, endereço e número de turmas de cada escola

#### Adicionar Escola

- Navegue para "Nova Escola"
- Preencha nome e endereço (campos obrigatórios)
- Clique em "Salvar"

#### Editar Escola

- Na lista de escolas, clique em "Editar"
- Modifique os dados desejados
- Clique em "Salvar"

#### Excluir Escola

- Na lista de escolas, clique em "Excluir"
- A escola será removida junto com todas as suas turmas

#### Ver Turmas da Escola

- Na lista de escolas, clique em "Ver Turmas"
- Visualize todas as turmas associadas àquela escola

### Módulo de Turmas

#### Listar Turmas

- Abra uma escola para ver suas turmas
- Visualize nome da turma, turno e ano letivo

#### Cadastrar Turma

- Dentro de uma escola, clique em "Cadastrar nova turma"
- Preencha:
  - **Nome da Turma**: ex. "Turma A", "9º Ano B"
  - **Turno**: ex. "manhã", "tarde", "noite"
  - **Ano Letivo**: ex. "2024", "2025"
- Clique em "Salvar"

#### Editar Turma

- Na lista de turmas, clique em "Editar"
- Modifique os dados desejados
- Clique em "Salvar"

#### Excluir Turma

- Na lista de turmas, clique em "Excluir"
- A turma será removida

## Estrutura do Projeto

```
app-escolas-publicas/
├── app/                          # Telas da aplicação
│   ├── _layout.tsx              # Layout raiz com mock server
│   ├── index.tsx                # Tela inicial
│   ├── schools/
│   │   ├── index.tsx            # Lista de escolas
│   │   ├── create.tsx           # Criar nova escola
│   │   ├── [id].tsx             # Detalhes da escola e turmas
│   │   └── edit/
│   │       └── [id].tsx         # Editar escola
│   └── classes/
│       ├── create.tsx           # Criar nova turma
│       └── edit/
│           └── [id].tsx         # Editar turma
├── src/
│   ├── types/
│   │   └── index.ts             # Tipagens TypeScript
│   ├── store/
│   │   └── useSchoolStore.ts    # Zustand store (estado global)
│   ├── mocks/
│   │   └── server.ts            # MirageJS mock server
│   ├── components/              # Componentes reutilizáveis
│   └── services/                # Serviços
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints (Mock)

A aplicação usa **MirageJS** para simular um backend:

### Escolas

| Método | Endpoint           | Descrição                              |
| ------ | ------------------ | -------------------------------------- |
| GET    | `/api/schools`     | Lista todas as escolas com suas turmas |
| POST   | `/api/schools`     | Cria uma nova escola                   |
| PUT    | `/api/schools/:id` | Atualiza uma escola                    |
| DELETE | `/api/schools/:id` | Deleta uma escola                      |

### Turmas

| Método | Endpoint                   | Descrição                  |
| ------ | -------------------------- | -------------------------- |
| GET    | `/api/classes?schoolId=id` | Lista turmas de uma escola |
| GET    | `/api/classes`             | Lista todas as turmas      |
| POST   | `/api/classes`             | Cria uma nova turma        |
| PUT    | `/api/classes/:id`         | Atualiza uma turma         |
| DELETE | `/api/classes/:id`         | Deleta uma turma           |

## Stack Tecnológico

- **React Native 0.81+**: Framework mobile
- **Expo SDK 54+**: Plataforma de desenvolvimento
- **Expo Router 55+**: Navegação baseada em arquivo
- **TypeScript 5.9+**: Tipagem estática
- **Zustand 5.0+**: Gerenciamento de estado
- **MirageJS 0.1.48**: Mock backend
- **React 19.1**: Biblioteca UI

## Resolução de Problemas

### Erro: "expo não é reconhecido"

```bash
npm install -g @expo/cli
```

### Porta já em uso

```bash
npm start -- --clear
```

### Dependências não instaladas

```bash
rm -rf node_modules package-lock.json
npm install
```

### Simular limpar cache do Expo

```bash
npm start -- --clear
```

## Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run android    # Abre o Android Emulator
npm run ios        # Abre o iOS Simulator
npm run web        # Abre no navegador
```

## Dicas

- Sempre verifique se as escolas foram salvas corretamente antes de cadastrar turmas
- Cada turma deve estar associada a uma escola
- Use nomes descritivos para facilitar a identificação
- O mock server persiste os dados apenas durante a sessão do app

## Suporte

Se encontrar problemas:

1. Verifique se todas as dependências foram instaladas: `npm install`
2. Limpe o cache: `npm start -- --clear`
3. Reinicie o servidor de desenvolvimento
4. Verifique a porta 19000 está disponível

## Licença

Este projeto é fornecido como está para fins de demonstração.

---

**Desenvolvido com ❤️ usando React Native e Expo**
