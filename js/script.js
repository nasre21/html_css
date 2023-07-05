// check box

const checkbox = document.getElementById('checked');
const signupButton = document.getElementById('signupButton');


checkbox.addEventListener('change', signUpButton);


function signUpButton() {
if (checkbox.checked) {
signupButton.disabled = false;
} else {
signupButton.disabled = true;
}
}
