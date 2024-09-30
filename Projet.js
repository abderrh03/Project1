let count = 0;
const button = document.getElementById("increment");
const textHolder = document.getElementById("count");
textHolder.innerHTML = count;

button.addEventListener("click", function() {
    textHolder.innerHTML = ++count;
})
