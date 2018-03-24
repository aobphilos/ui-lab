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
                <div class="border-bar4 margin-t20 "></div>
                </div>
            </div>
            </div>
        </section>
        <!-- Contact us heading end-->
        <!-- enquiry form -->
        <section id="contact_form" class="padding-tb50">
            <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-5 col-xs-12">
                    <!-- <img src="../assets/img/brands/5.png" alt="Design"> -->
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12 margin-t30">
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <div class=" col-md-3 col-xs-12 text-center ">
                            <span class="icon ti-location-pin"></span>
                        </div>
                        <div class="col-md-9 col-xs-12">
                            <p>
                                1) JEWELRY TRADE CENTER (SILOM GALLERIA)<br>
                                341A/A, 3rd FLOOR, SILOM ROAD, BANGRAK, BANGKOK, THAILAND, 10500
                            </p>
                            <p>
                                2) CHAN GEMS BUILDING<br>
                                ROOM D202/1 2ND FLOOR, 189 SICHUAN RD. MUEANG CHANTHABURI DISTRICT, CHANTHABURI 220
                            </p>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                        <div class=" col-md-3 col-xs-12 text-center">
                            <span class="icon ti-headphone"></span>
                        </div>
                        <div class="col-md-9 col-xs-12">
                            <p>(66)83 916 7158, (66)2 630 0699</p>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_detail text-center">
                        <div class="col-md-3 col-xs-12">
                            &nbsp;
                        </div>
                        <div class="col-md-3 col-xs-12">
                            <div><span>LINE</span></div>
                            <img src="../assets/img/contact/qr-line.jpg" alt="LINE">
                        </div>
                        <div class="col-md-1 col-xs-12">
                            &nbsp;
                        </div>
                        <div class="col-md-3 col-xs-12">
                            <div><span>WeChat</span></div>
                            <img src="../assets/img/contact/qr-wechat.jpg" alt="WeChat">
                        </div>
                        <div class="col-md-2 col-xs-12">
                            &nbsp;
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
</style>
