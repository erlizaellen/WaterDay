function calcularAgua() {
    let nome = prompt("Digite seu nome:");
    let peso = parseFloat(prompt("Digite seu peso (em kg):"));

    if (isNaN(peso)) {
      alert("Por favor, digite um peso válido.");
      return;
    }

    let m = peso * 0.35;
    alert("Sua cota de água por dia, " + nome + ", é: " + m.toFixed(2) + " litros");
  }
