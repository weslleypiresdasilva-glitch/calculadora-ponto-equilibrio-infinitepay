# Case SEO & AI Growth — Calculadora de Ponto de Equilíbrio

Case desenvolvido para o desafio técnico de SEO & AI Growth da InfinitePay, com o objetivo de identificar, a partir do dataset fornecido, uma oportunidade de aquisição orgânica por meio de uma ferramenta gratuita.

### Entregas

🌐 **[Acessar a calculadora](https://weslleypiresdasilva-glitch.github.io/calculadora-ponto-equilibrio-infinitepay/)**

📊 **[Ver análise, estratégia, roadmap e arquitetura](https://github.com/weslleypiresdasilva-glitch/calculadora-ponto-equilibrio-infinitepay/blob/main/analise/analise-seo-infinitepay.xlsx)**

🎥 **[Assistir à apresentação do case](https://www.loom.com/share/486a28f64792444c82ee57e05b157dee)**

---

## A oportunidade

A análise partiu dos três arquivos fornecidos no desafio, utilizando `organic-keywords.csv` como base principal de oportunidades e enriquecendo a análise com informações de páginas e concorrentes presentes no próprio dataset.

O processo considerou primeiro se cada busca poderia ser naturalmente atendida por uma ferramenta e, posteriormente, sinais como demanda, tráfego observado, posição, dificuldade, características das páginas concorrentes, aderência ao negócio da InfinitePay e viabilidade de implementação.

Entre as oportunidades analisadas estavam ferramentas relacionadas a QR Code, dias úteis, markup e ponto de equilíbrio.

A recomendação final foi uma **Calculadora de Ponto de Equilíbrio**, associada à intenção de busca **“como calcular ponto de equilíbrio”**.

A escolha não foi baseada apenas no maior volume de busca. A oportunidade apresentou uma combinação relevante entre:

- demanda identificada no dataset;
- intenção naturalmente calculável;
- aderência à realidade financeira do lojista;
- simplicidade de implementação;
- conexão com o ecossistema de conteúdos e ferramentas financeiras da InfinitePay.

---

## Por que uma calculadora?

Na validação com o inventário da própria InfinitePay, identifiquei que a empresa já possui conteúdo editorial sobre ponto de equilíbrio, além de ativos relacionados a custos, margem, precificação e planejamento financeiro.

A proposta, portanto, não é criar um novo território editorial do zero, mas adicionar uma **camada de ferramenta** a esse ecossistema.

O conteúdo ajuda o lojista a entender o conceito. A calculadora permite aplicar esse conhecimento aos números do próprio negócio.

---

## A ferramenta

A calculadora utiliza três informações:

- custos fixos mensais;
- preço médio de venda por unidade;
- custo variável por unidade.

A partir delas, apresenta:

- margem de contribuição por venda;
- margem de contribuição percentual;
- quantidade mínima de vendas para atingir o ponto de equilíbrio;
- faturamento necessário para atingir o ponto de equilíbrio.

Embora o desafio permitisse uma interface estática ou cálculo simplificado, optei por desenvolver uma versão funcional utilizando apenas **HTML, CSS e JavaScript**.

---

## Estratégia de aquisição

A ferramenta não foi pensada como uma URL isolada.

A proposta é conectá-la aos ativos já existentes da InfinitePay relacionados a:

- ponto de equilíbrio;
- custos fixos e variáveis;
- margem;
- preço de venda;
- planejamento financeiro.

A calculadora funciona como uma nova etapa dessa jornada, enquanto novas páginas só devem ser incorporadas à arquitetura quando dados posteriores indicarem necessidades e intenções distintas.

---

## Roadmap SEO + AEO

O plano de 90 dias segue três etapas:

### 0–30 dias — Lançar e conectar

Publicar e indexar a calculadora, conectá-la aos conteúdos relacionados, configurar a mensuração e estabelecer os baselines de SEO e AEO.

### 31–60 dias — Aprender e otimizar

Analisar no Google Search Console as queries reais que passam a levar usuários à ferramenta, melhorar a página a partir desses sinais e verificar a relação entre o artigo existente e a calculadora.

### 61–90 dias — Escalar o que funcionou

Priorizar queries e conteúdos que demonstrarem potencial, reforçar links internos, trabalhar autoridade da página e expandir o ecossistema apenas onde os dados indicarem oportunidade.

---

## Mensuração de SEO e AEO

Para **SEO**, a evolução da página seria acompanhada principalmente pelo Google Search Console, observando:

- indexação;
- queries;
- impressões;
- cliques;
- CTR;
- posição;
- referring domains.

Para **AEO**, o primeiro passo seria entender qual solução de monitoramento já faz parte da stack da InfinitePay.

Soluções disponíveis no mercado trabalham com conjuntos de prompts para acompanhar a presença de marcas em respostas geradas por IA. A estratégia proposta é definir um conjunto inicial de prompts relacionados à intenção da ferramenta, estabelecer um baseline e acompanhar sua evolução ao longo dos 90 dias.

Os principais sinais seriam:

- presença da InfinitePay nas respostas;
- URLs da InfinitePay citadas;
- concorrentes mencionados ou citados;
- evolução desses indicadores em relação ao baseline.

Os prompts podem ser refinados conforme novas dúvidas e intenções sejam identificadas após o lançamento.

---

## Limitações da análise

O dataset permite identificar e comparar oportunidades de busca, mas não permite prever a performance futura da ferramenta.

Volume de busca, dificuldade, posições e tráfego observado nos concorrentes não garantem o tráfego que a InfinitePay conquistaria após o lançamento.

Da mesma forma, os dados de SEO não permitem concluir quantos usuários da ferramenta se tornariam clientes.

Por isso, parte importante da estratégia é utilizar os dados reais obtidos após o lançamento para validar as hipóteses antes de ampliar o investimento.

---

## Uso de IA

A IA foi utilizada como assistente durante o desenvolvimento do case, apoiando etapas de análise, questionamento de hipóteses e desenvolvimento da página.

As decisões de priorização foram tomadas a partir do dataset fornecido e da validação de aderência com informações da própria InfinitePay.

---

## Estrutura do repositório

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── analise/
    └── analise-seo-infinitepay.xlsx
