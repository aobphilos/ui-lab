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
        <section id="contact_form">
            <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 get_in_touch_form">
                <p>Please use this form to submit your comments, questions or information requests. If your subject is not covered or you have a specific enquiry, use any of the alternative ways to contact listed below.</p>
                <form action="/contact" method="post" name="contct_form">
                    <input type="text" name="fullname" placeholder="Your Name" class="input_text">
                    <input type="email" name="email" placeholder="Your Email" class="input_text">
                    <input type="text" name="mobile" placeholder="Your Mobile No." class="input_text">
                    <textarea name="message" placeholder="Your Message" class="input_textarea"></textarea>
                    <input type="submit" name="submit" value="SEND" class="input_submit">
                </form>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 margin-t30">
                <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                    <div class=" col-md-3 col-xs-12 text-center ">
                        <span class="icon ti-location-pin"></span>
                    </div>
                    <p class="col-md-9 col-xs-12">164/9 Orchard St,New York, NY 10002, United States.</p>
                </div>

                <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                    <div class=" col-md-3 col-xs-12 text-center">
                        <span  class="icon ti-email"></span>
                    </div>
                    <p class="col-md-9 col-xs-12">contact@buzline.com</p>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 contact_detail">
                    <div class=" col-md-3 col-xs-12 text-center">
                        <span class="icon ti-headphone"></span>
                    </div>
                    <p class="col-md-9 col-xs-12">+1 6485 658956</p>
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
  mounted: () => { $('.parallax-mirror').hide() }
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
