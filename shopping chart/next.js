let iconCart = document.querySelector(".icon-cart")
let body = document.querySelector("body")
let closeCart = document.querySelector(".close")
let listProductHTML = document.querySelector(".listProduct")
let listCartHTML = document.querySelector(".listCart")
let iconCartSpan = document.querySelector(".icon-cart span")

let listProduct = []
let carts = []

iconCart.addEventListener("click", ()=>{
    body.classList.toggle("showCart")
})
closeCart.addEventListener("click", ()=>{
    body.classList.toggle("showCart")
})

export function addDataToHTML(){
    listProductHTML.innerHTML = ""
    if(listProduct.length > 0){
        listProduct.forEach((product) => {
            let newProduct = document.createElement("div")
            newProduct.classList.add("item")
            newProduct.dataset.id = product.id
            newProduct.innerHTML = `
            <img src=${product.image} alt="">
                <h2>${product.name}</h2>
                <div class="price">$ ${product.price}</div>
                <button class="addCart">
                    Add To Cart
                </button>
            `
            listProductHTML.appendChild(newProduct)
        })
    }
}

listProductHTML.addEventListener("click",(events) =>{
    let positionClick = events.target
    if(positionClick.classList.contains('addCart')){
           let product_id = positionClick.parentElement.dataset.id
           addToCart(product_id)
     }
})

function addToCart(product_id){
    let productInCart = carts.findIndex((value)=> value.product_id == product_id)
if(carts.length <= 0){
    carts = [{
        product__id: product_id,
        quantity: 1
    }]
}else if(productInCart < 0){
    carts.push({
        product__id:product_id,
        quantity: 1
    })
}else{
    carts[productInCart].quantity = carts[productInCart].quantity + 1
}
console.log(carts);
}




function initApp(){
    fetch("./product.json")
    .then((response) => response.json())
    .then((data) => {
         listProduct = data
         addDataToHTML()
    })
   
}
initApp()


function find(x,y){
    if(x,y){
        return x-y
    }
}

console.log(find (10,15));


