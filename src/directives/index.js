import {
  FadeOut
} from './fades'
import {
  FlexSlider
} from './flexslider'

var invokePlugins = () => {
  var plugins = () => {
    return [
      $,
      $.fn.flexslider
    ]
  }
  plugins.bind(this)
}

export default {
  register: () => {
    // invoke all 3th-party
    invokePlugins()

    // Register a global custom directive called `v-fade-out`
    FadeOut.init()
    FlexSlider.init()
  }
}
