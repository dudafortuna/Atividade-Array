produtos = [
{nome:"Samsung S22", preço: 5644.55},
{nome:"Samsung S21", preço: 2500.66},
{nome:"Samsung A71", preço: 1987.67},
{nome:"Iphone 8", prelo: 2300.51},
{nome:"Iphone 8", preço: 2999.32},
{nome:"Iphone 13", preço: 6200.62},
]

/*produtos.push({nome:"Samsung S10", preço:800})
console.table(produtos)
produtos.map((p) => console.log("Preço: " + p.preço))

produtosCaros = produtos.filgter9((p) => p.preço >= 1000)
console.log(produtosCaros)*/

totalProdutos = produtos.map((p) => p.preço).reduce((previous, current) => previous + current)
console.log(totalprodutos.toFixed(2))

totalMuitoCaro = produtos.filyter(p => p.preço > 3000)
                    .map(p +> p.preço)
                    .reduce((previous, current) => previous + current)
console.log(totalMuitoCaro.toFixed(2))