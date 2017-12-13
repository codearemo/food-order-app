// Creating an array that would populate the meals in store
// pps => price per spoon
const meals = [
  {
    Id: 'UE9hubeiw9U9W',
    food: "Rice",
    pps: 50,
    qty: "Spoon",
    image: "data:image/jpeg;base64,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",
    qtyOrType: [1,2,3,4],
    rgb: "rgba(255,69,0, 0.4), rgba(255,69,0,0.05)"
  },
  {
    Id: '9fhjwUBGU39jw',
    food: "Beans",
    pps: 30,
    qty: "Spoon",
    image: "https://nutritionfacts.org/app/uploads/2013/12/NF-Dec06-Phytates-for-the-Prevention-of-Osteoporosis.jpg",
    qtyOrType: [1,2,3],
    rgb: "rgba(0, 0, 255, 0.4), rgba(0, 0, 255, 0.05)"
  },
  {
    Id: 'hbf82H89UFBU',
    food: "Dodo",
    pps: 50,
    qty: "Slice",
    image: "http://areachops.com/wp-content/uploads/2017/04/fried-plantain-dodo.jpg",
    qtyOrType: [1,2,3,4],
    rgb: "rgba(255, 255, 0, 0.4), rgba(255, 255, 0, 0.05)"
  },
  {
    Id: 'fiw284u3giwi',
    food: "Meat",
    pps: 100,
    qty: "Piece",
    image: "http://cdn.cnn.com/cnnnext/dam/assets/150924120843-01-two-degrees-beef-exlarge-169.jpg",
    qtyOrType: [1,2,3],
    rgb: "rgba(128, 0, 128, 0.4), rgba(128, 0, 128, 0.05)"
  },
  {
    Id: '3ig584u2fisi',
    food: "Chicken",
    pps: 100,
    qty: "Piece",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZL5x_FqVxM6M42XA8g61-SrAqKAPJ0MFI1MeWGUj_-pIHfJIa",
    qtyOrType: [1,2,3],
    rgb: "rgba(255, 165, 0, 0.4), rgba(255, 165, 0, 0.05)"
  }
];

// Array that holds the order 
let order = [];

// Populating the webpage with the data of the array
document.querySelector("#my-tabs").innerHTML = 
                        `<div id="tabs-hold">
                            <ul>
                                ${ meals.map(meal => `
                                    <li>
                                        ${ `
                                        <div class="tabs" id="tab1" style="background:linear-gradient(${meal.rgb}), url(${meal.image}); background-size: cover; background-position: bottom; background-repeat: no-repeat;">
                                          <h3>${meal.food}</h3>
                                        </div>
                                        <div id="tab1-rate">
                                          <div id="pricing">
                                            <div>
                                            <h2>#<span id="each-ppt">${meal.pps}</span></h2>
                                            <p>Per <span id="qty">${meal.qty}</span></p>
                                            </div>
                                            <div>
                                            <form>
                                                <select class="form-control" name="amount" id="amt">        
                                                    ${
                                                        meal.qtyOrType.map(qot =>`
                                                            <option value=${qot} style="">${qot}</option>
                                                        `)
                                                    }    
                                                    </select>
                                                <input type="button" data-Id=${meal.Id} id="submit" value="Add" class="btn btn-success">
                                            </form>
                                            </div>
                                        </div>
                                        <div id="price">
                                            <h1>#</h1><h1></h1>
                                        </div>
                                        </div>
                                        `}
                                    </li>`
                                    //Joining the separated list ","...If you don't get still remove .join("") and see result
                                ).join("")}
                            </ul>
                        </div>`;




// Grabbing all the meal tabs
const tabs = document.querySelectorAll(".tabs");
// Grabbing each the add button from each tab 
const addButton = document.querySelectorAll("#submit");
// Grabbing all the unique price for each item
let itemPrice = document.querySelectorAll("#price > h1");
// Grabbing all the unique per unit price for each item
const eachPPT = document.querySelectorAll("#each-ppt");
// Grabbing the make order button
const makeOrder = document.querySelector('#order-section > div:nth-child(3) > input[type="button"]');


// Function that runs the slide effect
function openCost(e) {
    // Target the next sibling to toggle their respective next sibling
    // Thus toggle a display class
    e.target.nextElementSibling.classList.toggle("display-status");
    e.target.nextElementSibling.childNodes.forEach(node => {
      // console.log(node);
      // I was getting #text elements while running code line above
      // These #text...I don't know where they came from for now but i had to find a way around
      // Cause they gave me an error while running .classList 
      if (node.nodeName !== "#text") {
          node.classList.toggle("info-status");
      }
    });
}

// Function for display each price when add is clicked
function showAmt(e) {
  // console.log(e);
    meals.forEach(meal => {
      if (e.target.attributes[1].nodeValue === meal.Id) {
        // console.log(e);
          let pricePerItem = e.path[3].childNodes[1].childNodes[1].childNodes[1].childNodes["0"].nodeValue;
          // console.log(e.path[1]["0"].value);
          let totNum = e.path[1]["0"].value;
          e.path[4].childNodes[3].childNodes[2].innerHTML = pricePerItem * totNum;
          if (order.length === 0) {
            order.push({name: e.path[5].childNodes[1].childNodes[1].innerText, price: e.path[4].childNodes[3].childNodes[2].innerHTML});
          }
          else {
            for (let i=0 ; i<order.length ; i++) {
                if (order[i].name == e.path[5].childNodes[1].childNodes[1].innerText) {
                  order[i].price = e.path[4].childNodes[3].childNodes[2].innerHTML;
                  console.log("Help");
                  break;
                }
                else if (order[i].name != e.path[5].childNodes[1].childNodes[1].innerText && i + 1 == order.length) {
                  order.push({name: e.path[5].childNodes[1].childNodes[1].innerText, price: e.path[4].childNodes[3].childNodes[2].innerHTML});
                }
              }
            // order.map(eachOrder => {
              // if (eachOrder.name == e.path[5].childNodes[1].childNodes[1].innerText) {
              //   eachOrder.price = e.path[4].childNodes[3].childNodes[2].innerHTML;
              //   return;
              // }
              // else if (eachOrder.name != e.path[5].childNodes[1].childNodes[1].innerText && order.indexOf(eachOrder) + 1 == order.length) {
              //   order.push({name: e.path[5].childNodes[1].childNodes[1].innerText, price: e.path[4].childNodes[3].childNodes[2].innerHTML});
              // }
          
              
          // });
      }
      document.querySelector('#accumulator').innerHTML = `${order.map(itemOrder => `<div class="cart-items"><h4>${itemOrder.name}<span>:</span></h4><h4><span>#</span>${itemOrder.price}</h4></div>`).join("")}`
      document.querySelector('#order-section > div:nth-child(2) > p:nth-child(2)').innerHTML = `<h4>#</h4><h4>${order.reduce((total, item) => {
                                                                                                    return total + parseInt(item.price);
                                                                                                  }, 0)}</h4>`;
     }

    });    
}

function makeMyOrder() {
  document.querySelector('#wrapper').innerHTML = `<div id="wrapper" style="width:100%; height:100vh; display:flex; justify-content:center; align-items: center">
                                                    <h1>Your Order has been received<i class="fa fa-smile-o" aria-hidden="true"></i></h1>
                                                  </div>`;
}


// Selecting unique functions for each tab
tabs.forEach(tab => {
    tab.addEventListener("click", openCost);
});

// Selecting unique functions for each button
addButton.forEach(btn => {
    btn.addEventListener("click", showAmt);
});

// When make order button is clicked
makeOrder.addEventListener('click', makeMyOrder);