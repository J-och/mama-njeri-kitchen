JavaScript
document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("phone").value;
    let food = document.getElementById("food").value;
    let quantity = Number(document.getElementById("quantity").value);

    let prices = {
        "Pilau": 350,
        "Ugali & Sukuma": 250,
        "Chapati (2)": 100
    };

    let total = prices[food] * quantity;

    alert(
        "Thank you, " + name + "!\n" +
        "Your order has been received.\n" +
        "Meal: " + food + "\n" +
        "Quantity: " + quantity + "\n" +
        "Total: KES " + total + "\n" +
        "Phone: " + phone
    );

    document.getElementById("orderForm").reset();

});