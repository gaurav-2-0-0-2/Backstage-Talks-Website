
function changeBg(){
    let body = document.querySelector('body');

    let scrollValue = window.scrollY;
    // console.log(scrollValue);

    if (scrollValue < 490) {
        body.classList.remove('bgColor-1')
    }else{
        body.classList.add('bgColor-1')
    }

    
    if (scrollValue < 1098) {
        body.classList.remove('bgColor-2')
    }else{
        body.classList.add('bgColor-2')
    }


    if (scrollValue < 1601) {
        body.classList.remove('bgColor-3')
    }else{
        body.classList.add('bgColor-3')
    }

    if (scrollValue < 2301) {
        body.classList.remove('bgColor-4')
    }else{
        body.classList.add('bgColor-4')
    }


    if (scrollValue < 2901) {
        body.classList.remove('bgColor-5')
    }else{
        body.classList.add('bgColor-5')
    }

}


window.addEventListener('scroll',changeBg);


