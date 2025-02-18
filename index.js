let count = document.querySelector("#count")
let increment = document.querySelector("#increment")
let reset = document.querySelector("#reset")

let tiro = 0;
increment.addEventListener("click", () => {
  
    tiro++;
    count.innerHTML = tiro

})

reset.addEventListener("click", () => {
    tiro = 0;
    count.innerHTML = tiro

})



