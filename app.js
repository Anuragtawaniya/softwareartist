
function isValid() {
    let border = document.querySelector('.input');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phoneNumber = document.getElementById('phone');
    let msg = document.getElementById('message');

    // checking Name
    if (name.value == "") {
        let message = document.getElementById('nameError');
        message.innerHTML = '<i class="far fa-times-circle alert"></i> Please enter your First Name';
        border.style.border = "1px solid red";

    }
    if (email.value == "") {
        let message = document.getElementById('emailError');
        message.innerHTML = '<i class="far fa-times-circle alert"></i> Please enter your Email';
        border.style.border = "1px solid red";
    }
    if (phoneNumber.value == "") {
        let message = document.getElementById('phoneError');
        message.innerHTML = '<i class="far fa-times-circle alert"></i> Please enter Phone Number';
        border.style.border = "1px solid red";

    }
    if (message.value == "") {
        let message = document.getElementById('messageError');
        message.innerHTML = '<i class="far fa-times-circle alert"></i> Please type your message';
    }
    else {
        let message = document.getElementById('submit');
        message.innerHTML = '<p>Our team will get in touch with you soon. <i class="fas fa-check-circle"></i></p>';
    }

}

function closeBar() {
    document.getElementById("sideBar").style.width = "0";
}
function openBar() {
    document.getElementById("sideBar").style.width = "100%";
}


