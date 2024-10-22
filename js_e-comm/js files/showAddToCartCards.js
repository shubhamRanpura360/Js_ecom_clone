import products from "../api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter( ( currProd) =>{
   
   return cartProducts.some( (curElem)=> curElem.id === currProd.id);
   
});
console.log(filterProducts);
// -----------------------------------------------------
// to update the addToCart page
// --------------------------------------------------------
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () =>{
    filterProducts.forEach( (currProd) =>{
        const{  category, id, image, name, price, stock} = currProd;

        let productClone = document.importNode(templateContainer.content,true);

        const  lSActualData = fetchQuantityFromCartLS( id , price);

        productClone.querySelector("#cardValue").setAttribute('id',`card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent =name;
        productClone.querySelector(".productImage").src = image;
        
        productClone.querySelector(".productQuantity").textContent =lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;

        productClone.querySelector(".remove-to-cart-button").addEventListener('click' , () => removeProdFromCart(id))
    
     //   handel increment and decrement button
         
        productClone.querySelector(".stockElement").addEventListener('click',(event) => {
           incrementDecrement(event ,id , stock , price)
        });

      cartElement.appendChild(productClone);
    });
};

// -----------------------------------------------------
// Showing the cartProducts
// --------------------------------------------------------
 showCartProduct();

//  _____________________________________________
//  calculating the card total in our cartProducts page
// _______________________________________________

  updateCartProductTotal();