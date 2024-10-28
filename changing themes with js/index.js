const textContainer = document.getElementById("intro text")

initiateFall = () =>{
    if(textContainer.classList.contains("default")){
        textContainer.classList.remove("default");
    }else if(textContainer.classList.contains("spring")){
        textContainer.classList.remove("spring");
    }else if(textContainer.classList.contains("fall")){
        textContainer.classList.remove("fall")
    }
    textContainer.classList.add("fall");
}
initiateSpring = () =>{
    if(textContainer.classList.contains("default")){
        textContainer.classList.remove("default");
    }else if(textContainer.classList.contains("spring")){
        textContainer.classList.remove("spring");
    }else if(textContainer.classList.contains("fall")){
        textContainer.classList.remove("fall")
    }
    textContainer.classList.add("spring");
}