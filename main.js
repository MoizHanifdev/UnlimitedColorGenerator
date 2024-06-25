const start =  document.getElementById('start');
const stop = document.getElementById('stop');
const heading =  document.getElementById('heading');


const green = ()=>{
    const color = parseInt(Math.random()*256);
    return color
}

const red = ()=>{
    const color = parseInt(Math.random()*256);
    return color
}

const blue = ()=>{
    const color = parseInt(Math.random()*256);
    return color
}

let startChange;
start.addEventListener('click', ()=>{
    heading.innerHTML = "Color Changing start";
    startChange = setInterval(()=>{
        document.body.style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()})`
    },100)
})

stop.addEventListener('click', ()=>{
    clearInterval(startChange);
    heading.innerHTML = "Color Changing stop";
    startChange =  null;
})