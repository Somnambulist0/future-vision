const numberOfDrops = 100;

function createRain() {
    const rain = document.querySelector('.rain');

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 3 + 0.5}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        rain.appendChild(drop);
    }
}

createRain();

window.addEventListener('scroll', 
    function() {
    const scrollTop = window.scrollY;
    const blurValue = Math.min(10, scrollTop / 100); 
    document.querySelector('header img').style.filter = `blur(${blurValue}px)`;
}
);


