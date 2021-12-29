const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const button = document.querySelector('btn');

let currentActive =1

next.addEventListener('click',() => {
    currentActive++
    if(currentActive>circles.length) /* stop point */
    {
        currentActive=circles.length
    }
    update()
})

prev.addEventListener('click',() => {
    currentActive--
    if(currentActive<1) /* stop point */
    {
        currentActive=1
    }
    update()
})

function update () {
    circles.forEach((circle , index) => {
        if(index <currentActive)
        {
            circle.classList.add('active')
        }
        else 
        {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width=(actives.length-1)/(circles.length-1)*99+'%' /* 99 because the line its get out when its 100% */

    if(currentActive == 1) /* if im at the first point */
    {
        prev.disabled = true
    }
    else if(currentActive == circles.length) /*if im at the last point */
    {
        next.disabled=true
    }
    else 
    {
        prev.disabled=false
        next.disabled=false
    }
}
