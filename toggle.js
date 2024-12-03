window.addEventListener("DOMContentLoaded", () => {
const menuSection = document.getElementById("folder-section");
const projectsSection = document.getElementById("recent-section");
const detailsSection = document.getElementById("manage-section");

const btn1 = document.querySelector(".navigation__links__home");
const btn2 = document.querySelector(".navigation__links__users");
const btn3 = document.querySelector(".navigation__links__calender");

btn1.addEventListener("click", () => {
    if (window.innerWidth <= 1111) {
        menuSection.style.display = "none";
        projectsSection.style.display = "block";
        detailsSection.style.display = "none";
        projectsSection.style.width = "95%"
    }
});

btn2.addEventListener("click", () => {
    if (window.innerWidth <= 1111) {
        menuSection.style.display = "block";
        projectsSection.style.display = "none";
        detailsSection.style.display = "none";
        menuSection.style.width = "95%";
    }
});

btn3.addEventListener("click", () => {
    if (window.innerWidth <= 1111) {
        menuSection.style.display = "none";
        projectsSection.style.display = "none";
        detailsSection.style.display = "block";
        detailsSection.style.width = "95%";
    }
});

window.addEventListener("resize", function () {

    // menuSection.style.display = "block";
    // projectsSection.style.display = "block";
    // detailsSection.style.display = "block";

    if (window.innerWidth > 1111) {
      menuSection.style.display = "block";
      projectsSection.style.display = "block";
      detailsSection.style.display = "block";
    } 

    else if (window.innerWidth > 990) {
      menuSection.style.display = "none";
      projectsSection.style.display = "block";
      detailsSection.style.display = "block";
    } 

    else if (window.innerWidth > 768) {
      menuSection.style.display = "none";
      projectsSection.style.display = "block";
      detailsSection.style.display = "none";
    } 

    // else {
    //   menuSection.style.display = "none";
    //   projectsSection.style.display = "none";
    //   detailsSection.style.display = "flex";
    // }

    });

});
