const text = "AI/ML Engineer & Software Developer";

let i = 0;

function typing(){

if(i < text.length){

document.querySelector('.typing').textContent += text.charAt(i);

i++;

setTimeout(typing,70);

}

}

window.onload = typing;

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveals.forEach(reveal=>{

const windowHeight = window.innerHeight;
const revealTop = reveal.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){
reveal.classList.add('active');
}

});

});