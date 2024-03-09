//JQuery animation - navlink hover
$(document).ready(function() {
    $('.nav-link').hover(function() {
        $(this).css('position', 'relative');
        let underline = $('<div>').css({
            content: '',
            height: '3px',
            width: '0',
            background: 'blanchedalmond',
            position: 'absolute',
            left: '0',
            bottom: '-10px',
            transition: 'width 0.5s'
        }).appendTo($(this));

        setTimeout(function() {
            underline.css('width', '100%');
        }, 0);
    }, function() {
        $(this).find('div').css('width', '0');
    });
});


//JS - button click
var btnElement = document.getElementById('menu');

btnElement.addEventListener('click', function() {
    window.location.href = 'menu.html';
});


//JS animation - scroll up
const toTop = document.querySelector(".goUpBtn");

window .addEventListener("scroll", () => {
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove ("active");
    }
})

const scrollSound = new Audio();
scrollSound.src = "./buch-8538.mp3";


document.querySelector(".goUpBtn").addEventListener('click', function() {
    scrollSound.play();
});
document.querySelector(".goUpBtn active").addEventListener('click', function() {
    scrollSound.play();
});

/*JS - Zoom in/Out
$(document).ready(function () {
    $(".gallery-card").hover(
        function () {
            var target = $(this).data('target');
            $(target).fadeIn(300);
        },
        function () {
            var target = $(this).data('target');
            $(target).fadeOut(300);
        }
    );
});*/

