 document.getElementById("year").textContent = new Date().getFullYear();
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");
    const toggle = document.getElementById("theme-toggle");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            toggle.textContent = "🌞";
            toggle.title = "Light Mode";
        } else {
            toggle.textContent = "🌙";
            toggle.title = "Dark Mode";
        }
    });

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        nav.classList.toggle("menu-open");

    });
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });