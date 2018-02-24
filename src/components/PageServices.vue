<template>
    <div>
        <!--  Loader -->
        <div id="loader"></div>
        <!--  Loader End -->
        <!-- About us heading-->
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
        <!-- About us heading end-->
        <!-- services -->
        <section id="services" class="padding-tb100 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-left margin-tb10">
                        <div class="col-md-3 col-xs-3 col-sm-3">
                            <span class="ti-star icon-type2"></span>
                        </div>
                        <div class="col-md-9 col-xs-9 col-sm-9">
                            <h4 class="h4-type1 margin-t10">Creative Design</h4>
                            <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consect etur adipis icing elit. Volupt atum ut alias ullam tempore nobis aspe.</p>
                        </div>
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-left margin-tb10">
                        <div class="col-md-3 col-xs-3 col-sm-3">
                            <span class="ti-settings icon-type2"></span>
                        </div>
                        <div class="col-md-9 col-xs-9 col-sm-9">
                            <h4 class="h4-type1 margin-t10">Well Documented</h4>
                            <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consect etur adipis icing elit. Volupt atum ut alias ullam tempore nobis aspe.</p>
                        </div>
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-left margin-tb10">
                        <div class="col-md-3 col-xs-3 col-sm-3">
                            <span class="ti-medall icon-type2"></span>
                        </div>
                        <div class="col-md-9 col-xs-9 col-sm-9">
                            <h4 class="h4-type1 margin-t10">Responsive Design</h4>
                            <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consect etur adipis icing elit. Volupt atum ut alias ullam tempore nobis aspe.</p>
                        </div>
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-left margin-tb10">
                        <div class="col-md-3 col-xs-3 col-sm-3">
                            <span class="ti-announcement icon-type2"></span>
                        </div>
                        <div class="col-md-9 col-xs-9 col-sm-9">
                            <h4 class="h4-type1 margin-t10">SEO Friendly</h4>
                            <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consect etur adipis icing elit. Volupt atum ut alias ullam tempore nobis aspe.</p>
                        </div>
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-left margin-tb10">
                        <div class="col-md-3 col-xs-3 col-sm-3">
                            <span class="ti-location-pin icon-type2"></span>
                        </div>
                        <div class="col-md-9 col-xs-9 col-sm-9">
                            <h4 class="h4-type1 margin-t10">Easy Customization</h4>
                            <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consect etur adipis icing elit. Volupt atum ut alias ullam tempore nobis aspe.</p>
                        </div>
                    </div>

                    <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-left margin-tb10">
                        <div class="col-md-3 col-xs-3 col-sm-3">
                            <span class="ti-filter icon-type2"></span>
                        </div>
                        <div class="col-md-9 col-xs-9 col-sm-9">
                            <h4 class="h4-type1 margin-t10">Clean and Modern</h4>
                            <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consect etur adipis icing elit. Volupt atum ut alias ullam tempore nobis aspe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- services End -->
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'PageServices',
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {
    $('#loader').fadeOut(500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#services_header {
    height: 300px;
    background-image: url(../assets/img/portfolio/services.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
