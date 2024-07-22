//from first youtuber

let counter = 0;

function getData() {
  console.log("fetching data " + counter);
  counter++;
}


function myDebounce(callback, delay){

    let timer ;

    return function (...args){
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
          callback()
        }, delay)
    }


}
const Betterfunction = myDebounce(getData,1000)

//second youtuber


const btn = document.querySelector(".increment_btn");

const throttle_btn = document.querySelector(".increment_throttle_btn");

const btnPress = document.querySelector(".increment_pressed");

const count = document.querySelector(".increment_count");

const countThrollte = document.querySelector(".increment_throttle");

var pressedCount = 0;

var triggerCount = 0;

let throttleCount = 0;

const  throttleCountfn = _.throttle(()=> {
  countThrollte.innerHTML = ++throttleCount;
  console.log(`the throttle count is ${throttleCount}`)
}, 5000)

const debouncedCount = _.debounce(()=>{

        count.innerHTML = ++triggerCount;
}, 800)

btn.addEventListener("click",()=> {
    btnPress.innerHTML = ++pressedCount;

    debouncedCount();

})


throttle_btn.addEventListener("click", ()=> {
    throttleCountfn();
})



