<template>
    <!-- footer -->
    <footer id="footer" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1">
            <div class="col-md-4 padding-tb50">
              <img src="../assets/img/nav-logo.png" class="footerlogo" alt="">
              <p class="footer-info-text">&nbsp;</p>
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

            <div class="col-md-2 padding-tb50">
                &nbsp;
            </div>

            <div class="col-md-4 padding-tb50">
              <div class="contact-details">
                <div>
                  <span class="glyphicon glyphicon-map-marker"></span>
                  <p>
                    JEWELRY TRADE CENTER (SILOM GALLERIA)<br>
                    341A/A, 3rd FLOOR, SILOM ROAD, BANGRAK, BANGKOK, THAILAND, 10500
                  </p>
                </div>
                <div>
                  <span class="glyphicon glyphicon-earphone"></span>
                  <p>(66)83 916 7158, (66)2 630 0699</p>
                </div>
                <div class="socialnlinks">
                  <div class="row">
                  <div class="col-md-6">
                    <span class="col-md-3">line: </span>
                    <p class="col-md-9"><a href="http://line.me/ti/p/~gcilab" target="_blank">gcilab</a></p>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-6">
                    <span class="col-md-3">wechat: </span>
                    <p class="col-md-9"><a href="weixin://dl/chat?gcilab" target="_blank">gcilab</a></p>
                  </div>
                  </div>
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
