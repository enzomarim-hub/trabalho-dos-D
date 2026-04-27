const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const btnMais = card.querySelector(".mais");
    const btnMenos = card.querySelector(".menos");
    const quantidadeSpan = card.querySelector(".quantidade");
    const precoDiv = card.querySelector(".preco");
    const totalDiv = card.querySelector(".total");

    let quantidade = 0;
    const preco = parseFloat(precoDiv.textContent);

    function atualizar() {
        quantidadeSpan.textContent = quantidade;
        totalDiv.textContent = "Total: R$ " + (quantidade * preco).toFixed(2);
    }

    btnMais.addEventListener("click", () => {
        quantidade++;
        atualizar();
    });

    btnMenos.addEventListener("click", () => {
        if (quantidade > 0) {
            quantidade--;
            atualizar();
        }
    });
});

const finalizarBtn = document.querySelector(".finalizar button");

finalizarBtn.addEventListener("click", () => {
    let totalGeral = 0;
    let totalIngressos = 0;

    cards.forEach(card => {
        const quantidade = parseInt(card.querySelector(".quantidade").textContent);
        const preco = parseFloat(card.querySelector(".preco").textContent);

        totalIngressos += quantidade;
        totalGeral += quantidade * preco;
    });

    if (totalIngressos === 0) {
        alert("Você não selecionou nenhum ingresso.");
        return;
    }

    alert(
        "Ingressos: " + totalIngressos +
        "\nTotal: R$ " + totalGeral.toFixed(2)
    );
});