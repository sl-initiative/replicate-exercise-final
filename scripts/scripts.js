function makeHeaderPink() {
     let pink = document.getElementById("pink");
     pink.style.color = "pink";
}

function changeToBye() {
     let helloByeValue = document.getElementById("hello-bye");

     if (helloByeValue.innerHTML == "Hello") {
          helloByeValue.innerHTML = "Bye";
     } else {
          helloByeValue.innerHTML = "Hello";
     }
}
