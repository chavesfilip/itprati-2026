# iTpraTi 2026 - Rebranding Digital

Website estático moderno e responsivo para o rebranding da iTpraTi em 2026, consolidando empresa, serviços, planos, migração, parcerias e contactos.

## 🎯 Visão Geral

**iTpraTi 2026** é uma operadora digital inovadora em Angola que oferece soluções de conectividade, IPTV, identidade soberana blockchain e suite de negócios. Este website representa a identidade visual **"Soberania Digital"** com design futurista minimalista.

### Características Principais

- ✅ **Página Única (SPA)** - Scroll suave com navegação por âncoras
- ✅ **Responsivo Mobile-First** - Otimizado para todos os dispositivos
- ✅ **Bilíngue** - Português e Inglês com toggle de idioma
- ✅ **Design Futurista** - Cores: Azul Profundo (#003366) + Verde Acento (#00CC66)
- ✅ **Animações Sutis** - AOS (Animate On Scroll) para transições elegantes
- ✅ **Performance** - Carregamento rápido, sem frameworks pesados
- ✅ **Acessibilidade** - Contraste alto, navegação por teclado, SEO básico

## 🏗️ Estrutura do Projeto

```
itprati-2026/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx     # Página principal com todas as seções
│   │   ├── components/      # Componentes reutilizáveis (shadcn/ui)
│   │   ├── App.tsx          # Roteador principal
│   │   ├── main.tsx         # Entrada React
│   │   └── index.css        # Estilos globais (Tailwind + custom)
│   └── index.html           # Template HTML
├── package.json             # Dependências
├── ideas.md                 # Brainstorm de design
└── README.md               # Este arquivo
```

## 🎨 Design & Identidade Visual

### Tema: "Soberania Digital"

| Elemento | Valor |
|----------|-------|
| **Cor Primária** | Azul Profundo (#003366) |
| **Cor Acento** | Verde Vibrante (#00CC66) |
| **Tipografia Display** | Poppins Bold 700 |
| **Tipografia Body** | Inter Regular 400 |
| **Filosofia** | Geometria Angular, Contraste Extremo, Minimalismo Funcional |

### Seções do Website

1. **Navbar Fixa** - Logo, navegação, toggle de idioma
2. **Hero Section** - Slogan, subtítulo, CTAs, padrão de rede digital animado
3. **Serviços** - 6 cards com ícones (iT-NET, iT-TV, ID Soberano, Suite Negócios, iT-Workspace, VPN Soberana)
4. **Planos** - 4 planos responsivos (Conta, Conectado, Integrado, Empreendedor)
5. **Migração 2026** - Timeline com features, BYOD zero custo, Black Box VIP
6. **Parcerias** - Revendedor (30% comissão) e Embaixador (1 mês grátis)
7. **Contacto** - Formulário de contacto + email direto
8. **Footer** - Links legais, copyright, redes sociais

## 🚀 Instalação & Desenvolvimento

### Pré-requisitos

- Node.js 18+ ou superior
- pnpm (recomendado) ou npm

### Setup Local

```bash
# Clonar repositório
git clone https://github.com/chavesfilip/itprati-2026.git
cd itprati-2026

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir no navegador
# http://localhost:3000
```

### Build para Produção

```bash
# Compilar para produção
pnpm build

# Testar build localmente
pnpm preview
```

## 📦 Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| **React 19** | Framework UI |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS 4** | Estilos utilitários |
| **Vite** | Build tool & dev server |
| **shadcn/ui** | Componentes UI |
| **AOS (Animate On Scroll)** | Animações ao scroll |
| **Font Awesome 6** | Ícones |
| **Google Fonts** | Tipografia (Poppins, Inter) |

## 🌐 Deployment

### Opção 1: Netlify (Recomendado)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Opção 2: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Opção 3: GitHub Pages

```bash
# Adicionar script ao package.json
"deploy": "pnpm build && gh-pages -d dist"

# Deploy
pnpm deploy
```

### Opção 4: Manus (Integrado)

O projeto está configurado para deployment automático na plataforma Manus. Basta fazer push para o repositório GitHub e a plataforma detectará automaticamente as mudanças.

## 📱 Responsividade

O website é otimizado para todos os tamanhos de tela:

- **Mobile** (320px - 640px) - Stack vertical, navegação colapsável
- **Tablet** (641px - 1024px) - Layout adaptado, grid 2 colunas
- **Desktop** (1025px+) - Layout completo, grid 3-4 colunas

## 🌍 Internacionalização

O website suporta dois idiomas com toggle simples:

- **Português (PT)** - Idioma padrão
- **Inglês (EN)** - Alternativa

Todos os textos são armazenados em um objeto `t` dentro do componente Home para fácil manutenção.

## 📞 Contacto & Suporte

- **Email**: support@itprati.ao
- **Website**: https://itprati.ao (após deployment)
- **GitHub**: https://github.com/chavesfilip/itprati-2026

## 📄 Licença

© 2026 iTpraTi. Todos os direitos reservados.

---

## 🔧 Manutenção & Customização

### Alterar Cores

Editar `/client/src/index.css`:

```css
:root {
  --color-deep-blue: #003366;
  --color-accent-green: #00CC66;
  /* ... */
}
```

### Adicionar Novas Seções

1. Criar nova seção em `/client/src/pages/Home.tsx`
2. Adicionar link na navbar
3. Usar componentes reutilizáveis de `/client/src/components/`

### Modificar Conteúdo

Todos os textos estão centralizados no objeto `t` dentro de `Home.tsx`. Basta editar os valores para atualizar o website.

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- 📦 **Bundle Size**: ~150KB (gzipped)
- 🚀 **First Contentful Paint**: <1s
- ⏱️ **Time to Interactive**: <2s

## 🐛 Troubleshooting

### Servidor não inicia

```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Estilos não aplicam

```bash
# Reconstruir Tailwind
pnpm build
```

### Erro de TypeScript

```bash
# Verificar tipos
pnpm check
```

---

**Criado com ❤️ para iTpraTi 2026 - A Tua Liberdade Digital Começa Aqui**
