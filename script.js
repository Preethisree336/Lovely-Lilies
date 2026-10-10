// ================= NAVBAR =================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ================= VIEW PROJECTS BUTTON =================

const projectButton = document.querySelector(".btn");

projectButton.addEventListener("click", function(event) {

    event.preventDefault();

    const projects = document.querySelector("#projects");

    projects.scrollIntoView({
        behavior: "smooth"
    });

});


// ================= CONTACT BUTTON =================

const contactButton = document.querySelector(".btn.second");

contactButton.addEventListener("click", function(event) {

    event.preventDefault();

    const contact = document.querySelector("#contact");

    contact.scrollIntoView({
        behavior: "smooth"
    });

});


// ================= CONTACT FORM =================

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector(
        'input[placeholder="Your Name"]'
    ).value;

    const email = document.querySelector(
        'input[placeholder="Your Email"]'
    ).value;

    const subject = document.querySelector(
        'input[placeholder="Subject"]'
    ).value;

    const message = document.querySelector(
        "textarea"
    ).value;


    // Check empty fields

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Success message

    alert(
        "Thank you " + name +
        "! Your message has been submitted."
    );


    // Clear form

    form.reset();

});


// ================= PROJECT LINKS =================

const projectLinks = document.querySelectorAll(
    ".project-buttons a"
);

projectLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        alert("Project link will be added soon.");

    });

});