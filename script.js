var next = document.querySelector('.next');
var current = document.querySelector('.current');

function start() {
    let count = 0;
    let interval = setInterval(function() {
        if (count == 9) {
            clearInterval(interval);
            return;
        }
        next.classList.add(['animate']);
        count++;
        setTimeout(function() {
            next.classList.remove(['animate']);
            current.textContent = next.textContent;
            next.textContent = parseInt(next.textContent) + 1;
        }, 500);

    }, 1000);

}

