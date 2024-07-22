function drawNumber() {
    const minInput = document.querySelector(".numberMin");
    const maxInput = document.querySelector(".numberMax");
    const min = Math.ceil(minInput.value);
    const max = Math.floor(maxInput.value);
    const resultDiv = document.getElementById("result");

    if (isNaN(min) || isNaN(max) || min > max) {
        alert("Por favor, insira valores válidos, onde o mínimo é menor que o máximo.");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Esconder os campos de input e mostrar o resultado
    minInput.classList.add("hidden");
    maxInput.classList.add("hidden");
    resultDiv.textContent = `Número sorteado: ${result}`;
    resultDiv.classList.remove("hidden");
}
