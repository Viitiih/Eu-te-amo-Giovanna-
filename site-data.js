# Nosso Cantinho — Template editável

Template romântico em HTML, CSS e JavaScript puro, pronto para subir no GitHub Pages, Vercel ou Netlify.

## Como abrir no PC

1. Extraia o ZIP.
2. Abra o arquivo `index.html` no navegador.
3. Clique em **Editar ♡** no canto superior.
4. Troque textos, fotos e links.
5. Clique em **Salvar**.

## Importante sobre edição online

Como esse é um site estático, ele não tem banco de dados. Então:

- As edições feitas pelo botão **Editar ♡** ficam salvas no navegador onde você editou.
- Para publicar essas edições para todo mundo ver, clique em **Baixar dados**.
- O navegador vai baixar um novo arquivo `site-data.js`.
- Substitua o arquivo `site-data.js` antigo pelo novo no seu repositório do GitHub.
- Faça commit e pronto.

## Como subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `site-data.js`
   - pasta `assets`
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Salve.
6. O GitHub vai gerar um link do tipo:
   `https://seuusuario.github.io/nome-do-repositorio/`

## Trocar fotos manualmente

Você também pode substituir os arquivos dentro de:

`assets/photos/`

Ou usar o botão **Editar ♡** e enviar as fotos pela interface.


## Minhas edições ficaram só no navegador. Como mandar para ela?

O botão **Salvar** grava no `localStorage`, ou seja, só no navegador onde você editou.

Para publicar a versão editada:

1. Abra seu site no navegador onde você fez as edições.
2. Clique em **Editar ♡**.
3. Clique em **Baixar dados**.
4. O navegador vai baixar um arquivo chamado `site-data.js`.
5. Entre no seu repositório do GitHub.
6. Substitua o `site-data.js` antigo por esse novo.
7. Faça commit.
8. Aguarde o GitHub Pages atualizar.
9. Mande o link do GitHub Pages para ela.

As fotos que você trocou pelo editor também vão dentro desse `site-data.js`, então não precisa mandar as fotos separadas.


## Otimização iPhone 15 Pro

Esta versão foi ajustada para celular, principalmente iPhone 15 Pro em modo retrato.

Principais mudanças:
- Hero mais compacto.
- Menu superior simplificado no celular.
- Fotos em coluna única, sem sobreposição.
- Cards em uma coluna.
- Editor em tela cheia no celular.
- Campos com fonte 16px para evitar zoom automático no iOS.
- Ajuste de proporção para viewport próximo de 393x852px.

Se você já subiu uma versão antiga no GitHub, substitua principalmente:
- `style.css`
- `index.html`
- `script.js`, se quiser manter as mensagens atualizadas.

Se suas edições estão no navegador, baixe o `site-data.js` pelo botão **Baixar dados** e use esse arquivo junto com esta versão.
