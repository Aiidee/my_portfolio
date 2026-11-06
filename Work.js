document.addEventListener("DOMContentLoaded", function(){

    const menubtn = document.getElementById("menubtn");
    const menuclose = document.getElementById("menuclose");
    const mobilemenu = document.getElementById("mobilemenu");

    if (!menubtn || !menuclose || !mobilemenu) {
        console.log("One or more menu elements could not be found.");
        return;
    }

    // OPEN MENU
    menubtn.addEventListener("click", function(){
        mobilemenu.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    // CLOSE MENU
    menuclose.addEventListener("click", function(){
        mobilemenu.classList.remove("active");
        document.body.style.overflow = "";
    });

    // CLOSE MENU WHEN A LINK IS CLICKED
    const menulinks = document.querySelectorAll(".mobilemenulinks a");

    menulinks.forEach(function(link){
        link.addEventListener("click", function(){
            mobilemenu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // CLOSE MENU WITH ESCAPE KEY
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape"){
            mobilemenu.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

});