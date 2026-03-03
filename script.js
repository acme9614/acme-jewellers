 const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");
    const menuToggle = document.getElementById("menu-toggle");
    const closeDrawer = document.getElementById("close-drawer");

    menuToggle.addEventListener("click", () => {
      drawer.classList.remove("drawer-close");
      drawer.classList.add("drawer-open");
      overlay.classList.remove("hidden");
      overlay.classList.add("show");
    });

    closeDrawer.addEventListener("click", () => {
      drawer.classList.remove("drawer-open");
      drawer.classList.add("drawer-close");
      overlay.classList.remove("show");
      setTimeout(() => {
        overlay.classList.add("hidden");
      }, 300);
    });

    overlay.addEventListener("click", () => {
      closeDrawer.click();
    });
// drawers menu

function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}

function navigateToCatalogues() {
  Toaster.postMessage("navigateToCatalogues");
}

function navigateToQuickPurchase() {
  Toaster.postMessage("navigateToQuickPurchase");
}

function navigateToNotification() {
  Toaster.postMessage("navigateToNotification");
}

function navigateToLogout() {
  Toaster.postMessage("navigateToLogout");
}

// headerSwiper

const headerSwiper = new Swiper("#headerSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 700,
  effect: "slide",
});

// collection swiper

const collectionSwiper = new Swiper("#collectionSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 6 },
  },
});

// swiper script

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// scrollContainer
const scrollContainer = document.getElementById("scrollContainer");

function scrollLeft() {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
}

// radiant-collection

const radiantswiper = new Swiper("#radiant-collection", {
  slidesPerView: 3.3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3.3,
    },
  },
});

// customerSwiper

const customerSwiper = new Swiper("#customerSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

 let expanded = false;
      function toggleBoxes() {
        const container = document.getElementById("boxContainer");
        const arrow = document.getElementById("arrowIcon");

        if (!expanded) {
          container.classList.remove("max-h-[15.5rem]");
          arrow.classList.add("rotate-180");
          expanded = true;
        } else {
          container.classList.add("max-h-[15.5rem]");
          arrow.classList.remove("rotate-180");
          expanded = false;
        }
      }


