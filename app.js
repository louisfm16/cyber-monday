document.addEventListener("DOMContentLoaded", function(){
    // Scene select, animation
    var lScene = document.getElementById("scene-left");
    var rScene = document.getElementById("scene-right");
    var gScene = document.getElementById("scene-container");

    gScene.addEventListener("mouseleave", function() {
        lScene.classList.remove("scene-40");
        lScene.classList.remove("scene-60");
        rScene.classList.remove("scene-40");
        rScene.classList.remove("scene-60");
    });

    lScene.addEventListener("mouseenter", function() {
        rScene.classList.remove("scene-60");
        this.classList.add("scene-60");
        rScene.classList.add("scene-40");
    });

    rScene.addEventListener("mouseenter", function() {
        lScene.classList.remove("scene-60");
        this.classList.add("scene-60");
        lScene.classList.add("scene-40");
    });
});