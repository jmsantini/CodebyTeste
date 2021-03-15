import axios from "axios";

const lowerPriceApi = "Colocar o link da API AQUI com o valor abaixo de 10"
const highPriceApi = "Colocar o link da API AQUI com o valor acima de 10"

const Api = axios.create({
    baseURL: highPriceApi
})

export default Api;


// lowerPriceApi : API com valor abaixo de R$ 10,00
// highPriceApi: API com valor acima de R$ 10,00
// Após passar a API desejada, colocar a variável da API que for usar na baseURL: