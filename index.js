let foodItems = document.querySelectorAll("#foodItems input");
let status = document.querySelector("#status");
let imageContainer = document.querySelector("#imageContainer");
let logo = document.getElementById("logo");
let orderIdDisplay = document.getElementById("orderId");

let orders = {};

function orderFood() {
    let selectedFood = document.querySelector("#foodItems input:checked");
    
    if (!selectedFood) {
        alert("Please select a food item.");
        return;
    }

    let h1 = document.createElement("h1");
    h1.innerText = "Just a second 👨‍🍳";
    status.innerHTML = "";
    status.append(h1);

    logo.style.display = "none";

 
    let orderId = generateOrderId();
    orderIdDisplay.innerText = `Order ID: ${orderId}`;

    orders[orderId] = {
        foodName: selectedFood.value,
        imageSrc: getImageSrc(selectedFood.value),
    };

    displayFoodImage(orders[orderId]);

    h1.innerText = `${selectedFood.value} is ordered successfully 🥳🥳🥳`;
    h1.style.fontSize = "25px";
}

function generateOrderId() {
    return new Date().getTime(); 
}

function getImageSrc(foodName) {
    let images = {
        "Burger": "https://sun9-68.userapi.com/c627629/v627629237/4a1d4/mj7kkiN1y18.jpg",
        "Momos": "https://bitemeup.com/wp-content/uploads/2021/06/Untitled-design-14-4.png",
        "Butter chicken": "https://i.pinimg.com/originals/d6/0f/eb/d60febb66e08201a40b32c382d1d7d8e.jpg",
        "Pizza": "https://image.winudf.com/v2/image/Y29tLnRhc3R5Zm9vZHMucGl6emFfc2NyZWVuXzNfMTUwODE4NDk2M18wNDU/screen-3.jpg?fakeurl=1&type=.jpg",
        "Hot dog": "https://recipepress.inspirythemes.com/wp-content/uploads/2017/01/hotdog-1.jpg",
        "Chicken Biryani": "https://bitemeup.com/wp-content/uploads/2019/04/htzpmwbmoklojshm4oyx.jpg",
    };
    return images[foodName];
}

function displayFoodImage(order) {
    let image = document.createElement("img");
    image.src = order.imageSrc;
    image.alt = order.foodName;

    image.style.width = "900px";
    image.style.height = "330px";
    image.style.borderRadius = "15px";
    image.style.marginLeft = "10px";

    imageContainer.innerHTML = "";
    imageContainer.append(image);
}

function resetForm() {
    document.querySelector("#foodItems input:checked").checked = false;
    status.innerHTML = "";
    imageContainer.innerHTML = "";
    orderIdDisplay.innerText = "";

    logo.style.display = "block";
}

