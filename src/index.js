import './sass/main.scss';
var throttle = require('lodash.throttle');
const refs = {
    form: document.querySelector(".form"),
    textarea: document.querySelector(".textarea"),
    input:document.querySelector(".input")
}

const formData ={}
refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', onFormData);

// populateInput();
populateTextarea();
let strFormData = "";
function onFormData(e) {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    strFormData = JSON.stringify(formData);
    console.log(strFormData);
    localStorage.setItem('feedback', strFormData);

}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback');
}
// function onTextareaInput(e) {
//     const message = e.target.value;
//     localStorage.setItem("feedback",message)

// }
function populateTextarea() {
    
    const savedMassage = localStorage.getItem('feedback');
    console.log(savedMassage);
    if (savedMassage) {
        refs.textarea.value = savedMassage;
    }
}
// function populateInput() {
//     const saveName = localStorage.getItem('feedback');
//     if (saveName) {
//         refs.input.value = saveName;
//     }
// }