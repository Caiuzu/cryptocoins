import {API_KEY} from 'env'

// Api Key
let apikey = {key: API_KEY};

// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })
    .then((api) => {
        console.log(api);
        let texto = "";
        // Get 10 coins and symbols
        for (let i = 0; i < 10; i++) {
            //Show API information
            texto = texto + `
                  
                    <div class="media">
                        <img src="assets/img/coin.png" class="align-self-center mr-3" alt="coin" width="65" height="65">
                        <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol} | Ranking: ${api.data[i].rank}</p>
                        </div>
                    </div>
                    
                    `;

            document.getElementById("coins").innerHTML = texto;
        }
    }).catch((error) => {
    console.error(error.message);
});