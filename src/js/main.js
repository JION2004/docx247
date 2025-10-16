import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, detectCloseElement, buttonToTop, clickScrollToDiv, appendCaptchaASP, menuSpy, stickElementToEdge } from "./helper";
import { header } from "./header";
$(document).ready(function () {
	setBackgroundElement();
	stickElementToEdge();
	menuSpy();
	header.init();
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

window.lozad = observer.observe();

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(event) {
        const headerNav = document.getElementById("header-nav-list");
        if (headerNav && !headerNav.contains(event.target)) {
            const navItems = headerNav.querySelectorAll("li");
            navItems.forEach(item => item.classList.remove("active"));
        }
    });
});