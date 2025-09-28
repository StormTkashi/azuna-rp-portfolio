# Azuna RP - Portfolio

Um site portfolio interativo criado para apresentar a personagem Azuna de RP (Role Play) com uma interface moderna e responsiva.

## 🌟 Características

- **Design Moderno**: Interface com gradientes e animações suaves
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Galeria de Fotos**: Exibição de fotos da personagem
- **Seção de Vídeos**: Player de vídeos dos melhores momentos do RP
- **Animações Interativas**: Morangos caindo e efeitos visuais
- **Formulário de Contato**: Para conectar com outros jogadores

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **Roteamento**: Wouter
- **Animações**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Node.js, Express
- **Build**: Vite + ESBuild

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd azuna-rp-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5000`

## 🏗️ Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a build de produção
- `npm run check` - Verifica tipos TypeScript

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   └── lib/           # Utilitários e configurações
├── server/                # Backend Express
├── shared/                # Código compartilhado
└── attached_assets/       # Assets (imagens, vídeos)
```

## 🎨 Componentes Principais

- **HeroSection**: Seção inicial com apresentação da personagem
- **AboutSection**: Informações detalhadas sobre a Azuna
- **FotosSection**: Galeria de fotos interativa
- **VideosSection**: Player de vídeos dos RPs
- **FallingStrawberries**: Animação decorativa de morangos caindo

## 🚀 Deploy

Para fazer deploy da aplicação:

1. Execute a build:
```bash
npm run build
```

2. Os arquivos compilados estarão na pasta `dist/`

3. Configure seu servidor para servir os arquivos estáticos e rodar o backend

## 📝 Personalizações

Para personalizar o conteúdo:

1. **Fotos**: Adicione imagens na pasta `attached_assets/`
2. **Vídeos**: Adicione vídeos na pasta `attached_assets/` e atualize o componente `VideosSection`
3. **Texto**: Edite os componentes em `client/src/components/`
4. **Cores**: Modifique o arquivo `client/src/index.css` para ajustar o tema

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!