import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartvalue } from "./updateCartValue";

// -----------------------------------------------------
// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
// --------------------------------------------------------
getCartProductFromLS();

// ___________________________________________________
// to add the data into localStorage
// ___________________________________________________
   export const addToCart = (event , id , stock)=>{
     let arrLocalStorageProduct = getCartProductFromLS();

   const currentProdElement = document.querySelector(`#card${id}`)

    let quantity = currentProdElement.querySelector(".productQuantity").innerText;

    let price = currentProdElement.querySelector(".productPrice").innerText;
     
    // console.log(quantity, price);
    price = price.replace( "₹" ,'')

    let existingProd = arrLocalStorageProduct.find (  
         (curProd) => curProd.id === id
        );

        if(existingProd && quantity > 1){
           quantity = Number( existingProd.quantity) + Number(quantity); 
           price = Number(price * quantity); 
           let updatedCart = { id , quantity , price};

          updatedCart =  arrLocalStorageProduct.map( (curProd) =>{
            return  curProd.id === id ? updatedCart : curProd;         
           });
           console.log(updatedCart);
           
           localStorage.setItem("cartProductLS", JSON.stringify( updatedCart));
          //  show toast when product added to the cart
           showToast("add" , id);
           
        }

        if (existingProd){
            return false;
        }

    price = Number(price * quantity);
    quantity = Number(quantity)
 
    let updatedCart = { id , quantity , price};
    arrLocalStorageProduct.push(updatedCart)
    localStorage.setItem('cartProductLS', JSON.stringify( arrLocalStorageProduct));

  //    update the cart button value
      updateCartvalue(arrLocalStorageProduct);

        //  show toast when product added to the cart
         showToast("add" , id);

}; 