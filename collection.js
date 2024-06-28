var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productBoxes = productContainer.querySelectorAll(".product-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); // Use toUpperCase() for case insensitive comparison
    
    productBoxes.forEach(function(box) {
        var productName = box.querySelector("p").textContent.toUpperCase();
        
        if (productName.indexOf(enteredValue) > -1) {
            box.style.display = "block"; // Show the product box
        } else {
            box.style.display = "none"; // Hide the product box
        }
    });
});
