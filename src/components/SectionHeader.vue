<template>
    <div>
        <!-- header navigation -->
        <header id="navigation">
            <div class="container">
                <div class="row">
                <div class="col-md-2">
                    <a class="navbar-brand" href="#/"><img src="../assets/img/nav-logo.png" alt="GCILab" class="main-nav-logo"></a>
                    <span class="ti-menu nav-btn-open hidden-md hidden-lg"></span>
                </div>
                <div class="col-md-8 text-center">
                    <ul class="main-nav">
                        <li>
                            <router-link to="about" class="nav-link" rel="tooltip" title="About GCILab">About Us</router-link>
                        </li>
                        <li>
                            <router-link to="services" class="nav-link" rel="tooltip" title="Services">Services</router-link>
                        </li>
                        <li>
                            <router-link to="verified" class="nav-link" rel="tooltip" title="Verified">Verified Report</router-link>
                        </li>
                        <li>
                            <router-link to="contact" class="nav-link" rel="tooltip" title="Contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <a href="#" class="login-btn btn pull-right">Sign In</a>
                </div>
                </div>
            </div>
        </header>
        <!-- header navigation end -->
        <!-- sign in -->
        <section id="signin_box">
        <div class="container">
            <div class="row">
            <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12 signin_cont">
                <p class="heading_login">LOGIN</p>
                <div class="margin-t50">
                <input type="email" name="email" placeholder="Enter Email" class="input_text">
                <input type="password" name="mobile" placeholder="Enter Password" class="input_text">
                <input type="submit" name="submit" value="SIGN IN" class="input_submit">
                <a href="" class="forgot_pass">Forgot Password?</a>
                </div>
                <span class="ti-close close_btn"></span>
            </div>
            </div>
        </div>
        </section>

        <!-- sign in end -->
    </div>
</template>
<script>
export default {
  name: 'SectionHeader',
  mounted: () => {
    /* ----------------------------------|| Mobile Menu ||---------------------------------------------- */

    var navigation = $('#navigation')
    var navigationButton = $('.nav-btn-open')
    navigationButton.on('click', function (e) {
      var $el = $(e.currentTarget)
      if ($el.hasClass('ti-menu')) {
        navigation.css('height', '100%')
        $el.removeClass('ti-menu').addClass('ti-close')
      } else {
        navigation.css('height', '80px')
        $el.removeClass('ti-close').addClass('ti-menu')
      }
    })

    /* ----------------------------------|| Sign in toggle ||---------------------------------------------- */

    var loginButton = $('#navigation a.login-btn')
    var signinPopup = $('#signin_box')
    var signinPopupCont = signinPopup.find('.signin_cont')
    var signinClose = signinPopup.find('span.close_btn')

    loginButton.on('click', function (e) {
      e.preventDefault()
      if (signinPopupCont.hasClass('show')) {
        signinPopupCont.removeClass('show')
        signinPopup.fadeOut(200)
      } else {
        signinPopup.fadeIn(200)
        signinPopupCont.addClass('show')
      }
      return false
    })

    signinClose.on('click', function () {
      signinPopupCont.removeClass('show')
      signinPopup.fadeOut(200)
    })
  }
}
</script>
