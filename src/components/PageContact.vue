<template>
    <div>
        <!--  Loader -->
        <div id="loader" v-fade-out></div>
        <!--  Loader End -->
        <!-- Contact us heading-->
        <section id="contact_header">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">CONTACT</h4>
                <div class="border-bar4 margin-t20"></div>
                </div>
            </div>
            </div>
        </section>
        <!-- Contact us heading end-->
        <!-- enquiry form -->
        <section id="contact_form" class="padding-tb50">
            <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 text-center">
                    <img src="../assets/img/contact/contact.jpg" alt="Design" id="imgContactUs">
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 margin-t30">
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <h4 class="h4-type1">Bangkok</h4>
                        <div>
                            <p class="p-type-3">
                                Jewelry Trade Center<br>
                                341A/A 3 Floor Silom road Bangrak Bangkok 10500<br>
                                Tel: +(66)2 630 0699
                            </p>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <h4 class="h4-type1">Chanthaburi</h4>
                        <div>
                            <p class="p-type-3">
                                Room D202/1 2nd Floor, Chan Gems Building<br>
                                189 Sichuan Rd. Mueang Chanthaburi District, Chanthaburi 22000
                            </p>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <div class="col-md-1 col-xs-2">
                           <img src="../assets/img/social/line.svg" class="logo" title="Line" alt="LINE">
                        </div>
                        <div class="col-md-7 col-xs-6">
                            <p class="logo">Line ID : gcilab</p>
                        </div>
                        <div class="col-md-4 col-xs-4">
                            <img src="../assets/img/contact/qr-line.jpg" class="qrcode" alt="QR-LINE">
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <div class="col-md-1 col-xs-2">
                           <img src="../assets/img/social/wechat.svg" class="logo" title="WeChat" alt="WeChat">
                        </div>
                        <div class="col-md-7 col-xs-6">
                            <p class="logo">Wechat : gcilab</p>
                        </div>
                        <div class="col-md-4 col-xs-4">
                            <img src="../assets/img/contact/qr-wechat.jpg" class="qrcode" title="WeChat"  alt="QR-WeChat">
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <div class="col-md-1 col-xs-2">
                           <img src="../assets/img/social/facebook.svg" class="logo" title="Facebook" alt="Facebook">
                        </div>
                        <div class="col-md-7 col-xs-6">
                            <p class="logo">Facebook : gcilab</p>
                        </div>
                        <div class="col-md-4 col-xs-4">
                            &nbsp;
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <h4 class="h4-type1"></h4>
                        <div>
                            <p class="p-type-3">
                                Tel: +(66)83 916 7158
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <!-- enquiry form end -->

        <!-- google map -->
        <section id="googlemap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.24518580092612!2d100.51996847439027!3d13.723113154212902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d2d351f5d1%3A0xc18202ec7d5a3d1e!2sJewelry+Trade+Center+Thailand!5e0!3m2!1sen!2sth!4v1519454169213"
            height="400"  style="border:0" allowfullscreen class="map-frame"></iframe>
        </section>
        <!-- google map end -->
    </div>
</template>
<script>
export default {
  name: 'PageContact',
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {
    $('.parallax-mirror').hide()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact_header {
  height: 265px;
  background-image: url(../assets/img/cover/default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
#imgContactUs {
    width: 75%;
}
@media (max-width: 768px) {
  #contact_header{
      height: 230px;
  }
  #imgContactUs {
    width: 80%;
}
}
</style>
