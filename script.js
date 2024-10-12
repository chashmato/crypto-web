var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");





const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-VFmogw5uJzhMPCp63v3EQfdd'}
  };
  
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=pkr', options)
    .then(response => response.json())
    .then(response => {
        btc.innerHTML = response.bitcoin.pkr;
        eth.innerHTML = response.ethereum.pkr;
        doge.innerHTML = response.dogecoin.pkr;
    })
    .catch(err => console.error(err));