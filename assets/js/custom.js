// Custom Modal JS Start

var modal = document.querySelector(".social-modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Custom Modal JS End

// Hamburger Menu JS
function Nav() {
  var width = document.getElementById("mySidenav").style.width;
  if (width === "0px" || width == "") {
    document.getElementById("mySidenav").style.width = "250px";
    $(".animated-icon").toggleClass("open");
  } else {
    document.getElementById("mySidenav").style.width = "0px";
    $(".animated-icon").toggleClass("open");
  }
}

// Hamburger Menu JS end

// Custom select JS

const selectedAll = document.querySelectorAll(".selector-wrapper");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    let arrow = selected.parentNode.querySelector(".arrow");

    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");

      arrow.classList.add("rotated");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
        let anotherArrow = currentActive.parentNode.querySelector(".arrow");

        anotherArrow.classList.add("rotated");
      }

      arrow.classList.remove("rotated");
      optionsContainer.classList.add("active");
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.querySelector(".selected").innerHTML =
        o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");

      let arrow = selected.parentNode.querySelector(".arrow");
      arrow.classList.add("rotated");
    });
  });
});

window.addEventListener("click", function (e) {
  if (e.target.closest(".select-box") === null) {
    closeDropdown();
  }
});

function closeDropdown() {
  const selectedAll = document.querySelectorAll(".selector-wrapper");

  selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;
    let arrow = selected.parentNode.querySelector(".arrow");

    optionsContainer.classList.remove("active");
    arrow.classList.add("rotated");
  });
}

// Custom select JS end

// Review JS Start

const progressDone = document.querySelectorAll(".progress-done");

progressDone.forEach((progress) => {
  progress.style.width = progress.getAttribute("data-done") + "%";
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

// Review JS End
