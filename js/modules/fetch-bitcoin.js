export default function initFetchBitcoin() {}

// https://blockchain.info/ticker

fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4);
  })
  .catch((erro) => {
    // eslint-disable-next-line no-undef
    console.log(Erro(erro));
  });
