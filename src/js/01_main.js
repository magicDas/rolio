
window.addEventListener('scroll', function () {
    let $header = document.querySelector('.header'),
    top = this.scrollY;
    if (top>0) {
        $header.classList.add('--scroll');
    } else {
        $header.classList.remove('--scroll');
    }
});

function round() {
    let $round = document.querySelector('header__round'),
    wrapperLeft = document.querySelector('.header__wrapper').offsetLeft;

    return $round.style.left = wrapperLeft + 'px';
}
round();