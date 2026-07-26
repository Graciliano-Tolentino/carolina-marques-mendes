# Carolina Marques Mendes Advocacia

Site institucional da Dra. Carolina Marques Mendes, OAB/SP 296.392. A aplicação apresenta a identidade profissional, os princípios do atendimento e os canais de contato de forma informativa, acessível e compatível com as normas éticas da advocacia.

## Tecnologia

- Next.js 16 com App Router
- React 19
- TypeScript
- CSS responsivo
- Hospedagem recomendada: Vercel

## Requisitos

- Node.js 22 ou superior
- npm 10 ou superior

## Instalação e desenvolvimento

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
npm run lint
npm test
npm run build
npm audit
```

## Estrutura principal

```text
app/
  layout.tsx          metadados globais e fontes
  page.tsx            página institucional
  privacidade/        política de privacidade
  robots.ts           regras para buscadores
  sitemap.ts          mapa do site
lib/site.ts           URL pública e dados estruturados
public/               favicon e imagem social
tests/                verificações automatizadas
```

## Variável de ambiente

Copie `.env.example` para `.env.local` apenas se quiser definir manualmente a URL pública:

```bash
cp .env.example .env.local
```

```text
NEXT_PUBLIC_SITE_URL=https://dominio-confirmado.com.br
```

Não use domínio fictício. Em previews da Vercel, a aplicação utiliza automaticamente a URL fornecida pela plataforma. Quando o domínio brasileiro for confirmado, cadastre a variável na Vercel para Production e faça um novo deploy.

## GitHub

Depois de extrair o pacote no diretório desejado:

```bash
cd "/home/user/Documents/Softwares/carolina-marques-mendes"
git init
git add .
git commit -m "feat: site institucional Carolina Marques Mendes"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Crie o repositório vazio no GitHub antes de adicionar a URL. Não inclua `node_modules`, `.next`, `.env.local` ou credenciais.

## Vercel

1. Na Vercel, escolha **Add New → Project**.
2. Importe o repositório do GitHub.
3. Confirme o preset **Next.js**.
4. Mantenha os comandos e o diretório de saída nos valores padrão.
5. Faça o deploy.
6. Após confirmar o domínio, adicione `NEXT_PUBLIC_SITE_URL` e conecte o domínio em **Settings → Domains**.

Não é necessário `vercel.json` para esta aplicação.

## Atualização de conteúdo

Confirme com a Dra. Carolina antes de publicar áreas de atuação, especialidades, títulos, formação, modalidades de atendimento ou qualquer outra informação profissional ainda não validada. Preserve a comunicação informativa, sem promessa de resultado, comparação, mercantilização ou captação indevida.

## Privacidade e segurança

O site não possui formulário, login, banco de dados, analytics, pixels ou cookies não essenciais. Os contatos ocorrem por serviços externos. A política de privacidade está disponível em `/privacidade`.

Segredos e arquivos `.env` não devem ser commitados. A cada atualização:

```bash
npm ci
npm run lint
npm test
npm run build
npm audit
```
