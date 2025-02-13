const header = document.querySelector(".header"),
    burgerCheckbox = document.querySelector(".burger-checkbox"),
    navigation = document.querySelector(".navigation"),
    navigationList = document.querySelector(".navigation__list"),
    listItems = document.querySelectorAll(".list__item");


if (window.scrollY > 40) {
    header.classList.add("header-color");
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("header-color");
    } else {
        header.classList.remove("header-color");
    }
});


burgerCheckbox.addEventListener("change", () => {
    navigation.classList.toggle("on");
    navigationList.classList.toggle("list-mobile");
});


if (window.screenX < 764) {
    listItems.forEach((element) => {
        element.addEventListener("click", () => {
            burgerCheckbox.checked = false;
            navigation.classList.remove("on");
            navigationList.classList.remove("list-mobile");
        });
    });
}
