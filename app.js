const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    }

]
const arr=[]
// let arr;
// let items=JSON.parse(localStorage.getItem('cartItems'))
// if (items === null) {
//     arr=[]
    
// }else{
//     arr=items
// }







let div=document.querySelector('#products')
//  console.log(phones);
function renderItems(){
    for (let i = 0; i < phones.length; i++) {
        // console.log(phones[i]);
        // const phones = phones[i];
        div.innerHTML +=` <div class="card" style="width: 18rem;">
            <div class="card-body bg-dark ">
              <h5 class="card-title">${phones[i].brand +" " +  phones[i].model}</h5>
              <p class="card-text">${phones[i].ram +'GB'}</p>
              <p class="card-text">${phones[i].rom +'GB'}</p>
              <p class="card-text">${phones[i].camera +'megapixel'}</p>
              <p class="card-text">${phones[i].price +'Rs'}</p>
    <button onclick="addtocart(${i})" class="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
          

          <hr>
        `
    }
}
renderItems()


function addtocart(index) {
    if (arr.includes(phones[index])) {
        phones[index].qantity =+1
    } else {
        phones[index].qantity=1
        arr.push(phones[index])
    }
    console.log(arr)
    
}
function gotocart(){
    console.log('cart');
    localStorage.setItem('cartItems' ,JSON.stringify(arr))
    window.location='cart.html'
}