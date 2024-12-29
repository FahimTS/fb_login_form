
let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let fb_btn = document.querySelector("#fb_btn");

function myCall() {
    let validate = document.querySelector("#validate");

if (!email.value && !password.value) {
        validate.textContent = "দূর মিয়া কিছু লেখেন নাই!";
        validate.style.color = "red";
        validate.style.display = "block";
    }else if(!password.value){
        validate.textContent = "দূর মিয়া Password কে দিবে!";
        validate.style.color = "red";
        validate.style.display = "block";
    }else if(!email.value){
        validate.textContent = "দূর মিয়া Email কে দিবে!";
        validate.style.color = "red";
        validate.style.display = "block";
    }
    else {
        validate.innerHTML = `Wrong credentials <br> Invalid username or password`;
        validate.style.display = "block";
    }
}

fb_btn.addEventListener('click', (event) => {
    event.preventDefault()
    myCall();
});
