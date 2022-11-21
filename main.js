import './style.css'

const logoViteElement = document.getElementsByClassName("logo").item(0);
const userAvatarElement = document.getElementsByClassName('user-avatar').item(0);
//const modalWindowElement = document.getElementsByClassName("modal-window").item(0);
let isMenuOpened = false;
let isSubMenuOpened = false;

userAvatarElement.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (!clickedElement.parentNode.classList.contains("dropdown-menu")) {
        createMenu()
    }
});

function createMenu() {
    if (!isMenuOpened) {
        const menuContainerElement = document.createElement('div');
        menuContainerElement.className = "dropdown-menu";
        for (let i = 0; i < 5; i++) {

            const menuItem = document.createElement('div');
            menuItem.className = "menu-item";
            menuItem.textContent = "Menu-item #" + i;
            if (i === 2) {
                menuItem.addEventListener("click", () => {
                    if (!isSubMenuOpened) {
                        createSubMenu(menuItem);
                        isSubMenuOpened = true;
                    } else {
                        menuItem.removeChild(menuItem.getElementsByClassName("sub-menu").item(0));
                        isSubMenuOpened = false
                    }
                })
                menuItem.classList.add('_expandable');
            }
            menuContainerElement.appendChild(menuItem);
        }
        userAvatarElement.appendChild(menuContainerElement);
        isMenuOpened = true;
    } else {
        userAvatarElement.removeChild(document.getElementsByClassName("dropdown-menu").item(0))
        isMenuOpened = false;
    }
}

function createSubMenu(menuItemElement) {
    const subMenuContainerElement = document.createElement("div");
    subMenuContainerElement.className = "sub-menu";
    for (let i = 0; i < 3; i++) {
        const subMenuItem = document.createElement('div');
        subMenuItem.className = "sub-menu-item";
        subMenuItem.textContent = "SUB_Menu-item #" + i;
        subMenuContainerElement.appendChild(subMenuItem);
    }
    menuItemElement.appendChild(subMenuContainerElement);
}

function openedModalWindow() {
    const modalWindowElement = document.createElement("div");
    modalWindowElement.className = "modal-window";
    document.body.appendChild(modalWindowElement);
    const backDropElement = document.createElement("div");
    backDropElement.className = "back-drop";
    document.body.appendChild(backDropElement);
    backDropElement.addEventListener('click', () => {
        document.body.removeChild(backDropElement);
        document.body.removeChild(modalWindowElement);
    })
}

logoViteElement.addEventListener('click', (event) => {
    openedModalWindow();
})

document.body.addEventListener("click", (event) => {
    console.log(event);
    const clickedSquare = document.createElement("div");
    clickedSquare.className = "red-square";
    document.body.appendChild(clickedSquare);
    clickedSquare.style.left = (event.x - (clickedSquare.clientWidth / 2)) + "px";
    clickedSquare.style.top = (event.y - (clickedSquare.clientHeight / 2)) + "px";
    setInterval(() => {
        console.log("HELLO!");
        clickedSquare.style.top = (clickedSquare.offsetTop + 10) + 'px';
        const screenHeight = document.body.offsetHeight;
        if (clickedSquare.offsetTop >= screenHeight) {
            document.body.removeChild(clickedSquare)
        }

    }, 100)
})
