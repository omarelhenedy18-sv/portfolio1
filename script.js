
    const menuIcon = document.querySelector(".menu_icon");
    const menu = document.querySelector("section nav ul");

    menuIcon.addEventListener("click", function () {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {

            menuIcon.innerHTML =
                '<i class="fa-solid fa-xmark"></i>';

        } else {

            menuIcon.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });
    const menuLinks = document.querySelectorAll("section nav ul li a");

    menuLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            menu.classList.remove("active");

            menuIcon.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


 

 