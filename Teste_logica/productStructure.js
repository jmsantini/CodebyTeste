const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  let result = {}

  for (let i = 0 ; i < products.length ; i++){
      let product = products[i]
      const splitedProduct = product.split("-")
      
      const color = splitedProduct[0];
      const size = splitedProduct[1];

      if(!result[color]){
        result[color] = {}
      }  
      
      let colorSizes = result[color]

      if(!colorSizes[size]){
        colorSizes[size] = 1
      } else {
        colorSizes[size] ++
      }
  }
  return result;
}