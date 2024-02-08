const product = [
    {
    id: 0,
    image: "resource/b1.jpg",
    title: "Nation of Space",
    price: 399,
  },
  {
    id: 1,
    image: "resource/b2.jpg",
    title: "The Numeric Stealth",
    price: 499,
  },
  {
    id: 2,
    image: "resource/b6.jpg",
    title: "THE RUSTY WORLD",
    price: 899,
  },
 
  {
    id: 4,
    image: "resource/b8.png",
    title: "WRITE ON TECH",
    price: 799,
  },
  {
    id: 5,
    image: "resource/a1.jpg",
    title: "STARTUP BUISNESS",
    price: 499,
  },
  {
    id: 6,
    image: "b7.jpg",
    title: "The Emerald saphire",
    price: 150,
  },
  {
    id: 7,
    image: "b8.jpg",
    title: "The Emerald saphire",
    price: 150,
  },
  {
    id: 8,
    image: "b9.jpg",
    title: "The Emerald saphire",
    price: 150,
  },
  {
    id: 9,
    image: "b10.jpg",
    title: "The Emerald saphire",
    price: 150,
  },
  {
    id: 10,
    image: "b11.jpg",
    title: "The Emerald saphire",
    price: 150,
  },
];

const categories = [...new Set(product.map((item) => item))];

let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return `
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='button'>
          <p>${title}</p>
          <h2> ₹ ${price}.00</h2>
          <button onclick='addToCart(${i++})'>Add to cart</button>
        </div>
      </div>`;
  })
  .join('');

var cart = [];

function addToCart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

function displayCart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "₹ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        total += price;
        document.getElementById("total").innerHTML = "₹" + total + ".00";
        return `
          <div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}.00</h2>
            <i class="fas fa-trash-alt" onclick='delElement(${j})'></i>
          </div>`;
      })
      .join('');
  }
}