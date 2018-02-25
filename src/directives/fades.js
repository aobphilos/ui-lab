import Vue from 'vue'

var FadeOut = {
  init: () => {
    Vue.directive('fade-out', {
      bind: (el) => {
        $(el).fadeOut(500)
      }
    })
  }

}

export {
  FadeOut
}
