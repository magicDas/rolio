
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

function validation(){
    let telInputs = document.querySelectorAll('input[type="tel"]');
    if (telInputs){
        telInputs.forEach(tel=>{
            Inputmask("+380" + "(" + "99" + ")" + " " + "999" + "-" + "99" + "-" + "99", {
                greedy: false,
                placeholder: "X",
                validator: "[0-9]",
                onincomplete: function() {
                    tel.setCustomValidity('Fill in the field')
                },
                oncomplete: function() {
                    tel.setCustomValidity('')
                },
            }).mask(tel);
        });
    };
}

validation();