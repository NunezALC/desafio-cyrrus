# Desafio Técnico - Caderneta de Vacinação Cyrrus

Aplicação mobile/web desenvolvida em Ionic com Angular (Standalone Components) para o gerenciamento e acompanhamento vacinal infantil.

## 🚀 Link do Projeto em Produção
Acesse a aplicação rodando ao vivo aqui: **[desafio-cyrrus-steel.vercel.app](https://desafio-cyrrus-steel.vercel.app/tabs/tab1)**

## 🎨 Identidade Visual e Paleta de Cores
O projeto foi totalmente adaptado seguindo a proposta de design minimalista claro, utilizando obrigatoriamente a paleta de cores oficial fornecida pela Cyrrus:
- **Marrom Escuro (`#473C33`)**: Utilizado nos cabeçalhos (`ion-toolbar`) e tipografia principal para garantir uma leitura elegante e corporativa.
- **Verde Oliva (`#ABC270`)**: Indicador visual semântico para vacinas com status `REALIZADA`.
- **Amarelo (`#FEC868`)**: Indicador visual para campanhas `ATIVA` ou vacinas pendentes, mantendo boa legibilidade com contraste escuro.
- **Laranja (`#FDA769`)**: Indicador visual de destaque para vacinas com status `ATRASADA` (Previsão ultrapassada).
- **Fundo Off-White (`#FAFAFA`)**: Utilizado para garantir o contraste ideal dos cards e uma interface limpa.

## 🎯 Cenários Atendidos
1. **Cenário 1 (Badges Semânticos)**: Identificação visual imediata do status das vacinas através de cores padronizadas.
2. **Cenário 2 (Destaque de Atraso)**: Alerta visual em cor contrastante para vacinas cuja data de previsão já foi ultrapassada.
3. **Cenário 3 (Aba de Campanhas)**: Criação de uma aba exclusiva (Tab 1) listando as Campanhas Nacionais de Vacinação vigentes.
4. **Cenário 4 (Alternância de Dependentes)**: Filtro dinâmico no topo da Caderneta (Tab 2) que permite alternar entre dependentes, isolando completamente o histórico de vacinas sem misturar as informações.

## 🛠️ Como Executar o Projeto Localmente

Para rodar o projeto na sua máquina, siga os comandos abaixo em sequência no terminal:

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Executar o servidor local de desenvolvimento
ionic serve