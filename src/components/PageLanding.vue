<template>
    <div>
        <!--  Loader -->
        <div id="loader" v-fade-out>
            <div class="wrapper">
                <div class="cssload-loader"></div>
            </div>
        </div>
        <!--  Loader End -->
        <item-slider />
        <!-- what we do  -->
        <section id="whatwedo" class="padding-tb100">
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

        <!-- features -->
        <section id="features" class="padding-tb100 bg-grey">
            <div class="container">
            <div class="row ">
                <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center margin-tb10">
                <span class="ti-paint-bucket icon-type1"></span>
                <h4 class="h4-type1 margin-t10">Creative Design</h4>
                <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores quae
                    distinctio tempore.
                </p>
                </div>

                <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center margin-tb10">
                <span class="ti-desktop icon-type1"></span>
                <h4 class="h4-type1 margin-t10">Responsive</h4>
                <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores quae
                    distinctio tempore.
                </p>
                </div>

                <div class="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center margin-tb10">
                <span class="ti-pencil-alt icon-type1"></span>
                <h4 class="h4-type1 margin-t10">Well Documented</h4>
                <p class="p-type-4 color-grey margin-t10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores quae
                    distinctio tempore.
                </p>
                </div>
            </div>
            </div>
        </section>
        <!-- features end-->

        <!-- who we are -->
        <section id="whoweare">
            <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 padding-tb100">
                <h4 class="h4-type2 margin-t10">Who We Are</h4>
                <div class="border-bar margin-t20 "></div>
                <p class="p-type-5 color-grey margin-t20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </p>
                <a href="#" class="btn login-btn">GET STARTED</a>
                </div>
                <div class="col-md-6 col-xs-12 parallax-window" data-parallax="scroll" data-image-src="../assets/img/whoweare.jpg" data-speed="0.4">
                </div>
            </div>
            </div>
        </section>
        <!-- who we are end-->
        <!-- portfolio -->
        <section id="portfolio" class="padding-tb100">
            <div class="container">

            <div class="row">
                <div class="col-md-12">
                <h4 class="h4-type2 text-center">Portfolio</h4>
                <div class="border-bar2 margin-t20"></div>
                </div>
            </div>

            <div class="row margin-t50">

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="../static/img/portfolio/item1.jpg" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="../static/img/portfolio/item1.jpg" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="../static/img/portfolio/item1.jpg" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="../static/img/portfolio/item1.jpg" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="../static/img/portfolio/item1.jpg" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>

                <div class="col-md-4 margin-t30">
                <div class="portfolio-item">
                    <a href="../static/img/portfolio/item1.jpg" data-lightbox="portfolio">
                    <img src="../assets/img/portfolio/item1.jpg" alt="">
                    </a>
                </div>
                </div>
            </div>

            </div>
        </section>
        <!-- portfolio end-->
    </div>
</template>
<script>
import ItemSlider from '@/components/ItemSlider'
export default {
  name: 'PageLanding',
  components: { ItemSlider },
  data () {
    return {
      msg: 'Welcome to GCILab'
    }
  },
  mounted: () => {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
