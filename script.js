function drawNumber() {
    const minInput = document.querySelector(".numberMin");
    const maxInput = document.querySelector(".numberMax");
    const min = Math.ceil(minInput.value);
    const max = Math.floor(maxInput.value);
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
    const buttonNovoSorteio = document.querySelector(".buttonNovoSorteio");

    if (!minInput.value || !maxInput.value || isNaN(min) || isNaN(max) || min > max) {
        errorDiv.textContent = "Por favor, insira valores válidos, onde o mínimo é menor que o máximo.";
        errorDiv.classList.remove("hidden");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Esconder os campos de input e mostrar o resultado
    minInput.classList.add("hidden");
    maxInput.classList.add("hidden");
    resultDiv.textContent = `${result}`;
    resultDiv.classList.remove("hidden");
    buttonNovoSorteio.classList.remove("hidden");
    errorDiv.classList.add("hidden");
}

function resetForm() {
    const minInput = document.querySelector(".numberMin");
    const maxInput = document.querySelector(".numberMax");
    const resultDiv = document.getElementById("result");
    const buttonNovoSorteio = document.querySelector(".buttonNovoSorteio");

    // Limpar os valores dos campos de input
    minInput.value = '';
    maxInput.value = '';

    // Mostrar os campos de input e esconder o resultado
    minInput.classList.remove("hidden");
    maxInput.classList.remove("hidden");
    resultDiv.classList.add("hidden");
    buttonNovoSorteio.classList.add("hidden");
}
