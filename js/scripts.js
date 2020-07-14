// DROPDOWN \\
// DROPDOWN \\
// DROPDOWN \\

// HEADER \\
function dropDownNav() {
    document.getElementById("myDropdownNav").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnNav')) {
      var dropdowns = document.getElementsByClassName("header-nav");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
  
