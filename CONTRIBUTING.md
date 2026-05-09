## Fluxo padrão:
- Faça um fork do repositório.
- Crie uma branch (com base na "main"), faça adição, commit e push das alterações.
- Abra um Pull Request da branch criada no seu fork, apontando para a branch "main" do repo original.

## Como fazer uma boa contribuição:
- Foque no arquivo "words.txt".
- Troque "Palavras Ruins" por "Palavras Boas".
- Não adicione palavras com acentuação (á, é, ã, ç...).
- Não adicione palavras que sejam:
    - ofensivas
    - com menos de 4 letras
    - com mais de 7 letras
    - nomes (marcas ou pessoas)
    - inapropriadas (como palavras sexualmente explicitas)
    - sensíveis (coisas comumente relacionadas a traumas, abusos, doensas difíceis)
    - fortemente ligada a grupos sociais (principalmente religiosos)
    - relacionadas a crianças ou menores

### ~ "Palavras Boas" ~
São aquelas com menos letras, conhecidas, com baixa variação na lista, fáceis de memorizar e visualizar.
Entre palavras no singular e plural, prefira o singular.
Se for verbo, use infinitivo.
E, obviamente, utilize apenas palavras gramaticalmente corretas em português brasileiro.

### ~ "Palavras Ruins" ~
São as com mais letras, pouco conhecidas, com mais de uma variação na lista, dificeis de memorizar ou visualizar.
Certas palavras no plural (as dificeis de visualizar mentalmente), e nomes de pessoas também se enquadram.
O mesmo vale para palavras que possam ser interpretadas de forma ofensiva ou inadequada.
Evite termos que sejam fortemente ligados a grupos sociais (principalmente religiosos).
Não use palavras com caracteres não ASCII.

## Dicas:
 - Após modificar "words.txt", execute "npm run update-words"
   (isso vai ordenar as palavras e atualizar o projeto com elas)
 - Antes de enviar (push) suas alterações, execute os testes localmente com "npm run test"
   (pois eles serão executados após abertura do PR, e serão requerimento para a sua aprovação)
