
const lefts=document.querySelector('.lefta');
const rights=document.querySelector('.righta');
const menu=document.querySelector('.menu-bar');
const rightss=document.querySelector('.right');
const ones=document.querySelector('.ones');
const twos=document.querySelector('.twos');
const threes = document.querySelector('.threes');
function left(){
    const images=document.querySelectorAll('.dec');
    document.querySelector('.gallery').appendChild(images[0]);

}
function right(){
    const images=document.querySelectorAll('.dec');
    document.querySelector('.gallery').prepend(images[images.length-1]);
}
function toogle(){
    rightss.classList.toggle("vissible");
    if(rightss.classList.contains('vissible')){
    ones.style.transform="rotate(130deg)";
    threes.style.display="none";
    twos.style.transform="rotate(-130deg) translateX(4px) translateY(6px)";
    }
    else{
        ones.style.transform="rotate(0deg) translateY(0px)";
        twos.style.transform="rotate(0deg) translateY(0PX)";
        threes.style.display="block";

    }



}
