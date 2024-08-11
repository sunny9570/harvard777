$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    $('#header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on');

    });

    $('#header .snb>ul>li>a').on('click', function (e) {
        if ($('#header .snb>ul>li ul').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideDown();
            $(this).parent().siblings().find('ul').slideUp();

        }

    });
    $(window).on('resize', function () {
        $('#header .snb').removeClass('on');
        $('#header .mbtn').removeClass('on');
        $('#header .snb>ul>li ul').removeAttr('style')
    });



    $('.search .btn').on('click', function () {
        $(this).next().fadeIn();

    });
    $('.search .close').on('click', function () {
        $('#search').fadeOut();
    });
});






$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        const hh = $('#footer').offset().top;


        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }



        if (sct > hh - 400) {
            $('#header').hide()
        } else {
            $('#header').show()
        }
    });


    const mainVisualSlide = new Swiper('.main_visual_slide', {
        // parallax: true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2500,
            // disableOnInteraction: false,
        },

        navigation: {
            nextEl: '#mainVisual .arrows .next',
            prevEl: '#mainVisual .arrows .prev',
        },
    });


});



$(function () {

    const typewriter = new Typewriter('.txt_ani', {
        //autoStart: true,
        //loop: true
    });


    //typewriter.start();

    let swc = false;

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        let ust = $('.main_professor').offset().top;


        if ((sct > ust - 300) && (swc == false)) {
            typewriter
                .deleteAll()
                .typeString('Touch is much more than just conscious perception <br> of what you are actively reaching out to feel <br> or what is touching your skin.')
                .start();

            swc = true;
        }
    })

});

// $(function () {




//     const typed = new Typed('.txt_ani', {
//         strings: ['Touch is much more than just conscious perception<br> of what you are actively reaching out to feel,<br> or what is touching your skin."'],
//         typeSpeed: 80,
//         backSpeed: 100,
//         fadeOut: true,
//         //smartBackspace: true,
//         cursorChar: '',
//         // loop: true
//     });

//     typed.stop();


//     $(window).on('scroll', function () {
//         let sct = $(window).scrollTop();
//         let v = Math.floor(sct / 10)
//         //console.log('start')
//         console.log(v)

//         if (v > 300) {
//             console.log('start');
//             typed.start();
//         }
//     })

// });


$(function () {
    const mainVisionSlide = new Swiper('.mainVisionSlide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            769: {
                slidesPerView: 3,
            }
        },
        pagination: {
            el: '.mainVisionSlide .dots',
            clickable: true,
        }

    });



    $('.main_smell_vision .itm').on('mouseenter', function () {
        $(this).find('p').slideDown();
    });


    $('.main_smell_vision .itm').on('mouseleave', function () {
        $(this).find('p').slideUp();
    })



    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/YGFkitvR_-g',
        containment: '.main_banner02 ',
        // 아래 뒤에 값 없애고 showControls: false더하면 유투브재생버튼없어짐
        showControls: false,
        playOnlyIfVisible: true,
        // playOnlyIfVisible동영상이 돌아갈때만 재생

    });

    $('.main_tab .menu_list button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_tab .tab_content>ul>li')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    AOS.init();


});




