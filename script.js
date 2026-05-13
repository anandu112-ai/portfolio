// Typing Effect

const text = "Aspiring AI/ML Engineer | Python Developer | Web Developer";

let i = 0;

function typingEffect(){

if(i < text.length){

document.querySelector('.typing').textContent += text.charAt(i);

i++;

setTimeout(typingEffect,70);

}

}

window.onload = typingEffect;

// Scroll Animation

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll',()=>{

cards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;

const triggerBottom = window.innerHeight / 1.2;

if(cardTop < triggerBottom){
card.style.opacity = '1';
card.style.transform = 'translateY(0px)';
}

});

});

cards.forEach(card=>{
card.style.opacity = '0';
card.style.transform = 'translateY(40px)';
card.style.transition = '0.6s';
});
