
// on hover sports js

// Get all the sport options
const sportOptions = document.querySelectorAll(".fb_nav_option ul li");
const sportDiv = document.querySelector(".sports_div");
const sports = document.querySelector(".fb_sports");

// Function to check if the cursor is outside the sport div
function isHoveredOutsideSport(event) {
  return !sportDiv.contains(event.target) && !sports.contains(event.target);
}

// Event listener to close the sport div when hovered outside
document.addEventListener("mouseover", function (event) {
  if (isHoveredOutsideSport(event)) {
    sportDiv.style.display = "none";
  }
});

sports.addEventListener("mouseover", () => {
  sportDiv.style.display = "block";
});

// on hover sports js

// on hover city js

const cityDiv = document.querySelector(".city_div");
const city = document.querySelector(".fb_city");
const viewAllCities = document.querySelector(".fb_all_cities"); // Select the "View All Cities" element
const cityListDiv = document.querySelector(".city_list_div"); // Select the city list div


// Function to check if the cursor is outside the div
function isHoveredOutsideCity(event) {
  return !cityDiv.contains(event.target) && !city.contains(event.target);
}

// Event listener to close the sport div when hovered outside
document.addEventListener("mouseover", function (event) {
  if (isHoveredOutsideCity(event)) {
    cityDiv.style.display = "none";
    cityDiv.style.height = "auto";
    cityListDiv.style.display = "none";
    viewAllCities.textContent = "View All Cities";
  }
});

city.addEventListener("mouseover", () => {
  cityDiv.style.display = "block";
});

// on hover city js ends

// view and hide city list js

document.addEventListener("DOMContentLoaded", function () {

  // Toggle function to handle the click event
  function toggleCityList() {
    if (viewAllCities.textContent === "View All Cities") {
      cityListDiv.style.display = "block"; // Show the city list
      viewAllCities.textContent = "Hide All Cities";
      cityDiv.style.height = "30rem";
    } else {
      cityListDiv.style.display = "none"; // Hide the city list
      viewAllCities.textContent = "View All Cities";
      cityDiv.style.height = "auto";
    }
  }

  // Event listener for toggling the city list
  viewAllCities.addEventListener("click", toggleCityList);
});

// view and hide city list js ends
