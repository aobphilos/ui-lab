import Vue from 'vue'

var FlexSlider = {
  init: () => {
    Vue.directive('flex-slider', (el) => {
      $(el).flexslider({
        animation: 'slide',
        controlNav: true,
        easing: 'easeInCubic',
        slideshowSpeed: 5500,
        animationSpeed: 1200,
        pauseOnAction: true,
        touch: true,
        keyboard: true,
        after: function (slider) {
          $('.flex-active-slide').find('.flex-caption').hide().delay(0).show(0).addClass('animated')
        },
        before: function (slider) {
          $(el).find('.flex-caption').fadeOut(200).removeClass('animated')
          $('.flex-active-slide').find('.flex-caption').css('transform', '')
        }

      })
    })
  }

}

export {
  FlexSlider
}
