var iconNav = document.querySelector(".page-header__nav-icon");

iconNav.addEventListener("click", function(event) {
  event.preventDefault();
  iconNav.classList.toggle("page-header__nav-icon--close");
});
