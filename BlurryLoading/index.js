const percentage = document.getElementById("percentage");
const bg = document.getElementById('background')

let count = 0

let int = setInterval(blurring, 50)

function blurring(){
    count++
    if(count > 99){
        clearInterval(int)
    }
    percentage.innerText = `${count}%`
    percentage.style.opacity = scale(count, 25 , 100, 1 , 0)
    bg.style.filter = `blur(${scale(count, 0 , 100 , 30 , 0)}px)`

}
//map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


  //https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers