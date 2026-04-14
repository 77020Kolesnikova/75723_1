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