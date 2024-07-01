const toggleMenu = function() {
  const menuButton = document.querySelector("#menu") as HTMLImageElement;
  const closeMenu = document.querySelector("#close-menu") as HTMLInputElement;
  const menu = menuButton.nextElementSibling as HTMLUListElement;

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    document.body.classList.toggle("after:hidden")
  })

  closeMenu.addEventListener("click", () =>{ 
    menu.classList.toggle("hidden")
    document.body.classList.toggle("after:hidden")
  })
}

toggleMenu()