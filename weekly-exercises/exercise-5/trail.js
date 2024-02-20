// svg trailing cursor

const svg = document.querySelector('svg.trail');
const path = svg.querySelector('path');

let points = []; 
let segments = 65;
let mouse = {
    x: 0,
    y: 0
};

const move = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    mouse.x = x;
    mouse.y = y;

    if (points.length === 0) {
        for (let i = 0; i < segments; i++) {
            points.push({
                x: x,
                y: y,
            });
        };
    };
};

const anim = () => {

    //starting point
    let px = mouse.x;
    let py = mouse.y;

    points.forEach((p, index) => {
        p.x = px;
        p.y = py;

        let n = points[index + 1];

        if (n) {
            px = px - (p.x - n.x) * 0.2;
            py = py - (p.y - n.y) * 0.2;
        };
    });

    path.setAttribute('d', `M ${points.map(p => `${p.x} ${p.y}`).join(` L `)}`);

    requestAnimationFrame(anim);
};

const resize = () => {
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    svg.style.width = ww + 'px';
    svg.style.height = wh + 'px';
    svg.setAttribute('viewBox', `0 0 ${ww} ${wh}`);
};

document.addEventListener('mousemove', move);
window.addEventListener('resize', resize);
anim();
resize();

// set circle cursor color

const cursorCircle = document.querySelector('.cursor-circle');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorCircle.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`; 
}); 