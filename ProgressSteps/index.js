const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
let circle = document.querySelectorAll(".circle");
let counter = 0;
//console.log(circle)

function nextPress() {
    next.addEventListener("click", () => {
        if (counter < 3) {
            counter++;
          // prev.removeAttribute("disabled");
          circle[counter].classList.add("active");
          check();
            let count = counter * 30;
            progress.style.width = count + "%";
console.log(circle[counter])


           // console.log(counter);
        }
    });
}

function prevPress() {
    prev.addEventListener("click", () => {
        if (counter > 0) {
            counter--;
           // next.removeAttribute("disabled");
            circle[counter+1].classList.remove("active");
            check();
            
            let count = counter * 30;
            progress.style.width = count + "%";
           // console.log(counter);
        }
    });
}

 function check() {
     if (counter === 0) {
         prev.disabled = true
     } else if (counter === 3) {
         next.disabled = true;
     } else{
         prev.disabled = false;
         next.disabled = false
     }
 }

nextPress();
prevPress();
// check();

