import './sass/main.scss';
var throttle = require('lodash.throttle');
const refs = {
    form: document.querySelector(".form"),
    textarea: document.querySelector(".textarea"),
    input:document.querySelector(".input")
}

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', throttle(onFormData,500));

populateInput();
populateTextarea();
function onFormData(e) {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    const strFormData = JSON.stringify(formData);
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
    const parsedMassage = JSON.parse(savedMassage);
    // console.log(parsedMassage);
    if (parsedMassage) {
        refs.textarea.value = parsedMassage.name;
    }
}
function populateInput() {
    const savedMassageName = localStorage.getItem('feedback');
    const parsedMassageName = JSON.parse(savedMassageName);
    // console.log(parsedMassageName);
    if (parsedMassageName) {
        refs.input.value = parsedMassageName.user_name;
    }
}

