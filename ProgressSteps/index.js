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
            check();
            circle[counter].classList.add("active");
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
            check();
            circle[counter+1].classList.remove("active");
            
            let count = counter * 30;
            progress.style.width = count + "%";
           // console.log(counter);
        }
    });
}

// function check() {
//     if (circle[counter] === 0) {
//         prev.disabled = true
//     } else if (circle[counter] === 4) {
//         next.disabled = true;
//     } else{
//         prev.disabled = false;
//         next.disabled = false
//     }
// }

nextPress();
prevPress();
