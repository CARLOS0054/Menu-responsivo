class MobileNavBar {
    constructor(mobileMenu, navLinks, navList) {
       this.mobileMenu = document.querySelector(mobileMenu);
       this.navLinks = document.querySelector(navLinks);
       this.navList = document.querySelectorAll(navList);
       this.activeClass = "active"; 
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("hey, gay"));
    }
    
    Init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBarInstance = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavBarInstance.Init();
