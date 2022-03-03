function OpenCloseNav() {
    var dropDown = document.getElementById("mySidenav");
    if (dropDown.style.marginLeft === '-325px') {
        dropDown.style.marginLeft = "0px";
    } else {
      document.getElementById("mySidenav").style.marginLeft = "-325px";
    }
}