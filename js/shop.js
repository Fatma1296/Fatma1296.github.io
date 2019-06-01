//varibles

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
// cart
let cart = [];

// getting the products
class product {
    asyn getproducts() {
        try {


            let result = await fetch('products.json');
            let data = await result.JSON();

            return data;
        } catch (error) {
            console.log(Error);
        }
    }

}
// display products 
class UI {}

}
showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}
setupAPP() {
    cart = Storage.getcart();
    this.SetCartValues(cart);
    this.populate(cart);
    cartBtn.addEventListener('click,this.ShowCart');
    closeCartBtn.addEventListener('click,this.hideCart');
}
populateCart(cart) {
    cart.forEach(item => this.addCartItem(item));
}
hideCart({
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("ShowCart");
})
//local storage
class storage {

}

document.addEventListener("DOMContentLoaded", () => {
    const ui = newUI();
    const products = new products();


})
