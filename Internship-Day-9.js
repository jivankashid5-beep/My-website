function showPopup() {
    let name = document.getElementById("name").value;

    console.log(name);
    alert("Hello" + name + "!");



}

function checkNumber() {
    let number = document.getElementById("number").value;
    console.log(number);

    if (number % 2 == 0) {
        alert("The number is even");
    }
    else {
        alert("The number is odd");
    }
}

document.getElementById("changeColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
    document.body.style.color = "brown";
});