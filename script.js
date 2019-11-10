let menuElem = document.getElementById('menu_jquery');
let titleElem = menuElem.querySelector('.title');
        
titleElem.onclick = function() {
 menuElem.classList.toggle('open');
};

let name=document.getElementById("name");
name.addEventListener("input", function (event) {
    if (!name.validity.patternMismatch) {
      name.setCustomValidity("");
    } else {
      name.setCustomValidity("Имя должно быть написанно на русском или английском и содержать в себе только буквы");
    }
  });
let secondname=document.getElementById("secondname");
secondname.addEventListener("input", function (event) {
    if (!secondname.validity.patternMismatch) {
        secondname.setCustomValidity("");
    } else {
        secondname.setCustomValidity("Фамилия должна быть написанна на русском или английском и содержать в себе только буквы");
    }
  });
let fathername=document.getElementById("fathername");
fathername.addEventListener("input", function (event) {
    if (!fathername.validity.patternMismatch) {
        fathername.setCustomValidity("");
    } else {
        fathername.setCustomValidity("Отчество должно быть написанно на русском или английском и содержать в себе только буквы");
    }
  });
  
let email=document.getElementById("email");
email.addEventListener("input", function (event){
    if (!email.validity.patternMismatch) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Адрес почты должен оканчиваться доменным именем. Пример:@gmail.ru");
    }
  });
let password=document.getElementById("number");
password.addEventListener("input", function (event){
    if (!password.validity.patternMismatch) {
        password.setCustomValidity("");
    } else {
        password.setCustomValidity("Номер телефона должен начинаться с +7 и состоять из 11 цифр.");
    }
});
document.getElementById("form").onsubmit = function (evt) {
    localStorage.clear();
    evt.preventDefault();
    console.log(evt);
    let object = {};
    for (let i = 0; i < 5; i++) {
        object[evt.target[i].name] = evt.target[i].value;
    }
    localStorage.setItem("data", JSON.stringify(object));
}
window.onload = function(){
    if(localStorage.getItem("data")){
        let object = JSON.parse(localStorage.getItem("data"));
        let arr = ["name","secondname","fathername","email","number"];
        arr.forEach(element => {
            if(document.getElementById(element))
            document.getElementById(element).value = object[element];
        });
    }
}
