<template>
    <div>
        <!--  Loader -->
        <div id="loader" v-fade-out></div>
        <!--  Loader End -->
        <!-- Services heading-->
        <section id="services_header">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">GCI LAB SERVICES</h4>
                <div class="border-bar4 margin-t20 "></div>
                </div>
            </div>
            </div>
        </section>
        <!-- Services heading end-->
        <!-- Services -->
        <section id="services" class="padding-tb100">
            <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="h4-type1">1. CONSULTANCY REPORT - <u>350 BAHT</u> / STONE</h4>
                    <div class="col-md-6">
                        <p class="p-type-3 color-grey margin-t20">One report can be contained more than 1 stones details with additional fee of 100 baht per stone.
                        </p>
                        <p>For example:</p>
                        <p>1 report for a pair of rubies - the total fee is 450 baht</p>
                        <p>(350 + 100)</p>
                    </div>
                </div>
                <div class="padding-tb50">&nbsp;</div>
                <div class="col-md-12 ">
                    <h4 class="h4-type1">2. VERBAL GEMS TESTING - <u>100 BAHT</u> / STONE (WITH NO REPORT ISSUED)</h4>
                </div>
                <div class="padding-tb50">&nbsp;</div>
                <div class="col-md-12">
                    <h4 class="h4-type1">3. ON - SITE GEMOLOGICAL CONSULTANCY SERVICE - <u>3,000 BAHT</u> / HOUR</h4>
                </div>
                <div class="padding-tb50">&nbsp;</div>
                <div class="col-md-12">
                    <h4 class="h4-type1">ON-SITE GEMOLOGICAL CONSULTANTCY SERVICES:</h4>
                    <div class="col-md-6">
                        <p class="p-type-3 color-grey margin-t20">If requested, visits can be prearranged by our gemologists to business offices who require gemological advice.</p>
                        <p class="p-type-3 color-grey margin-t20">With our gemologist's experience, it would be benefit for many jewelry companies or individuals. You don't need to hire a gemologist as fulltime, just when you have problem in some gems and want our gemologist to identify, or you need some gemological advice, i.e. pre-identify gems before sending them to well-known laboratories for the worth certificates.</p>
                        <p class="p-type-3 color-grey margin-t20">In case of the jewelry business need the custom training program which suit for employees, gemological seminar for public or clients, i.e. 4Cs of diamond, Pearl grading, Birthstones, etc. Please <router-link to="contact" rel="tooltip" title="Contact">contact us</router-link> for more information.</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <!-- Services  end-->
    </div>
</template>
<script>
export default {
  name: 'PageServices',
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {
    $('.parallax-mirror').hide()
    /* ----------------------------------|| Flex Slider ||---------------------------------------------- */

    $('.testimonial').flexslider({
      animation: 'slide',
      animationLoop: false,
      itemMargin: 5,
      minItems: 1,
      directionNav: false,
      pauseOnAction: true,
      slideshowSpeed: 3000,
      animationSpeed: 800,
      maxItems: 1
    })

    $('.clients').flexslider({
      directionNav: false,
      animation: 'slide',
      animationLoop: true,
      pauseOnAction: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 2,
      maxItems: 4,
      slideshowSpeed: 4000,
      animationSpeed: 1500
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#services_header {
  height: 265px;
  background-image: url(../assets/img/cover/default.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
