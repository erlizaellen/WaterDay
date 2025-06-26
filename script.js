function calcularAgua() {
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoDiv = document.getElementById('resultado');

    if (!idade || !peso) {
        resultadoDiv.innerHTML = '⚠️ Por favor, preencha todos os campos';
        resultadoDiv.className = 'resultado show';
        resultadoDiv.style.background = 'linear-gradient(135deg, #ffcccb 0%, #ffb3ba 100%)';
        return;
    }

    let litros;
    if (idade <= 17) {
        litros = peso * 0.04;
    } else if (idade <= 55) {
        litros = peso * 0.035;
    } else if (idade <= 65) {
        litros = peso * 0.03;
    } else {
        litros = peso * 0.025;
    }

    resultadoDiv.innerHTML = `💧 Você deve beber <strong>${litros.toFixed(1)} litros</strong> de água por dia`;
    resultadoDiv.className = 'resultado show';
    resultadoDiv.style.background = 'linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 100%)';
}

// Permite calcular com Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularAgua();
    }
});