async function getAdvice() {
  const resposta = awaitfetch("https://api.adviceslip.com/advice");

  //console.log(resposta)

  const data = await resposta.json();
  //console.log(data)
}

getAdvice();
