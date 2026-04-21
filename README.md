# Projeto Expo: Gestão de Pássaros 🐦

Este projeto é uma aplicação em React Native (Expo) para o gerenciamento de pássaros, utilizando uma arquitetura modular para facilitar a manutenção e escalabilidade.

---

## 📝 Roteiro: Sistema de Gestão de Pássaros (5 Minutos)

### 0:00 - 0:45 | Introdução e Modelagem (O Contrato)
* **Narrador:** "Olá! Hoje vamos entender como funciona o fluxo de dados no nosso App de Pássaros. Tudo começa com a definição do nosso modelo. No arquivo `PassaroInterface.tsx`, estabelecemos o contrato: cada pássaro no sistema precisa obrigatoriamente de um ID, apelido, anilha, espécie, sexo, idade e o ID da gaiola. Isso garante que todos os nossos componentes saibam exatamente quais dados esperar."

### 0:45 - 1:30 | O Container Customizado (`MyScrollView`)
* **Narrador:** "Para a interface, não usamos um ScrollView comum. Criamos o `MyScrollView`. Ele é um componente de layout que utiliza a biblioteca `react-native-reanimated`. Embora ele suporte animações complexas de cabeçalho e interpolação de escala para o topo da tela, aqui ele serve como a base sólida e estilizada que envolve toda a nossa listagem, garantindo uma rolagem fluida e um design consistente com o tema claro ou escuro."

### 1:30 - 2:30 | O Componente de Inserção (`PassaroModal`)
* **Narrador:** "Agora, como os dados entram no sistema? Através do `PassaroModal`. Este é um componente de 'estado controlado'. Dentro dele, usamos o `useState` para cada campo do formulário: apelido, espécie, anilha, etc.
* Quando o usuário preenche os campos e clica em 'Add', o modal não salva os dados sozinho. Ele utiliza uma função de callback chamada `adicionar`, que foi passada pelo componente pai. Isso mantém o modal simples: ele apenas coleta os dados, converte o que for necessário para número e 'avisa' o sistema que um novo pássaro deve ser criado."

### 2:30 - 3:15 | O Componente Visual (`Passaro`)
* **Narrador:** "Antes de vermos a tela principal, temos o componente `Passaro`. Ele é o que chamamos de 'componente burro' ou de apresentação. Sua única responsabilidade é receber as propriedades de um pássaro e renderizá-las em um card branco elegante com bordas arredondadas. Ele transforma os dados brutos da nossa interface em uma interface visual amigável para o usuário final."

### 3:15 - 4:30 | O Cérebro da Operação (`PassaroListScreen`)
* **Narrador:** "Finalmente, chegamos à `PassaroListScreen`. É aqui que a mágica acontece. Ela gerencia dois estados principais: a lista de pássaros (`passaros`) e se o modal está visível ou não.
* O fluxo é o seguinte: Ao clicar no botão '+', mudamos `modalvisivel` para true.
* A função `adicionar` é o coração aqui: ela recebe os dados do modal, gera um ID aleatório para o novo pássaro e usa o operador *spread* (`...passaros`) para criar uma nova lista, mantendo os pássaros antigos e inserindo o novo no final. Como o estado mudou, o React re-renderiza a tela instantaneamente, mapeando o novo array e gerando um novo componente `Passaro` na lista."

### 4:30 - 5:00 | Conclusão
* **Narrador:** "Em resumo: temos um contrato (Interface), um coletor (Modal), um apresentador (Componente Passaro) e um orquestrador (Screen). Essa separação de responsabilidades torna o código fácil de manter e escalar. Se precisarmos mudar o layout do card, mexemos apenas no componente `Passaro`. Se mudarmos o banco de dados, mexemos apenas na `Screen`. Simples e eficiente!"

---

## 💡 Dicas para a Apresentação
1. **Destaque o Código:** Enquanto fala da `PassaroListScreen`, mostre a função `adicionar`. É a parte mais importante da lógica.
2. **Mostre a Prop drilling:** Explique que o `PassaroModal` recebe a função `adicionar` via props, isso mostra conhecimento de arquitetura React.
3. **Foco na Experiência:** Mencione que o uso do `keyboardType="numeric"` no modal melhora a experiência do usuário ao digitar idade e gaiola.
