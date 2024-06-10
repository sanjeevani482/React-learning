const basket1=
document.querySelector(".basket-1 span");

const basket2=
document.querySelector(".basket-2 span");

const left_arrow=
document.querySelector(".left-arrow")
const right_arrow=
document.querySelector(".right-arrow")

left_arrow.addEventListener("click", () => {
    console.log('basket1.innerText', basket1.innerText);
    if(parseInt(basket1.innerText) < 100 && parseInt(basket2.innerText) !== 0)
        {

            basket2.innerText--;
            basket1.innerText++;
            
       }
})

right_arrow.addEventListener("click", () => {
    console.log('basket2.innerText', basket2.innerText);
    if(parseInt(basket2.innerText) < 100 && parseInt(basket1.innerText) !== 0)
        {

            basket1.innerText--;
            basket2.innerText++;
            
       }
})