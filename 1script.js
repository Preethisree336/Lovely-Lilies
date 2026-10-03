// =============================
// SHOP NOW BUTTON
// =============================

const shopButton = document.querySelector(".hero-text button");

shopButton.addEventListener("click", function () {

    document.querySelector(".flowers").scrollIntoView({
        behavior: "smooth"
    });

});


// =============================
// BUY NOW BUTTONS
// =============================

const buyButtons = document.querySelectorAll(".flower-card button");

buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.parentElement;

        const flowerName = card.querySelector("h4").innerText;
        const price = card.querySelector("p").innerText;

        alert(
            flowerName + " selected!\n" +
            "Price: " + price
        );

    });

});


// =============================
// LEARN MORE BUTTON
// =============================

const learnButton = document.querySelector(".about button");

learnButton.addEventListener("click", function () {

    alert(
        "Welcome to Lovely Lilies! 🌸\n\n" +
        "We provide beautiful and fresh flowers " +
        "for every special occasion."
    );

});


// =============================
// CONTACT FORM
// =============================

const form = document.querySelector(".contact form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector(
        '.contact input[type="text"]'
    ).value;

    const email = document.querySelector(
        '.contact input[type="email"]'
    ).value;

    const message = document.querySelector(
        ".contact textarea"
    ).value;


    // Check empty fields

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

        return;
    }


    // Success message

    alert(
        "Thank you, " + name + "! 🌸\n" +
        "Your message has been sent successfully."
    );


    // Clear form

    form.reset();

});


// =============================
// NAVBAR
// =============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const text = link.innerText;

        if (text === "Home") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

        else if (text === "About") {

            document.querySelector(".about").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if (text === "Contact") {

            document.querySelector(".contact").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if (text === "Review") {

            alert("Reviews section coming soon! 🌷");

        }

    });

});