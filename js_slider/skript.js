const sliderLine = document.querySelector('.slider-line');
let ofset = 0;

document.querySelector('.next').addEventListener("click", ()=>{
    ofset += 200;
    if(ofset > 400){
        ofset = 0;
    };
    sliderLine.style.left = -ofset + 'px';

})




document.querySelector('.back').addEventListener("click", ()=>{
    ofset -= 200;
    if(ofset < -400){
        ofset = 0;
    };
    sliderLine.style.left = ofset + 'px';

})

