function calcular() {
    var preco = parseFloat(document.getElementById("preco").value);
    var imposto = parseFloat(document.getElementById("imposto").value);
    var juros = parseFloat(document.getElementById("juros").value);
  
    // Verifica se os valores são válidos
    if (isNaN(preco) || isNaN(imposto) || isNaN(juros)) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }
  
    var precoComImposto = preco * (1 + imposto / 100);
    var precoComJuros = precoComImposto * (1 + juros / 100);
    var precoTotal = precoComJuros.toFixed(2);
  
    document.getElementById("preco-total").innerHTML = precoTotal;
  }
  