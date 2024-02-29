// let num='1234567890'
// let otp=''
// for(let i=0;i<=4;i++){
//     otp += Math.floor(Math.random()*num.length)
// }
// console.log(otp)


// let carted_product=[]
// let add_to_cart=(product_)


fetch('https://fakestoreapi.com/products').then(res=>res.json())
            .then(json=>{
                console.log(json)
    let product_list=document.querySelector('#fetchapi')

    for(let product of json){
        product_list.innerHTML +=`<div class="col-3 md-3 mt-3">

        <div class="card" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                
              <p class="card-text">
                <h4>${product.title}</h4>
                 
              </p>
    
            
            <div class="d-flex justify-content-between">
            <span>${product.price}</span>
            <span  class=" btn btn-success" id=${product.id} onclic= addtocart()>ADD TO CART</span>
            </div>
            </div>
          </div>
        </div>`

        
    }
      });