<template>
    <!-- footer -->
    <footer id="footer" class="padding-tb50">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1">
            <div class="col-md-4 padding-tb50">
              <img src="../assets/img/footer-logo.png" class="footerlogo" alt="">
              <p class="footer-info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volu ptaonsec tetur adiu ptaonsec tetur adipisicing
                elit. Volu ptatu pis icing elit. Vditiis.</p>
              <p class="copyright">&copy; 2018 GCILab.com</p>
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
                        <router-link to="verified" class="nav-link" rel="tooltip" title="Verified">Verified Report</router-link>
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
                    Jewelry Trade Center (Silom Galleria), <br>
                    341 A/A, 3rd floor, Silom Road,<br>
                    Bangrak, Bangkok,<br>
                    10500 Thailand
                  </p>
                </div>
                <div>
                  <span class="glyphicon glyphicon-envelope"></span>
                  <a href="mailto://info@gcilab.com">info@gcilab.com</a>
                </div>
                <div>
                  <span class="glyphicon glyphicon-earphone"></span>
                  <p>Tel. (66) 83 916 7158</p>
                </div>
                <div class="socialnlinks">
                  <a href="#"><span class="ti-facebook"></span></a>
                  <a href="#"><span class="ti-instagram"></span></a>
                  <a href="#"><span class="ti-twitter"></span></a>
                  <a href="#"><span class="ti-linkedin"></span></a>
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
  name: 'SectionFooter'
}
</script>
