function attachGradientEvents() {

    let gradient = document.getElementById('gradient-box');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', function (e) {
        result.textContent = `${Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100)}%`
    });
    gradient.addEventListener('mouseleave', function () {
        result.textContent = '';
    });
}