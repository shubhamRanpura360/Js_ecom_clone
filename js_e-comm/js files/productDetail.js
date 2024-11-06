import products from '../api/products.json';
import { addToCart } from './addToCart';


const paras = new URLSearchParams(window.location.search)
const productId = paras.get('id');

const product = products.find(p => p.id === parseInt(productId));

if (product) {
    document.querySelector("#productImage").src = product.image;
    document.querySelector("#productImage").alt = product.name;
    document.querySelector("#productName").textContent = product.name;
    document.querySelector("#productDescription").textContent = product.description;
    document.querySelector("#productCategory").textContent = `Category: ${product.category}`;
    document.querySelector("#productbrand").textContent = `Brand: ${product.brand}`;
    document.querySelector("#productPrice").textContent = `Price: ₹${product.price}`;
    document.querySelector("#productStock").textContent = `Stock: ${product.stock}`;
    // document.querySelector("#thumbnail1").src = product.childImage1;
    // document.querySelector("#thumbnail2").src = product.childImage2;
    // document.querySelector("#thumbnail3").src = product.childImage3;
    // document.querySelector("#thumbnail5").src = product.childImage5;
   


    // Render child images using array.map()

     const imageContainer = document.querySelector(".img")

     product.childImages.map( (imgsrc,index) =>{

        const imageElement = document.createElement('img')
        imageElement.src = imgsrc;
        imageElement.alt = `img${index+1}`;
        console.log(imageElement);
        imageContainer.appendChild(imageElement);

        imageElement.addEventListener( 'click' , () =>{
            document.querySelector("#productImage").src = imgsrc;
        });
        
     });
   
     
 

    //  const images = document.querySelectorAll(".thumbnail");
    //  console.log(images);
     
     
    //  images.forEach(thumbnail => {
    //      thumbnail.addEventListener("click", () => {
    //          document.querySelector("#productImage").src = thumbnail.src;
    //      });
    //  });





}

 // Render accordion for product details

 const accordionContainer = document.querySelector('#accordion-container');
 const template = document.querySelector('#accordion-template');


 product.details.forEach((details, index) => {

     const clone = document.importNode(template.content, true);
     
     clone.querySelector('.number').textContent = index + 1; 
     clone.querySelector('.title').textContent = product.titles[index];
     clone.querySelector('.description').textContent = product.About; 
     
     const detailsList = clone.querySelector('.details-list');
     details.forEach(detail => {
         const li = document.createElement('li');
         li.textContent = detail;
         detailsList.appendChild(li);
     });
     
     accordionContainer.appendChild(clone);
 });

    //  toggle button when click 
    
     const ourItemDiv = document.getElementsByClassName("item")
     const openIcon = document.getElementsByClassName("iconopen")
     const closeIcon = document.getElementsByClassName("iconclose")
     console.log(ourItemDiv);
        
 
 Array.from(ourItemDiv).forEach((item, index) => {
     closeIcon[index].style.display = "none";
     item.addEventListener('click', () => {
     const result = item.classList.toggle('active');
 
        if(result){
         closeIcon[index].style.display = "block";
         openIcon[index].style.display = "none";
        } else{
         closeIcon[index].style.display = "none";
         openIcon[index].style.display = "block";
        }
      
     });

     
 });

 document.querySelector("#addToCartButton").addEventListener('click',()=>{
    document.querySelector('#showdetails-section').scrollIntoView({
        behavior:"smooth"
    })
    console.log(addToCartButton);
    


 })
 



