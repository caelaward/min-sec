
// declaring variables

let min = document.querySelector('[data-min]');
let sec = document.querySelector ('[data-sec]');
let btn1= document.querySelector('[data-btn1]');


//contstructing function to convert min-sec

function convert1() {
    let results = (parseFloat(min.value)*60)
    sec.value = parseFloat(results.toFixed(2))
}

function convert2() {
    let results = (parseFloat(min.value)/60) 
    sec.value = parseFloat(results.toFixed(2))
}


//adding event listener to button to activate it 

btn1.addEventListener('click', function(){
    min.value  = '';
    sec.value = '';
})


//adding event listener to inputs

    min.addEventListener('input', convert1)
    sec.addEventListener('input', convert2)