const submit=document.querySelector('#submit');
const email=document.querySelector('.nav')
submit.addEventListener('click', change)
function change(){
    email.innerHTML='Thank you'
    email.style.colour=yellow;
    console.log("Thankou")
}
