const tweetCount = 15;
import tweetPromise from './request'


let updateActive = (el, oldIndex, newIndex) => {
    try{
        $('.tweet.active').removeClass('active')
        $(el).addClass('active')
    } catch(e) {
        console.log(e)
    }
}

let bxslider = () => {
    $('.carousel').bxSlider({
        mode: 'vertical',
        slideWidth: 301,
        speed: 200,
        minSlides: 1,
        easing: 'ease-out',
        infiniteLoop: false,
        touchEnabled: false,
        nextSelector: $('#next-btn'),
        prevSelector: $('#prev-btn'),
        nextText: '',
        prevText: '',
        pager: false,
        onSlideNext: function(el, oldIndex, newIndex){
            $('.carousel').removeClass('top')
            $('#prev-btn').removeClass('fade');
            $('span.amazon-header').addClass('off-screen');

            if(newIndex === tweetCount - 1) {
                $('#next-btn').addClass('fade');
            }
            else {
                $('#next-btn').removeClass('fade');
            }
            updateActive(el, oldIndex, newIndex)
        },
        onSlidePrev: function(el, oldIndex, newIndex){
            $('#next-btn').removeClass('fade');

            if(newIndex === 0) {
                $('.carousel').addClass('top');
                $('#prev-btn').addClass('fade');
                $('span.amazon-header').removeClass('off-screen');
            }
            else {
                $('.carousel').removeClass('top')
                $('#prev-btn').removeClass('fade');
            }
            updateActive(el, oldIndex, newIndex)
        }
    });
}

let buildCarousel = () => {
    $(document).ready(function(){
        $('#app').hover(
            function (){
                $('.control-btn').addClass('active')
                $('.fade').removeClass('fade-hide')
            },
            function () {
                $('.control-btn').removeClass('active')
                $('.fade').addClass('fade-hide')
            }
        );

        tweetPromise.then( () => {
            bxslider();
        })
        .catch(() => {
            bxslider()
        })

    });
}

export default buildCarousel;
