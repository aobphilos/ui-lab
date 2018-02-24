<template>
    <div>
        <!--  Loader -->
        <div id="loader"></div>
        <!--  Loader End -->

        <!-- About us heading-->
        <section id="about_header">
            <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                <h4 class="h4-type3">ABOUT US</h4>
                <div class="border-bar4 margin-t20 "></div>
                </div>
            </div>
            </div>
        </section>
        <!-- About us heading end-->

        <!-- what we do  -->
        <section id="about" class="padding-tb100">
            <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                <h4 class="h4-type2">What We Do</h4>
                <div class="border-bar2 margin-t20 "></div>
                <p class="p-type-3 color-grey margin-t20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores corporis
                    velit rem blanditiis! Ipsum facere, quae distinctio tempore, quas fugiat labore. Aliquid officiis, porro. tempore
                    nobis asperiores corporis velit rem blanditiis! Ipsum facere, quae distinctio tempore, quas fugiat labore. Aliquid
                    officiis, porro.
                </p>
                </div>
            </div>
            </div>
        </section>
        <!-- what we do  end-->
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'PageAbout',
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
#about_header {
    height: 300px;
    background-image: url(../assets/img/portfolio/aboutus.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
