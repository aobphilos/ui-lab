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
                <h4 class="h4-type3">SERVICES</h4>
                <div class="border-bar4 margin-t20 "></div>
                </div>
            </div>
            </div>
        </section>
        <!-- Services heading end-->
        <!-- Services -->
        <section id="services" class="padding-tb50">
            <div class="container">
                <div class="row">
                    <div class="col-md-10">
                        <h4 class="h4-type1">GEM IDENTIFICATION CONSULTANCY REPORT</h4>
                        <div class="col-md-8">
                            <p class="p-type-3 color-grey margin-t20">
                                <ol>
                                    <li>350 BAHT/STONE</li>
                                    <li>300 BAHT/STONE</li>
                                    <li>200 BAHT/STONE</li>
                                </ol>
                            </p>
                            <p class="p-type-3 color-grey margin-t20">ONE REPORT CAN BE CONTAINED MULTIPLE STONES DETAILS WITH ADDITIONAL FEE OF 100 BAHT PER STONE.</p>
                            <div class="example">
                                <p class="p-type-2 color-grey margin-t20">FOR EXAMPLE:</p>
                                <p class="p-type-2 color-grey margin-t20">ONE REPORT (NUMBER 1, 350 BAHT) FOR A PAIR OF RUBIES = THE TOTAL FEE IS 450 BAHT. (350 + 100)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-10 margin-t50">
                        <h4 class="h4-type1">VERBAL GEMS TESTING</h4>
                        <div class="col-md-8">
                            <p class="p-type-3 color-grey margin-t20">
                                <ol>
                                    <li>100 BAHT/STONE (WITH NO REPORT ISSUED)</li>
                                </ol>
                            </p>
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
