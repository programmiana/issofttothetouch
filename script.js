import { menuItems } from "./data.js";

const menuList = document.querySelector(".dropdown-content");
const menuButton = document.querySelector(".menu-btn");
const icon = document.querySelector(".icon");
// const iconOnHover = document.querySelector(".icon-on-hover");
const title = document.getElementsByTagName("span");
const buttonContainer = document.querySelector(".story");
const backLink = document.querySelector(".back-link");
// const bigVagina = document.querySelector(".big-vagina");
// const hands = document.querySelector(".hands");

menuButton.addEventListener("load", handleMenuClick);
menuButton.addEventListener("mouseover", handleMenuClick);
window.addEventListener("click", handleClickOutsideOfDropdown);
window.addEventListener("load", handlePageLoad);

function createMenu(arr) {
  const ul = document.createElement("ul");
  const menuContent = createMenuContent(arr);
  menuList.appendChild(ul);
  ul.innerHTML = menuContent;
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  menuList.addEventListener("mouseenter", handleMenuItemHover)
}

function handleMenuItemHover(e) {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  Array.from(dropdownItems).filter((item) => {
  item.children[0].href === window.location.href &&
      (item.style.textDecoration = "underline");
  });
}

function createMenuContent(arr) {
  const html = arr
    .map(
      (item) =>
        `<li class="dropdown-item"><a id="${item.id}" href="${item.href}">${item.name}</option></li>`
    )
    .join("");

  return html;
}

function handleMenuClick(e) {
  menuList.classList.toggle("hidden");
}

function handleClickOutsideOfDropdown(e) {
  if (
    !e.target.matches(".menu-btn") ||
    !e.target.matches(".dropdown-content")
  ) {
    if (!menuList.classList.contains("hidden")) {
      menuList.classList.add("hidden");

      // menuList.addEventListener('mouseleave', function(){
      //     menuList.classList.add('hidden')
      // })
    }
  }
}

function handlePageLoad(e){
  createMenu(menuItems);
  if (window.location.href === "http://127.0.0.1:5502/index.html") {
    handleMainPageLoad()
  } else {
    handleContentPageLoad()
  }
}

function handleMainPageLoad() {
  if (window.location.href === "http://127.0.0.1:5502/index.html") {
    const titleArr = Array.from(title);

    // make this a promise ?
    animateTitle(titleArr);

    const primaryButton = document.createElement("a");
    primaryButton.innerText = "let your vagina speak".toUpperCase();
    primaryButton.setAttribute("href", "./we-want-your-story.html");
    primaryButton.classList.add("primary-button");
    primaryButton.addEventListener("mouseenter", function (e) {
      primaryButton.classList.remove("primary-button");
      primaryButton.classList.add("primary-button-hover");
    });

    buttonContainer.appendChild(primaryButton);

    console.log(buttonContainer);
  } else return;
}

function animateTitle(arr) {
  arr.map((el, i) => {
    setTimeout(function () {
      el.classList.remove("hidden");
      el.classList.add("fade-in-slower");
    }, i * 1100);
  });
}

function handleContentPageLoad() {
  if (window.location.href !== "http://127.0.0.1:5502/index.html") {
    const homeLink = "http://127.0.0.1:5502/index.html";
    console.log(document.referrer);
    backLink.setAttribute("href", document.referrer);
    console.log(backLink);
  }
}

function handleIconHover(e) {
  e.preventDefault();

  icon.setAttribute("src", "assets/images/icon-hover.png");
  icon.insertAdjacentElement("beforebegin", link);

  icon.addEventListener("mouseleave", function () {
    icon.setAttribute("src", "assets/images/icon.png");
  });
}

// function handleMouseOver(e){
//     console.log('mouse enter')
//     bigVagina.classList.add('animation')

//     bigVagina.style.opacity = '1';
//     if (e.currentTarget !== hands) {
//         bigVagina.style.opacity = '0';
//     }
// }
// function handleMouseLeave(e){
//     bigVagina.style.opacity = '0';
// }
