import React, { useEffect, useState } from "react";
import ProductList from "../../components/productList/index";
import Api from "../../services/api";
import "./styles.css"


function Cart() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const prodList = await
                Api.get()
            console.log(prodList)

            setProducts(prodList.data.items);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProducts()
    }, [])

    let renderProductList 
    
    if(products.length === 0) {
        renderProductList = (<h1>Carregando Carrinho ...</h1>)
    } else {
        renderProductList = (
            products.map(product => (
                <ProductList
                    key={product.uniqueId}
                    productImage={product.imageUrl}
                    alt={product.detailUrl}
                    productName={product.name}
                    costPrice={`R$ ${(product.price * 0.01).toFixed(2)}`}
                    salePrice={`R$ ${(product.sellingPrice * 0.01).toFixed(2)}`}
                />
    
            ))
        );

    }

    function getTotal(total, items) {
        return total + items.sellingPrice
    };

    let freeShipping = false;

    let totalAmount = 0;

    if (products.length !== 0) {
        totalAmount = products.reduce(getTotal, 0)
    };

    totalAmount = totalAmount * 0.01;

    if (totalAmount > 10) {
        freeShipping = true
    };

    let showFreeShippingMsg;

    if (freeShipping === true) {
        showFreeShippingMsg = (
            <h3 className="free-shipping">Parabéns, sua compra tem frete grátis!!</h3>
        )
    }

    return (
        <div className="cart">
            <div className="cart-products">
                <header className="cart-products-header">
                    <h2>Meu Carrinho</h2>
                </header>
                <main className="cart-products-detail">
                    {renderProductList}
                </main>
                <div className="cart-value">
                    <div>
                        <span>Total </span>
                        <span>R$ {totalAmount}</span>
                    </div>
                    {showFreeShippingMsg}
                </div>
                <footer className="cart-products-footer">
                    <button className="purchase-button">Finalizar Compra</button>
                </footer>
            </div>
        </div>
    )

}



export default Cart;
