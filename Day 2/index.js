// const progress = document.querySelector('.progress');
// const nextBtn = document.querySelector('#next');
// const prevBtn = document.querySelector('#prev');
// const circles = document.querySelectorAll('.circle');

// let currentActive = 1;

// nextBtn.addEventListener('click', ()=>{
//     currentActive++;

//     if(currentActive > circles.length){
//         currentActive = circles.length
//     }

//     update();

// })
// prevBtn.addEventListener('click', ()=>{
//     currentActive--;

//     if(currentActive < 1){
//         currentActive = 1
//     }

//     update();

// })

// function update(){
//     //active circle
//     circles.forEach(function(circle, index){
//         if(index < currentActive){
//             circle.classList.add('active')
//         }else{
//             circle.classList.remove('active')
//         }
//     })

//     //progress
//     var activeCircles = document.querySelectorAll('.active');
//     progress.style.width = (activeCircles.length-1) / (circles.length -1) * 100 + '%';

//     //button 
//     if(currentActive === 1){
//         prevBtn.disabled = true;
//     }else if(currentActive === circles.length){
//         nextBtn.disabled = true;
//     }else{
//         prevBtn.disabled = false;
//         nextBtn.disabled = false;
//     }
// }


const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');


let currentActive = 1;
next.addEventListener('click', function(){
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();

})

prev.addEventListener('click', function(){
    currentActive--;
    if(currentActive < 1){
        currentActive = 1
    }

    update();

})

function update(){
    circles.forEach(function(circle, index){
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    //progress
    let activeCircles = document.querySelectorAll('.active')
    progress.style.width = (activeCircles.length -1) / (circles.length -1) * 100 + '%';




    //button

    if(currentActive === circles.length){
        next.disabled = true;
    }else if(currentActive === 1){
        prev.disabled = true;

    }else{
        next.disabled = false;
        prev.disabled = false;
    }
}

