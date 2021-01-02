const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordAgain = document.getElementById("passwordAgain");
const submit = document.getElementById("submit");
const inputs = document.querySelectorAll(".inputs");
const pass2 = document.getElementById("pass2");


class Form {
    constructor(input) {
        this.input = input;
    }

    checkUsername(len, index) {
        if (this.input.value.length > len) {
            inputs[index].classList.add("active");
        } else {
            inputs[index].classList.add("dis");
        }
    }
    validateEmail() {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.input.value.match(mailformat)) {
            inputs[1].classList.add("active");
        } else {
            inputs[1].classList.add("dis");
        }
    }
    checkPassword(password) {
        if (!this.input.value) {
            inputs[3].classList.add("dis");
        } else if (password.value !== this.input.value) {
            inputs[3].classList.add("dis");
            pass2.innerText = `*Password do not match`;
        } else {
            inputs[3].classList.add("active");
        }
    }
}

const newUsername = new Form(username);
const newEmail = new Form(email);
const newPassword = new Form(password);
const newPass = new Form(passwordAgain);

function runForm() {
    inputs.forEach((i) => {
        i.classList.remove("active");
        i.classList.remove("dis");
    });
    newUsername.checkUsername(3, 0);
    newEmail.validateEmail();
    newPassword.checkUsername(6, 2);
    newPass.checkPassword(password);
}

submit.addEventListener("click", () => {
    runForm();
});
