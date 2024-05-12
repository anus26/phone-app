// console.log(
// 'cart'
// );
const cartItems=JSON.parse(localStorage.getItem('cartItems'))
 console.log(cartItems);


const div=document.querySelector('div')

function renderItems (){
    
    if(cartItems !=null && cartItems.length > 0){
    for (let i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
       div.innerHTML += `
       <div class="border border light  rounded m-5 p-3">
         <h5 >Model:${cartItems[i].brand +" " +  cartItems[i].model}</h5>
        <h6>Price:${cartItems[i].ram +'GB'}</h6>
        <h6 >${cartItems[i].rom +'RAM'}</h6>
        <h6 >${cartItems[i].camera +'megapixel'}</h6>
        <h6>${cartItems[i].price +'Rs'}</h6>
        </div>
        `;  
    }
}else{
   console.log('cart empty ha malik')
   div.innerHTML=`
    <h3 class="text-center">NO ITEM FOUND..</h3>    `;
}
 }
renderItems()