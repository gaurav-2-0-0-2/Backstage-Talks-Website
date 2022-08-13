
function changeBg(){
    let body = document.querySelector('body');

    let scrollValue = window.scrollY;
    // console.log(scrollValue);

    if (scrollValue < 500) {
        body.classList.remove('bgColor-1')
    }else{
        body.classList.add('bgColor-1')
    }

    
    if (scrollValue < 1200) {
        body.classList.remove('bgColor-2')
    }else{
        body.classList.add('bgColor-2')
    }


    if (scrollValue < 1880) {
        body.classList.remove('bgColor-3')
    }else{
        body.classList.add('bgColor-3')
    }

    if (scrollValue < 2552) {
        body.classList.remove('bgColor-4')
    }else{
        body.classList.add('bgColor-4')
    }


    if (scrollValue < 3310) {
        body.classList.remove('bgColor-5')
    }else{
        body.classList.add('bgColor-5')
    }

}


window.addEventListener('scroll',changeBg);


