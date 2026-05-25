# Nosso Diário do Tempo

Site romântico em formato de jornada vertical, com linha do tempo emocional, aviãozinho, mapa de datas e botão "continuar de onde parei".

## Como editar

1. Abra `index.html` no navegador.
2. Clique em **Editar**.
3. Clique em **Adicionar memória**.
4. Preencha título, data, texto, frase final, música e fotos.
5. Clique em **Salvar memória**.

## Como publicar as alterações

As alterações ficam salvas no navegador usando `localStorage`.

Para publicar no GitHub:

1. Clique em **Exportar diário**.
2. O navegador vai baixar `diario-data.js`.
3. Substitua o `diario-data.js` antigo no GitHub por esse novo.
4. Faça commit.
5. Aguarde o GitHub Pages atualizar.

## Observação sobre fotos

As fotos adicionadas pelo editor entram no arquivo exportado `diario-data.js` como base64. Isso é prático, mas muitas fotos pesadas podem deixar o arquivo grande. Reduza as fotos antes de inserir se o diário crescer muito.
