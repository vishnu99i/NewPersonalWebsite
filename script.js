function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var hoverableDiv = document.getElementById("aboutdiv");
    
hoverableDiv.addEventListener("touchstart", function() {
  this.classList.add("touch");
});

hoverableDiv.addEventListener("touchend", function() {
  this.classList.remove("touch");
});