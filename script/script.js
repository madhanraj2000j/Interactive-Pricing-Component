// elements

const viewsEl = document.getElementById('views');
const costEl = document.getElementById('desk-dollar');
const sliderEl = document.getElementById('price-slider');
const toggleEl = document.getElementById('billing');

// global-variables
let pageViews = ['10k','50k','100k','500k','1M'];
let perMonth = ['8','12','16','24','36'];
let isYearly = false;

console.log(costEl)

function init() {

  sliderEl.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) 0%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;

}

init()
// event-listener


sliderEl.addEventListener('input', function () {
  
  viewsEl.innerText = pageViews[sliderEl.value] ;
  costEl.innerText = perMonth[sliderEl.value];

  updating();
  this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${this.value*25}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;
})



// toggle-input
toggleEl.addEventListener('change', function () {
 
 if (isYearly==false){
  isYearly=true
 }else{
  isYearly=false
 }
 updating();
})


// update value 25% discount
function updating(){
if (isYearly){
  costEl.innerText = perMonth[sliderEl.value] * 0.75;
}else{
  costEl.innerText = perMonth[sliderEl.value];
}

  }