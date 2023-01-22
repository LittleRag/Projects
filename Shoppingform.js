const groceries = document.getElementsByClassName("groceries")[0];
const eraser = document.getElementById("eraser");
const AllItems = document.getElementById("allItems");
const deletebutton = document.getElementById("button");
const userInput = document.getElementById("userInput");
eraser.addEventListener("click", function () {
   AllItems.innerHTML = " ";

})


button.addEventListener("keydown", function(event) {
   if (event.key =="Del")
      pop(AllItems);
})


userInput.addEventListener("keydown", function (event) {

   if (event.key == "Enter")
      addItem();
})

function addItem() {

   var h2 = document.createElement("h2");
   h2.innerHTML = "- " + userInput.value;

   h2.addEventListener("click", function () {
      h2.style.textDecoration = "line-through";
   })

   AllItems.insertAdjacentElement("beforeend", h2);
   userInput.value = "";

}







