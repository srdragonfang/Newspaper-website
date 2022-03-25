const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-btn-open");
const navClose = document.getElementById("nav-btn-close");
if (navOpen) {
    navOpen.addEventListener("click", () => {
        navMenu.style.bottom = "0";
        navOpen.style.display = "none";
        navClose.style.display = "flex";
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.style.bottom = "-100%";
        navOpen.style.display = "flex";
        navClose.style.display = "none";
    });
}
// ==============================
const navLink = document.querySelectorAll(".menu__item");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.style.bottom = "-100%";
    navOpen.style.display = "flex";
    navClose.style.display = "none";
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});
/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
// --------------
const catagoryNews = document.getElementById("catagory-news");
const btnNews = document.getElementById("news-btn");
const btnNewsClose = document.getElementById("news-btn-close");
if (btnNews) {
    btnNews.addEventListener("click", () => {
        catagoryNews.style.display = "flex";
        btnNews.style.display = "none";
        btnNewsClose.style.display = "flex";
    });
}
if (btnNewsClose) {
    btnNewsClose.addEventListener("click", () => {
        catagoryNews.style.display = "none";
        btnNews.style.display = "flex";
        btnNewsClose.style.display = "none";
    });
}
const catagoryArts = document.getElementById("catagory-arts");
const btnArts = document.getElementById("arts-btn");
const btnArtsClose = document.getElementById("arts-btn-close");
if (btnArts) {
    btnArts.addEventListener("click", () => {
        catagoryArts.style.display = "flex";
        btnArts.style.display = "none";
        btnArtsClose.style.display = "flex";
    });
}
if (btnArtsClose) {
    btnArtsClose.addEventListener("click", () => {
        catagoryArts.style.display = "none";
        btnArts.style.display = "flex";
        btnArtsClose.style.display = "none";
    });
}
const catagoryLiving = document.getElementById("catagory-living");
const btnLiving = document.getElementById("living-btn");
const btnLivingClose = document.getElementById("living-btn-close");
if (btnLiving) {
    btnLiving.addEventListener("click", () => {
        catagoryLiving.style.display = "flex";
        btnLiving.style.display = "none";
        btnLivingClose.style.display = "flex";
    });
}
if (btnLivingClose) {
    btnLivingClose.addEventListener("click", () => {
        catagoryLiving.style.display = "none";
        btnLiving.style.display = "flex";
        btnLivingClose.style.display = "none";
    });
}
const catagoryOpinion = document.getElementById("catagory-opinion");
const btnOpinion = document.getElementById("opinion-btn");
const btnOpinionClose = document.getElementById("opinion-btn-close");
if (btnOpinion) {
    btnOpinion.addEventListener("click", () => {
        catagoryOpinion.style.display = "flex";
        btnOpinion.style.display = "none";
        btnOpinionClose.style.display = "flex";
    });
}
if (btnOpinionClose) {
    btnOpinionClose.addEventListener("click", () => {
        catagoryOpinion.style.display = "none";
        btnOpinion.style.display = "flex";
        btnOpinionClose.style.display = "none";
    });
}