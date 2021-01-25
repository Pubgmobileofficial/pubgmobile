function openHero(evt, heroClass) {
    var i, gallery, tab;
    gallery = document.getElementsByClassName("gallery");
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }
    tab = document.getElementsByClassName("header-menu-list");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" aktif", "");
    }
    document.getElementById(heroClass).style.display = "block";
    evt.currentTarget.className += " aktif";
}
document.getElementById("defaultOpen").click();