const menuTitle = document.querySelector(".menu-title");
const menuList = document.querySelector(".menu-list");
const arrow = document.querySelector(".arrow");

menuTitle.addEventListener("click", function(event) {
    menuList.classList.toggle("open");
    event.stopPropagation();
    arrow.classList.toggle("open");
});

document.addEventListener("click", function() {    
    menuList.classList.remove("open");
    arrow.classList.remove("open"); 
});
