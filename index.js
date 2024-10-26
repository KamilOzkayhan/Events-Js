function show() {
    alert("Hi There");
};

function doSomething() {
    alert("When the page loaded show me!");
}


window.onload = function() {
    // Example: Changing the text of an element
    document.getElementById("myElement").innerText = "Page Loaded!";
 };
 
 function change() {
    var x =document.getElementById("name");
    x.value = x.value.toUpperCase();
 }


let button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Clicked button!');
});

function changeColor(element) {
    element.style.color = "red";
};

function resetColor(element) {
    element.style.color = "purple";
}

function mouseDown() {
    document.getElementById("status").innerHTML = "What is going on!!"
};

function mouseUp() {
    document.getElementById("status").innerHTML = "Restard again!"
}

function handleBlur() {
    alert("Please keep going write your name")
}

function handleFocus() {
    document.getElementById("message").textContent = "Input field is focused!";
}