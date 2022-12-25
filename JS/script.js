const imgs =document.getElementById('imgs')
const img =document.querySelectorAll("#imgs img");
const leftbtn =document.getElementById("left");
const rightbtn =document.getElementById("right");

let idx =0;

console.log(img);
let interval =setInterval(run,2000);

function run(){

    idx++;
    changeImage();
}
function changeImage(){
    if(idx >img.length-1){
        idx = 0;

    }else if(idx < 0){
        idx =img.length-1;
    }
    imgs.style.transform = `translatex(${idx*-500}px)`;
}

leftbtn.addEventListener('click',()=>{
    idx--;
    changeImage();
    resetInterval();

});
rightbtn.addEventListener('click',()=>{
    idx++;
    changeImage();
    resetInterval();

});

function resetInterval(){
    clearInterval(interval);
    interval =setInterval(run,2000);
}