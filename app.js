document.addEventListener("DOMContentLoaded", function(){
    // Scene select, animation
    var lScene = document.getElementById("scene-left");
    var rScene = document.getElementById("scene-right");
    var gScene = document.getElementById("scene-container");

    gScene.addEventListener("mouseleave", function() {
        lScene.classList.remove("scene-40");
        lScene.classList.remove("scene-60");
        lScene.children[0].classList.remove("scene_zoom-out");
        rScene.classList.remove("scene-40");
        rScene.classList.remove("scene-60");
        rScene.children[0].classList.remove("scene_zoom-out");
    });

    lScene.addEventListener("mouseenter", function() {
        rScene.classList.remove("scene-60");
        rScene.children[0].classList.remove("scene_zoom-out");
        this.classList.add("scene-60");
        this.children[0].classList.add("scene_zoom-out");
        rScene.classList.add("scene-40");
    });

    rScene.addEventListener("mouseenter", function() {
        lScene.classList.remove("scene-60");
        lScene.children[0].classList.remove("scene_zoom-out");
        this.classList.add("scene-60");
        this.children[0].classList.add("scene_zoom-out");
        lScene.classList.add("scene-40");
    });

    // Price Drop
    var galleryContent = document.getElementsByClassName("gallery_panel-content");

    for(var i = 0; i < galleryContent.length; i++) {
        galleryContent[i].addEventListener("mouseenter", function() {
            var oldPrice = this.children[2].children[0].innerHTML;
            var price = this.children[2].children[0];
            price.innerHTML = price.getAttribute("data-drop");
            price.setAttribute("data-drop", oldPrice);
            price.classList.add("gallery_price--amount-green");
            price.classList.add("gallery_price--anim");
        });

        galleryContent[i].addEventListener("mouseleave", function() {
            var oldPrice = this.children[2].children[0].innerHTML;
            var price = this.children[2].children[0];
            price.innerHTML = price.getAttribute("data-drop");
            price.setAttribute("data-drop", oldPrice);
            price.classList.remove("gallery_price--amount-green");
            price.classList.remove("gallery_price--anim");
        });
    }
});