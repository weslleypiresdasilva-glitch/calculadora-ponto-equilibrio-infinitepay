(function () {
  "use strict";

  var form = document.getElementById("pe-form");
  var errorBox = document.getElementById("form-error");
  var resultEmpty = document.getElementById("result-empty");
  var resultPanel = document.getElementById("result-panel");

  var currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  var percentFormatter = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  var integerFormatter = new Intl.NumberFormat("pt-BR");

  /**
   * Converte um texto no formato brasileiro (ex.: "9.000,50" ou "9000,5"
   * ou "9000.5") em um número JavaScript. Retorna NaN se vazio/ inválido.
   */
  function parseBrazilianNumber(rawValue) {
    if (typeof rawValue !== "string") return NaN;
    var value = rawValue.trim();
    if (value === "") return NaN;

    // Remove tudo que não seja dígito, vírgula, ponto ou sinal de menos.
    value = value.replace(/[^0-9,.\-]/g, "");

    var hasComma = value.indexOf(",") !== -1;
    var hasDot = value.indexOf(".") !== -1;

    if (hasComma && hasDot) {
      // Formato "9.000,50": ponto é separador de milhar, vírgula é decimal.
      value = value.replace(/\./g, "").replace(",", ".");
    } else if (hasComma) {
      // Formato "9000,50": vírgula é decimal.
      value = value.replace(",", ".");
    }
    // Se só houver ponto, assume-se que já é decimal (ex.: "9000.5").

    var parsed = parseFloat(value);
    return parsed;
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
    resultPanel.hidden = true;
    resultEmpty.hidden = false;
  }

  function clearError() {
    errorBox.textContent = "";
    errorBox.hidden = true;
  }

  function validate(custosFixos, precoVenda, custoVariavel) {
    if (isNaN(custosFixos) || isNaN(precoVenda) || isNaN(custoVariavel)) {
      return "Preencha os três campos com valores numéricos para calcular o ponto de equilíbrio.";
    }
    if (precoVenda <= 0) {
      return "O preço de venda por unidade precisa ser maior que zero.";
    }
    if (custosFixos < 0) {
      return "Os custos fixos mensais não podem ser negativos.";
    }
    if (custoVariavel < 0) {
      return "O custo variável por unidade não pode ser negativo.";
    }
    if (custoVariavel >= precoVenda) {
      return "O custo variável por unidade precisa ser menor que o preço de venda. Caso contrário, cada venda gera prejuízo e não existe ponto de equilíbrio possível.";
    }
    return null;
  }

  function calculate(custosFixos, precoVenda, custoVariavel) {
    var margemUnitaria = precoVenda - custoVariavel;
    var margemPercentual = margemUnitaria / precoVenda;
    var pontoEquilibrioUnidadesExato = custosFixos / margemUnitaria;
    var pontoEquilibrioUnidadesInteiro = Math.ceil(
      pontoEquilibrioUnidadesExato - 1e-9
    );
    var faturamentoNecessario = custosFixos / margemPercentual;

    return {
      margemUnitaria: margemUnitaria,
      margemPercentual: margemPercentual,
      unidadesExato: pontoEquilibrioUnidadesExato,
      unidadesInteiro: pontoEquilibrioUnidadesInteiro,
      faturamento: faturamentoNecessario,
      precoVenda: precoVenda,
    };
  }

  function renderResult(result) {
    var qtd = result.unidadesInteiro;

    document.getElementById("result-headline").textContent =
      "Seu ponto de equilíbrio é " +
      integerFormatter.format(qtd) +
      (qtd === 1 ? " venda por mês." : " vendas por mês.");

    document.getElementById("result-sub").textContent =
      "Com os valores informados, seu negócio precisa faturar aproximadamente " +
      currencyFormatter.format(result.faturamento) +
      " por mês para cobrir os custos considerados no cálculo.";

    document.getElementById("res-margem-unit").textContent =
      currencyFormatter.format(result.margemUnitaria);
    document.getElementById("res-margem-pct").textContent =
      percentFormatter.format(result.margemPercentual);
    document.getElementById("res-qtd").textContent =
      integerFormatter.format(qtd);
    document.getElementById("res-faturamento").textContent =
      currencyFormatter.format(result.faturamento);

    var roundingNote = document.getElementById("result-rounding");
    var isFractional =
      Math.abs(result.unidadesExato - result.unidadesInteiro) > 1e-6;

    if (isFractional) {
      var faturamentoQtdArredondada = qtd * result.precoVenda;

      roundingNote.hidden = false;
      roundingNote.textContent =
        "O ponto de equilíbrio financeiro teórico, calculado pela fórmula, é " +
        result.unidadesExato.toFixed(2).replace(".", ",") +
        " vendas — mas como não é possível vender uma fração de unidade, a quantidade mínima prática precisa ser arredondada para cima: " +
        integerFormatter.format(qtd) +
        " vendas. Vendendo essa quantidade inteira, o faturamento correspondente é " +
        currencyFormatter.format(faturamentoQtdArredondada) +
        " — um valor diferente do faturamento necessário calculado pela fórmula (mostrado acima), que é o ponto de equilíbrio matemático exato.";
    } else {
      roundingNote.hidden = true;
      roundingNote.textContent = "";
    }

    resultEmpty.hidden = true;
    resultPanel.hidden = false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var custosFixos = parseBrazilianNumber(
      document.getElementById("custos-fixos").value
    );
    var precoVenda = parseBrazilianNumber(
      document.getElementById("preco-venda").value
    );
    var custoVariavel = parseBrazilianNumber(
      document.getElementById("custo-variavel").value
    );

    var errorMessage = validate(custosFixos, precoVenda, custoVariavel);

    if (errorMessage) {
      showError(errorMessage);
      return;
    }

    clearError();
    var result = calculate(custosFixos, precoVenda, custoVariavel);
    renderResult(result);
  });
})();
