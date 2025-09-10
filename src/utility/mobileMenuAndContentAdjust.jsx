export const mobileMenuAndContentAdjust = (showMenu) => {
    const mainClass = ".marginTop30";

    const currentClass = document.querySelector(mainClass);
    if (currentClass) {
        if (showMenu) {
            currentClass.classList.add("menu-open");
        } else {
            currentClass.classList.remove("menu-open");
        }
    }
};
