function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showProject(project) {

    if (project === "python") {
        document.getElementById("projectMessage").textContent =
            "🐍 This was my first Python application!";
    }

    else if (project === "portfolio") {
        document.getElementById("projectMessage").textContent =
            "🌐 This is the portfolio website I'm building!";
    }
}

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});