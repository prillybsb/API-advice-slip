async function getAdvice() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");

    if (!resposta.ok) {
      throw new Error("Não foi possível obter o conselho.");
    }

    const data = await resposta.json();

    // Selecione o elemento onde você deseja exibir o conselho (com id "advice")
    const adviceElement = document.querySelector("#advice");

    // Atualize o conteúdo do elemento com o conselho obtido da API
    adviceElement.innerHTML = data.slip.advice;
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

// Botão funcionando

let botaoAdvice = document.querySelector("#get-advice");

botaoAdvice.addEventListener("click", function () {
  getAdvice();
});

// Chame a função getAdvice() inicialmente para obter um conselho quando a página carregar
getAdvice();
