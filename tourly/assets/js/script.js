'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
function openRequestForm() {
  document.getElementById("requestModal").style.display = "flex";
}

function closeRequestForm() {
  document.getElementById("requestModal").style.display = "none";
}

document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();

  closeRequestForm();

  const banner = document.getElementById("successBanner");
  banner.style.display = "block";

  setTimeout(() => {
    banner.style.display = "none";
  }, 5000);

  this.reset();
});
// View All Packages functionality
document.getElementById("viewAllBtn").addEventListener("click", function () {
  const hiddenPackages = document.querySelectorAll(".extra-package");

  hiddenPackages.forEach(pkg => {
    pkg.style.display = "block";
  });

  // Hide button after click
  this.style.display = "none";
});
const packages = document.querySelectorAll(".package-item");

packages.forEach((pkg, index) => {
  if (index > 2) {
    pkg.style.display = "none";
  }
});
// HEADER NAVIGATION FUNCTIONS

function goTo(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function focusSearch() {
  const section = document.querySelector('.tour-search');
  const input = document.getElementById('destination');

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if (input) input.focus();
    }, 400);
  }
}
