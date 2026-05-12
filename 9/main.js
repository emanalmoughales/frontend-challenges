const form = document.getElementById('form');
const lable = document.querySelector('.email_lable')
const input = document.querySelector('.email_input')
const success = document.querySelector('.success_message')
const container = document.querySelector('.container')
const userEmail = document.querySelector('.userEmail')
const Dismiss_button = document.querySelector('.Dismiss_button')
function validateEmail(email) {
    const isValidEmail = /^\S+@\S+\.\S+$/
    if (!email || !isValidEmail.test(email)) {
        lable.classList.add('error');
        input.classList.add('error');
        return false;
    }
    lable.classList.remove('error');
    input.classList.remove('error');

    return true;
}
const handleSubmit = (e) => {
    e.preventDefault();
    const emaildata = Object.fromEntries(new FormData(e.target));
    const validEmail = validateEmail(emaildata.email)
    if (validEmail) {
        success.classList.add('active');
        container.classList.add('hidden');
        userEmail.innerHTML = emaildata.email;
    }
    console.log(emaildata)
};

form.addEventListener("submit", handleSubmit);
Dismiss_button.addEventListener("click", () => {
    container.classList.remove('hidden');
    success.classList.remove('active');
    input.value = "";

})