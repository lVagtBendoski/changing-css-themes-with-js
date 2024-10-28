const textContainer = document.getElementById("intro text")

initiateFall = () =>{
    textContainer.classList.remove("default");
    textContainer.classList.remove("spring");
    textContainer.classList.add("fall");
}
initiateSpring = () =>{
    textContainer.classList.remove("default");
    textContainer.classList.remove("fall");
    textContainer.classList.add("spring");
}
