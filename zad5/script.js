function changeTheme() {
    const theme = document.getElementById("theme-style");

    if (theme.href.includes("red.css")) {
        theme.href = "green.css";
    } else {
        theme.href = "red.css";
    }
}

function toggleSkills() {
    let section = document.getElementById("skills");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let valid = true;

        let name = document.getElementById("name").value.trim();
        let surname = document.getElementById("surname").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        document.querySelectorAll("small").forEach(el => el.textContent = "");
        document.getElementById("successMessage").textContent = "";

        const letters = /^[A-Za-zÀ-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż]+$/;
        const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === ""){
            document.getElementById("nameError").textContent = "Podaj imię";
            valid = false;
        } else if(!letters.test(name)){
            document.getElementById("nameError").textContent = "Imię bez cyfr";
            valid = false;
        }

        if(surname === ""){
            document.getElementById("surnameError").textContent = "Podaj nazwisko";
            valid = false;
        } else if(!letters.test(surname)){
            document.getElementById("surnameError").textContent = "Nazwisko bez cyfr";
            valid = false;
        }

        if(email === ""){
            document.getElementById("emailError").textContent = "Podaj e-mail";
            valid = false;
        } else if(!mail.test(email)){
            document.getElementById("emailError").textContent = "Niepoprawny e-mail";
            valid = false;
        }

        if(message === ""){
            document.getElementById("messageError").textContent = "Podaj wiadomość";
            valid = false;
        }

        if(valid){
            document.getElementById("successMessage").textContent =
            "Formularz poprawnie wypełniony!";
        }
    });

});