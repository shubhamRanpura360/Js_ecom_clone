import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartvalue } from "./updateCartValue";


export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter( (curProd) => curProd.id !== id);  

       //update the localstring after removing the item  
       localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
       
    //    to remove the div on click
       let removeDiv = document.getElementById(`card${id}`);
      
       if(removeDiv){
        removeDiv.remove();
      //   show toast when product added to the cart
      showToast("delete", id);
       }
    updateCartvalue(cartProducts); 
};
      