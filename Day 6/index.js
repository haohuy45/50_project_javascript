const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () =>{
    const triggerBottom = window.innerHeight * (4/5);

    boxes.forEach(function(box){
        const boxTop = box.getBoundingClientRect().top;
        if(triggerBottom > boxTop){
            box.classList.add('show')
        }else{
            box.classList.remove('show')

        }
    })
})