// document
//  .getElementById("loginForm")
//  .addEventListener("submit", function (e) {
//    e.preventDefault();

//    window.location.href = "ceo_profile_card.html";
//  });
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("users.json")
        .then(response => response.json())
        .then(users => {

            const user = users.find(u =>
                u.email === email &&
                u.password === password
            );

            if (user) {
                window.location.href = "ceo_profile_card.html";
            } else {
                document.getElementById("error").innerText =
                    "Invalid Email or Password";
            }

        });
});

