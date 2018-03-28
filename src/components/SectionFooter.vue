<template>
    <!-- footer -->
    <footer id="footer" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1">
            <div class="col-md-4 padding-tb50">
              <img src="../assets/img/nav-logo-black.jpg" class="footerlogo" alt="">
              <p class="copyright">&copy; 2018 GCILAB.COM</p>
            </div>

            <div class="col-md-2 padding-tb50">
               <ul class="main-nav">
                    <li>
                        <router-link to="/" class="nav-link" rel="tooltip" title="GCILab">Home</router-link>
                    </li>
                    <li>
                        <router-link to="about" class="nav-link" rel="tooltip" title="About GCILab">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="services" class="nav-link" rel="tooltip" title="Services">Services</router-link>
                    </li>
                     <li>
                        <router-link to="verify" class="nav-link" rel="tooltip" title="Verify">Verify Report</router-link>
                    </li>
                    <li>
                        <router-link to="contact" class="nav-link" rel="tooltip" title="Contact">Contact</router-link>
                    </li>
                </ul>
            </div>

            <div class="col-md-1">
                &nbsp;
            </div>

            <div class="col-md-5 padding-tb50">
              <div class="contact-details">
                <div>
                  <h3 class="p-type-3">Bangkok</h3>
                  <div>
                      <p class="p-type-3">
                          Jewelry Trade Center<br>
                          341A/A 3 Floor Silom road Bangrak Bangkok 10500<br>
                          Tel: +(66)2 630 0699
                      </p>
                  </div>
                  <br>
                  <h3 class="p-type-3">Chanthaburi</h3>
                  <div>
                      <p class="p-type-3">
                          Room D202/1 2nd Floor, Chan Gems Building<br>
                          189 Sichuan Rd. Mueang Chanthaburi District, Chanthaburi 22000
                      </p>
                  </div>
                </div>
                <div>
                  <img src="../assets/img/social/line.svg" class="logo" title="Line" alt="Line">
                  <a href="http://line.me/ti/p/~gcilab" target="_blank">gcilab</a>
                </div>
                <div>
                  <img src="../assets/img/social/wechat.svg" class="logo" title="WeChat" alt="WeChat">
                  <a href="#" target="_self">gcilab</a>
                </div>
                <div>
                  <img src="../assets/img/social/facebook.svg" class="logo" title="Facebook" alt="Facebook">
                  <a href="#" target="_self">gcilab</a>
                </div>
                <div>
                  <div class="p-type-3">Tel: +(66)83 916 7158</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer end -->
</template>
<script>
export default {
  name: 'SectionFooter',
  mounted: () => {}
}
</script>
