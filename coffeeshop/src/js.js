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
/*
    goUpButton.addEventListener('click', function () {
        scrollToTop(250);
    });

    function scrollToTop(duration) {
        const start = document.documentElement.scrollTop || document.body.scrollTop;
        const startTime = Date.now();

        function scrollStep() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            document.documentElement.scrollTop = document.body.scrollTop = start - start * progress;

            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }
});*/

//JS - Zoom in/Out
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
});

