function SwapImage() {  
    var image = document.getElementById("myImage");
    	var button = document.getElementById("myButton");
    if (image.src.match("images/close_3.png")) {
    image.src = "images/Beast 2.png";
    	button.innerHTML = "Close Doors";
    } else {
    image.src = "images/close_3.png";
    	button.innerHTML = "Open Doors";
    }  
}
function SwapImageHover(img) {
  img.src = (img.src.match("close_3.png")) ? "images/Beast 2.png" : "images/close_3.png" ;
}
function SwapBackround(img) {
    var image = document.getElementById("myImage1");
    	var button = document.getElementById("myButton1");
    if (image.src.match("images/jesko1.jpg")) {
    image.src = "images/storyboard_1.png";
    	button.innerHTML = "Change Backround";
    } else {
    image.src = "images/jesko1.jpg";
    	button.innerHTML = "Change Backround";
    }  
}