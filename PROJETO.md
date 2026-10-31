# Portfólio Vanilson — Documentação

## Visão geral

Este projeto é um portfólio pessoal desenvolvido com Next.js, React e TypeScript. A interface mantém todo o conteúdo textual original, a identidade visual verde e preta, as imagens e a disposição principal das secções, enquanto a base de código foi reorganizada em componentes reutilizáveis.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React para os ícones flutuantes
- Intersection Observer para os efeitos de entrada ao fazer scroll

## Estrutura do projecto

```text
app/
├── components/
│   ├── Contact.tsx
│   ├── FloatingIcons.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Reveal.tsx
│   ├── SectionHeading.tsx
│   └── Skills.tsx
├── data/
│   └── projects.ts
├── globals.css
├── layout.tsx
└── page.tsx
public/
└── imagens/
```

## Explicação dos componentes

### `page.tsx`

É o componente principal da página. Junta o cabeçalho, conteúdo principal, secções e rodapé numa única composição simples. Toda a organização visual importante foi separada em componentes próprios.

### `Navbar`

Contém o logotipo, os links de navegação e os botões principais. Os links apontam para as secções `inicio`, `habilidades`, `projetos` e `contato`.

### `Hero`

Apresenta a secção inicial com a apresentação, o cartão central e a fotografia. Os três cartões de competências ficaram organizados numa lista local, facilitando futuras alterações.

### `Skills`

Contém o bloco principal de habilidades. O título e a descrição foram separados com o componente `SectionHeading`, que é reaproveitado na secção de projetos.

### `Projects` e `ProjectCard`

`Projects` recebe os dados da lista de projetos e cria um cartão para cada item. O conteúdo dos projetos está centralizado em `app/data/projects.ts`, sem precisar editar o layout visual para alterar uma imagem, uma etiqueta ou um título.

### `Contact`

Apresenta a chamada para contacto. O botão usa um link `mailto`, preparado para ser substituído pelo endereço de email real.

### `Footer`

Contém o logotipo secundário, o copyright e a marca final da página.

### `Reveal`

Componente cliente que observa cada elemento com Intersection Observer. Quando a secção entra na área visível do navegador, aplica uma animação de fade-in com movimento vertical.

### `FloatingIcons`

Mostra ícones de código e tecnologia em posições fixas pela página. Os ícones têm movimento flutuante próprio, não interferem com os clicks e ficam por trás do conteúdo principal.

## Tailwind CSS

Todo o estilo da estrutura, espaçamento, cores, grids, responsividade e tipografia foi migrado para classes do Tailwind. O ficheiro `app/globals.css` ficou responsável apenas pelo conteúdo global, animações personalizadas, masks da fotografia e configurações que exigem CSS.

O comportamento responsivo usa classes como `max-md` e `max-[480px]`, mantendo versões adaptadas para tablet e smartphone sem classes duplicadas manualmente.

## Animações e efeitos

### Ícones flutuantes

Os ícones são renderizados pelo componente `FloatingIcons` e usam a animação CSS `floatingIcon`:

- movimento vertical suave;
- pequena rotação;
- atraso diferente para cada ícone;
- posicionamento fixo durante a navegação;
- camada detrás do conteúdo.

### Cartões principais

Os três cartões do topo usam a animação `flutuar` e elevam-se ao passar o rato.

### Animação ao fazer scroll

A classe `Reveal` detecta quando um componente entra no viewport. Depois de visível, o componente recebe `reveal-visible` e deixa de ser observado.

### Acessibilidade

O projecto respeita `prefers-reduced-motion`: utilizadores que configuraram menos movimento têm scroll automático, sem animação dos ícones, cartões ou entradas de secção.

## Dados dos projetos

Os projetos estão separados em `app/data/projects.ts`. Cada projecto possui:

```ts
{
  image: "vdm.png",
  tags: ["React", "ReactNative"],
  title: "Nome do projecto",
  repository: "https://..." // opcional
}
```

Para adicionar um novo projecto, basta adicionar um objecto à lista e colocar a imagem em `public/imagens/`.

## Alterações realizadas

- Separação da página monolítica em componentes React.
- Centralização dos dados dos projectos num ficheiro próprio.
- Migração da estrutura de estilos para Tailwind CSS.
- Adição de efeitos de revelação ao fazer scroll.
- Adição de ícones técnicos flutuantes em toda a página.
- Animação suave dos cartões do bloco principal.
- Melhoria dos links de navegação e estados de hover.
- Inclusão de classes responsivas para mobile, tablet e desktop.
- Configuração do Tailwind CSS para Next.js através do PostCSS.
- Configuração de animações reduzidas para acessibilidade.

## Comandos

Instalar dependências:

```bash
npm install
```

Executar em desenvolvimento:

```bash
npm run dev
```

Verificar tipos e configuração:

```bash
npm run lint
```

Gerar a versão de produção:

```bash
npm run build
npm run start
```
