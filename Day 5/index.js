    const loadingText = document.querySelector('.loading')
    const bg = document.querySelector('.bg')

    let load = 0;

    setInterval(function(){
        load++;
        if(load>99){
            clearInterval()
        }
        loadingText.innerHTML = `${load}%`;
        loadingText.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load,0,100,20,0)}px)`
    }, 30)

    const scale =  (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }


