const menu = document.querySelector(".menu");
const menuList = document.querySelector(".dropdown-content");
const menuButton = document.querySelector(".menu-btn");
const icon = document.querySelector(".icon");
const iconOnHover = document.querySelector(".icon-on-hover");
const title = document.getElementsByTagName("span");
const primaryButton = document.querySelector('.primary-button');
const backLink = document.querySelector('.back-link');
const dropdownItems = document.querySelectorAll(".dropdown-item");
const bigVagina = document.querySelector(".big-vagina");
const hands = document.querySelector(".hands");
const contentPage = document.querySelector(".content-page")

Array.from(dropdownItems).forEach((item) =>
  item.addEventListener("mouseover", handleMenuItemHover)
);
menuButton.addEventListener("load", handleMenuClick);
menuButton.addEventListener("mouseover", handleMenuClick);
window.addEventListener("click", handleClickOutsideOfDropdown);
// icon.addEventListener("mouseover", handleIconHover);
window.addEventListener('load', handleMainPageLoad)
window.addEventListener('load', handleContentPageLoad)


// make this a helper function ?
function handleMainPageLoad(e){
   if (window.location.href === "http://127.0.0.1:5502/index.html") {
    const titleArr = Array.from(title)
    setTimeout(function(){
        titleArr[0].classList.remove('hidden');
        titleArr[0].classList.add('fade-in-slower')
    }, 1000)
    setTimeout(function(){
        titleArr[1].classList.remove('hidden');
        titleArr[1].classList.add('fade-in-slower')
    }, 1500)
    setTimeout(function(){
        titleArr[2].classList.remove('hidden');
        titleArr[2].classList.add('fade-in-slower')
    }, 2000)
    setTimeout(function(){
        titleArr[3].classList.remove('hidden');
        titleArr[3].classList.add('fade-in-slower')
    }, 2500)
    setTimeout(function(){
        titleArr[4].classList.remove('hidden');
        titleArr[4].classList.add('fade-in-slower')
    }, 3000)

    setTimeout(function(){
      primaryButton.classList.remove('hidden');
      primaryButton.classList.add('fade-in');
      primaryButton.addEventListener('mouseenter', function(e){
        primaryButton.classList.remove('primary-button');
        primaryButton.classList.add('primary-button-hover');
        primaryButton.addEventListener('mouseleave', function(e){
        primaryButton.classList.remove('primary-button-hover');
        primaryButton.classList.add('primary-button');

        });

      })

    }, 3500)
  }
  else return;
}




function handleContentPageLoad(e){
  const homeLink = "http://127.0.0.1:5502/index.html"
  console.log(document.referrer)
  backLink.setAttribute("href", document.referrer);

  console.log(backLink)

  
}

function handleMenuClick(e) {
  menuList.classList.toggle("hidden");

  (Array.from(dropdownItems)).filter((item => item.children[0].href === window.location.href ? item.style.textDecoration = 'underline'  : null))

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

function handleMenuItemHover(e) {
  (Array.from(dropdownItems)).filter((item => item.children[0].href === window.location.href ? item.style.textDecoration = 'underline'  : null))
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
