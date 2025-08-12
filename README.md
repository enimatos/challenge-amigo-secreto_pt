# Amigo Secreto - Desafio Oracle Next Education e Alura

<img width="1326" height="758" alt="image" src="https://github.com/user-attachments/assets/79e3399c-babc-4909-bb35-7fbe51a9dbdf" />


## Descrição  
Este projeto é uma solução para o desafio [Oracle-Next-Education/challenge-amigo-secreto_pt](https://github.com/Oracle-Next-Education/challenge-amigo-secreto_pt). Trata-se de uma aplicação simples em JavaScript que permite:  
- Adicionar nomes de amigos em uma lista dinâmica.  
- Visualizar essa lista atualizada na tela.  
- Sortear um amigo aleatório para o "amigo secreto".  
- Ocultar a lista após o sorteio, destacando o resultado.

## Funcionalidades  
- Validação para impedir a adição de espaços vazios como nome.  
- Atualização da lista usando manipulação direta do DOM com `for`.  
- Sorteio aleatório com exibição clara do amigo selecionado.  
- Controle de exibição para esconder a lista após o sorteio.

## Tecnologias utilizadas  
- HTML  
- JavaScript (DOM, Eventos)  

## Como usar  
1. Insira o nome de um amigo no campo de texto.  
2. Clique em "Adicionar" para incluir o amigo na lista.  
3. A lista de amigos aparecerá atualizada abaixo do campo.  
4. Clique em "Sortear" para selecionar aleatoriamente um amigo.  
5. O nome sorteado aparecerá e a lista será ocultada para foco no resultado.

<img width="450" height="151" alt="image" src="https://github.com/user-attachments/assets/8b183a49-da49-4b92-b893-e7f0a5fa14f7" />

<img width="998" height="656" alt="image" src="https://github.com/user-attachments/assets/f734d08f-b1ca-4764-91f0-dae98406a09b" />

<img width="930" height="586" alt="image" src="https://github.com/user-attachments/assets/c562ad1b-03aa-49ac-8c83-3703c7c00191" />




## Estrutura do código  
- `adicionarAmigo()`: adiciona o amigo ao array e atualiza a lista visualmente.  
- `atualizarLista()`: percorre o array de amigos com `for` e gera os elementos `<li>`.  
- `sortearAmigo()`: seleciona um amigo aleatório e esconde a lista.

## Possíveis melhorias futuras  
- Implementar remoção de amigos da lista.  
- Incluir persistência dos dados usando LocalStorage.  
- Adicionar animações para transições visuais.  
- Permitir sorteios múltiplos e gerenciamento de pares para o amigo secreto.
